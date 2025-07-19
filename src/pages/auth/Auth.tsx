import useToggle from "../../hooks/useToggle";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import { AnimatePresence, motion } from "framer-motion";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { HiXCircle } from "react-icons/hi2";
import useFormChangeHandler from "../../hooks/useFormChangeHandler";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [authSwitch, , setLogin, setSignUp] = useToggle();
  const [pswdSwitch, , setTrue, setFalse] = useToggle();

  const [isPasswordVisible, togglePassword] = useToggle();
  const [isConfirmPassword, toggleConfirmedPassword] = useToggle();
  const [passwordForm, handleChange] = useFormChangeHandler();

  return (
    <AuthLayout>
      <div className="w-full h-screen flex justify-center">
        <div className="w-[80%] flex flex-col">
          <div
            className={`form-switch w-full h-13 bg-[#E5E5E5] rounded-2xl transition-all duration-500 ease-in-out ${
              !authSwitch && !pswdSwitch ? "mt-[50px]" : "mt-[204px]"
            }`}
          >
            <div className="flex px-3 py-2 gap-1">
              <button
                onClick={() => {
                  setLogin();
                  setFalse();
                }}
                className={`w-1/2 cursor-pointer h-9 rounded-2xl text-xl font-bold transition-colors duration-300 ease-in-out ${
                  authSwitch ? "bg-white " : "bg-transparent"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => {
                  setSignUp();
                }}
                className={`w-1/2 cursor-pointer h-9 rounded-2xl text-xl font-bold transition-colors duration-300 ease-in-out ${
                  !authSwitch ? "bg-white " : "bg-transparent"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={authSwitch ? "login" : pswdSwitch ? "password" : "signup"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {authSwitch && (
                <>
                  <form className="mt-15 flex flex-col gap-6.5">
                    <div>
                      <label htmlFor="Email">Email/ICAN No.</label>
                      <input
                        placeholder="Enter your email"
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="Password">Password</label>
                      <input
                        placeholder="*****************"
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                  </form>
                  <div className="w-full flex mt-9 justify-between">
                    <div>Remember Me</div>
                    <p className="font-medium text-[16px] text-[var(--primary-color)]">
                      Forgot Password?
                    </p>
                  </div>
                  <div className="w-full flex justify-center mt-15">
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
                    >
                      Login
                    </button>
                  </div>
                </>
              )}

              {!authSwitch && !pswdSwitch && (
                <>
                  <form className="pt-[45px] flex flex-col gap-6.5">
                    <div>
                      <label htmlFor="FullName">Full Name</label>
                      <input
                        placeholder="Enter your name"
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="ICAN">ICAN Number</label>
                      <input
                        placeholder="ICAN No."
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="Email">Email</label>
                      <input
                        placeholder="Email"
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="Phone">Phone Number</label>
                      <input
                        placeholder="Phone"
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="Date">Date</label>
                      <input
                        className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
                        type="date"
                      />
                    </div>
                  </form>
                  <div className="w-full flex mt-9 justify-between">
                    <div>Remember Me</div>
                    <p className="font-medium text-[16px] text-[var(--primary-color)]">
                      Already have an account?
                    </p>
                  </div>
                  <div className="w-full flex justify-center mt-15">
                    <button
                      onClick={() => setTrue()}
                      className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {pswdSwitch && (
                <>
                  <form className="pt-8 flex flex-col gap-6.5">
                    <div>
                      <label htmlFor="create">Create Password</label>
                      <div className="relative">
                        <input
                          id="create"
                          name="password"
                          onChange={handleChange}
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
                        {passwordForm.password && (
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
                                  key={
                                    passwordForm.password.length >= 8
                                      ? "check"
                                      : "x"
                                  }
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
                                  key={
                                    /[A-Z]/.test(passwordForm.password)
                                      ? "check"
                                      : "x"
                                  }
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
                          onClick={(e) => e.preventDefault()}
                          className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
                        >
                          Create Account
                        </button>
                      </div>
                    </motion.div>
                  </form>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Auth;
