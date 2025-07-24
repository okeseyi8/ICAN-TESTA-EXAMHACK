// import React from 'react'

const SetQuestions = () => {
  return (
    <div className="w-full px-10 py-15">
      <h2 className="font-bold text-4xl">Exam Question Management</h2>
      <p className="font-normal text-xl text-[#444]">
        Create, edit, and manage questions.
      </p>
      <div className="mt-7  ">
        <button className="bg-[#2534D7] text-white font-medium p-4 w-[300px] h-[64px] text-center">
          Create New
        </button>
        <button className="bg-white text-black font-medium p-4 w-[300px] h-[64px] text-center">
          Set Exam Questions
        </button>
        <button></button>
      </div>
      <div className="w-full flex justify-center">
        <form className="w-5/10 mt-5 bg-white  py-10 px-10 rounded-2xl">
          <h2 className="text-[26px] text-center font-bold ">Create An Exam</h2>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="Subject">
                Subject
              </label>
              <select
                className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                name=""
                id=""
              >
                <option>Select An Option</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="Subject">
               Diet
              </label>
              <select
                className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                name=""
                id=""
              >
                <option>Select An Option</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="Subject">
                Duration
              </label>
              <select
                className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                name=""
                id=""
              >
                <option>Select An Option</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="Subject">
             Total Score
              </label>
            <input placeholder="Set a score" className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2" type="text" />
            </div>
            <div className="flex justify-center">
<button className="bg-[#2534D7] w-[125px] p-4 h-[54px] rounded-2xl text-white">
                Create 
            </button>
            </div>
            
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetQuestions;
