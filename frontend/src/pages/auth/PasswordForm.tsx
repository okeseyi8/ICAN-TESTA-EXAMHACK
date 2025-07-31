import useToggle from "../../hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { HiXCircle } from "react-icons/hi2";

import useFormChangeHandler from "../../hooks/useFormChangeHandler";
import { useSwitchStore } from "../../store/useSwitchStore";
import { useShallow } from "zustand/shallow";
export const PasswordForm = () => {
  const {goToUploadStep} = useSwitchStore(useShallow((s) => ({
    goToUploadStep: s.goToUploadStep
  })))
  const [passwordForm, handleFormChange] = useFormChangeHandler({
    password: "", 
    confirmPassword: ""

  });
  const [isConfirmPassword, toggleConfirmedPassword] = useToggle();
  const [isPasswordVisible, togglePassword] = useToggle();
  return (
    <>
      <form className="pt-8 flex flex-col gap-6.5">
        <div>
          <label htmlFor="create">Create Password</label>
          <div className="relative">
            <input
              id="create"
              name="password"
              onChange={handleFormChange}
              placeholder="*****************"
              className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
              type={isPasswordVisible ? "text" : "password"}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                togglePassword();
              }}
              className="absolute top-5/12 right-5"
            >
              {isPasswordVisible ? (
                <RiEyeLine className="text-2xl" />
              ) : (
                <RiEyeCloseLine className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <div className="relative">
            <input
              placeholder="*****************"
              className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
              name="confirmPassword"
              type={isConfirmPassword ? "text" : "password"}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleConfirmedPassword();
              }}
              className="absolute top-5/12 right-5"
            >
              {isConfirmPassword ? (
                <RiEyeLine className="text-2xl" />
              ) : (
                <RiEyeCloseLine className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        <motion.div layout>
          <AnimatePresence>
            {passwordForm?.password && (
              <motion.div
                key="password-requirements"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                layout
                className=""
              >
                <div className="flex items-center gap-3 text-[#736B6B]">
                  <div className="flex justify-center items-center w-5 h-5 border border-[#DADADA] rounded-full">
                    <motion.div
                      key={passwordForm.password.length >= 8 ? "check" : "x"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {passwordForm.password.length >= 8 ? (
                        <FaCircleCheck className="text-[#2534D7]" />
                      ) : (
                        <HiXCircle className="text-[22px] text-red-600" />
                      )}
                    </motion.div>
                  </div>
                  Minimum of 8 characters
                </div>
                <div className="flex items-center gap-3 text-[#736B6B]">
                  <div className=" flex justify-center items-center w-5 h-5 border border-[#DADADA] rounded-full">
                    <motion.div
                      key={/[A-Z]/.test(passwordForm.password) ? "check" : "x"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/[A-Z]/.test(passwordForm.password) ? (
                        <FaCircleCheck className="text-[#2534D7]" />
                      ) : (
                        <HiXCircle className="text-[22px] text-red-600" />
                      )}
                    </motion.div>
                  </div>
                  Uppercase Character
                </div>
                <div className="flex items-center gap-3 text-[#736B6B]">
                  <div className="flex justify-center items-center w-5 h-5 p-0 border border-[#DADADA] rounded-full">
                    <motion.div
                      key={
                        /[!@#$%^&*(),.?":{}|<>_\-\\[\]]/.test(
                          passwordForm.password
                        )
                          ? "check"
                          : "x"
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/[!@#$%^&*(),.?":{}|<>_\-\\[\]]/.test(
                        passwordForm.password
                      ) ? (
                        <FaCircleCheck className="text-[#2534D7]" />
                      ) : (
                        <HiXCircle className="text-[22px] text-red-600" />
                      )}
                    </motion.div>
                  </div>
                  Special Character (-, _ @)
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full flex justify-center mt-10">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                goToUploadStep();
              }}
              className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </motion.div>
      </form>
    </>
  );
};
