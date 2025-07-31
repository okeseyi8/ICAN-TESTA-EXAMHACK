import { useState } from "react";
import Dummyupload from "../../assets/icons/dummyupload.svg?react";
import { TfiPlus } from "react-icons/tfi";
import { useAuthStore } from "../../store/AuthStore";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const UploadForm = () => {
  const navigate =  useNavigate()
  const [selectedImage, setSelectedImage] = useState(null);
  const uploadImage = useAuthStore((s) => s.uploadImage);
  const imageUrl = useAuthStore((s) => s.imageUrl);
  const user = useAuthStore((s) => s.user);
  const updateProfileImage = useAuthStore((s) => s.updateProfileImage)
  const uploadLoading = useAuthStore((s) => s.uploadLoading);
  const registerLoading = useAuthStore((s) => s.registerLoading);
  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      await handleUpload(file);
    }
  };
  const handleUpload = async (file?: File) => {
    const uploadFile = file || selectedImage;
    if (!uploadFile) return;

    await uploadImage(uploadFile);
  };
  const updateInfo = {
    avatar_url: imageUrl,
  };
  const userUpdate = async () => {
      if (user?.id === undefined) {
    console.error("User ID is undefined");
    return;
  }
   await updateProfileImage(updateInfo, user?.id)
   navigate("/dashboard")


  }
  console.log("hi", imageUrl);
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
          {imageUrl ? (
            <div className="w-70 h-70 my-[30px] rounded-full overflow-hidden">
              <img className="w-full h-full  object-cover" src={imageUrl} />
            </div>
          ) : (
            <div className="relative flex items-center justify-center w-full h-full">
              {uploadLoading && (
                <div className="absolute z-10 flex items-center justify-center w-full h-full rounded-full shadow-lg bg-black/30">
                  <div className="w-10 h-10 animate-spin rounded-full border-4 border-gray-300 border-l-blue-500"></div>
                </div>
              )}

              <Dummyupload className="w-full h-full object-cover rounded-md " />

              <TfiPlus className="absolute text-white text-7xl " />
            </div>
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          id="photo"
          name="photo"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <button
          className={`${selectedImage ? "text-[#000]" : "text-[#ccc]"}`}
          onClick={(e) => {
            e.preventDefault();
            handleUpload();
          }}
        >
          Upload Now
        </button>
        <div className="w-full flex justify-center mt-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              userUpdate()
            }}
            className="cursor-pointer flex justify-center h-10 font-medium w-5/12 bg-[var(--primary-color)] text-white py-2 rounded-md"
          >
            {registerLoading ? <Loader /> : "Create Account"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
