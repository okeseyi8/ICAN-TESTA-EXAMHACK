import useFormChangeHandler from "../../hooks/useFormChangeHandler";
import { useShallow } from "zustand/shallow";
import { useAuthStore } from "../../store/AuthStore";
const UserLogin = () => {
  const { login } = useAuthStore(
    useShallow((s) => ({
      login: s.login,
    }))
  );

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
        <div>Remember Me</div>
        <p className="font-medium text-[16px] text-[var(--primary-color)]">
          Forgot Password?
        </p>
      </div>
      <div className="w-full flex justify-center mt-15">
        <button
          onClick={() => {
            // navigate("/dashboard");
            login(loginDetails);
            console.log("Login Payload:", loginDetails, import.meta.env);
          }}
          className="font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default UserLogin;
