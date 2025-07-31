

import { useSwitchStore } from "../../store/useSwitchStore";
import { useShallow } from "zustand/shallow";
const UserSignup = () => {
  const { goToPasswordStep } = useSwitchStore(
    useShallow((s) => ({
      goToPasswordStep: s.goToPasswordStep,
    }))
  );
  return (
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
          onClick={() => goToPasswordStep()}
          className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserSignup;
