import useFormChangeHandler from "../../hooks/useFormChangeHandler";
// import { useAuthStore } from "../../store/AuthStore";
import { useSwitchStore } from "../../store/useSwitchStore";
import { useShallow } from "zustand/shallow";

const UserSignup = () => {
  const { goToPasswordStep,  } = useSwitchStore(
    useShallow((s) => ({
      goToPasswordStep: s.goToPasswordStep,
     

    }))
  );
  // const register = useAuthStore((s) =>  s.register)
  const [signUpDetails, handleSignUpChange] = useFormChangeHandler<SignUp>({
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",

    ican_number: "",
    email: "",
    phone_number: 0,
    
  });
  return (
    <>
      <form className="pt-[45px] flex flex-col gap-6.5">
        <div className="w-full flex gap-2.5">
          <div className="w-[50%]">
            <label htmlFor="FullName">First Name</label>
            <input
              name="first_name"
           
              onChange={handleSignUpChange}
             
              placeholder="Enter your name"
              className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
              type="text"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="FullName">Last Name</label>
            <input
              name="last_name"
             onChange={handleSignUpChange}
              placeholder="Enter your name"
              className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
              type="text"
            />
          </div>
        </div>
        <div>
          <label htmlFor="ICAN">ICAN Number</label>
          <input
            onChange={handleSignUpChange}
            placeholder="ICAN No."
            name="ican_number"
            className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            onChange={handleSignUpChange}
            placeholder="Email"
            name="email"
            className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone Number</label>
          <input
            onChange={handleSignUpChange}
            placeholder="Phone"
            name="phone_number"
            className="w-full border p-4 mt-2 border-[#DADADA] rounded-sm"
            type="text"
          />
        </div>
      </form>
      <div className="w-full flex mt-9 justify-between">
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          Remember Me
        </div>
        <p className="font-medium text-[16px] text-[var(--primary-color)]">
          Already have an account?
        </p>
      </div>
      <div className="w-full flex justify-center mt-15">
        <button
          type="button"
          onClick={() => 
            {
               localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails))
               goToPasswordStep();
             


            }}
          className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserSignup;
