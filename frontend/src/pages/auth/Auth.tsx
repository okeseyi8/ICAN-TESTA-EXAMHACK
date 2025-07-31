import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import { AnimatePresence, motion } from "framer-motion";

import { useShallow } from "zustand/shallow";

import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";
import UploadForm from "./UploadForm";
import { useSwitchStore } from "../../store/useSwitchStore";
import { PasswordForm } from "./PasswordForm";
import { useEffect } from "react";
import { useAuthStore } from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
useNavigate;
const Auth = () => {
  const navigate = useNavigate();
  const {
    isLogin,
    showLogin,
    showSignUp,
    showPasswordStep,

    backToBasicInfo,
    backToPasswordStep,
    showUploadStep,
  } = useSwitchStore(
    useShallow((s) => ({
      isLogin: s.isLogin,
      showLogin: s.showLogin,
      showSignUp: s.showSignUp,
      showPasswordStep: s.showPasswordStep,

      backToBasicInfo: s.backToBasicInfo,
      showUploadStep: s.showUploadStep,
      backToPasswordStep: s.backToPasswordStep,
    }))
  );
 const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (user){
      navigate("/dashboard")
    }else(
      navigate("/")
    )

  }, [])

  return (
    <AuthLayout>
      <div className="w-full lg:min-h-screen flex justify-center  ">
        <div className="w-[80%] flex flex-col  mb-6">
          <div
            className={`form-switch w-full h-13 bg-[#E5E5E5] rounded-2xl transition-all duration-500 ease-in-out ${
              showUploadStep
                ? "mt-[150px]"
                : !isLogin && !showPasswordStep
                ? "mt-[50px] "
                : "lg:mt-[204px] my-[35px]"
            }`}
          >
            <div className="flex px-3 py-2 gap-1">
              <button
                onClick={() => {
                  showLogin();
                  backToBasicInfo();
                  backToPasswordStep();
                }}
                className={`w-1/2 cursor-pointer h-9 rounded-2xl text-xl font-bold transition-colors duration-300 ease-in-out ${
                  isLogin ? "bg-white " : "bg-transparent"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => {
                  showSignUp();
                }}
                className={`w-1/2 cursor-pointer h-9 rounded-2xl text-xl font-bold transition-colors duration-300 ease-in-out ${
                  !isLogin ? "bg-white " : "bg-transparent"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : showPasswordStep ? "password" : "signup"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {isLogin && <UserLogin />}

              {!isLogin && !showPasswordStep && !showUploadStep && (
                <UserSignup />
              )}

              {showPasswordStep && !showUploadStep && (
                <>
                  <PasswordForm />
                </>
              )}
              {showUploadStep && <UploadForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Auth;
