import useFormChangeHandler from "../../hooks/useFormChangeHandler";
import { useShallow } from "zustand/shallow";
import { useAuthStore } from "../../store/AuthStore";

import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const { login, loginLoading } = useAuthStore(
    useShallow((s) => ({
      login: s.login,
      loginLoading: s.loginLoading
    }))
  );
  const navigate = useNavigate()
  const loginFunct = async() => {
    await login(loginDetails)
    navigate('/dashboard')

  }
  const [loginDetails, handleLoginChange] = useFormChangeHandler<loginPayload>({
    email: "",
    password: "",
  });
  return (
    <>
      <form className="  flex flex-col gap-6.5">
        <div>
          <label htmlFor="Email">Email/ICAN No.</label>
          <input
            placeholder="Enter your email"
            name="email"
            className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
            type="text"
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            placeholder="*****************"
            name="password"
            className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
            type="text"
            onChange={handleLoginChange}
          />
        </div>
      </form>
      <div className="w-full flex mt-9 justify-between">
        <div className="flex gap-2.5">
          <input type="checkbox" />
          Remember Me</div>
        <p className="font-medium text-[16px] text-[var(--primary-color)]">
          Forgot Password?
        </p>
      </div>
      <div className="w-full flex justify-center mt-15">

        <button
          onClick={() => {
            // navigate("/dashboard");
            // login(loginDetails);
            loginFunct()
            console.log("Login Payload:", loginDetails, import.meta.env);
          }}
          className=" flex justify-center h-10 items-center cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
        >
          {loginLoading ? <Loader /> : "Login"}
       
        </button>
      </div>
    </>
  );
};

export default UserLogin;
