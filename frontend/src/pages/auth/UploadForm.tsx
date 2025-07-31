import Dummyupload from "../../assets/icons/dummyupload.svg?react";
import { TfiPlus } from "react-icons/tfi";
const UploadForm = () => {
  return (
    <>
      <div className="w-full flex flex-col g  justify-center items-center">
        <h1 className=" font-bold text-3xl mt-5">Upload Profile Photo</h1>
        <p className="font-medium text-lg mt-3 text-[#736B6B]">
          Profile picture must be a recent picture of you showing your face
          clearly
        </p>
      </div>
      <div className=" cursor-pointer w-full my-5 flex justify-center ">
        <label
          htmlFor="photo"
          className="cursor-pointer relative px-4 py-2 bg-white border border-none rounded-md text-sm  transition"
        >
          <Dummyupload />
          <TfiPlus className="absolute top-[33%] text-white text-9xl right-[33%]" />
        </label>
        <input
          type="file"
          accept="image/*"
          id="photo"
          name="photo"
          className="hidden"
        />
        
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <p>Upload Now</p>
        <div className="w-full flex justify-center mt-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="cursor-pointer font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
