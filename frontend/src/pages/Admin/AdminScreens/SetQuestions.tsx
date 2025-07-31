import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const SetQuestions = () => {
  const [tab, setTab] = useState("create");
  const [questions, setQuestions] = useState([
    { type: "Objective", question: "", options: ["", "", "", ""], answer: "" },
  ]);
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        type: "Objective",
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };
  const handleDeleteQuestion = (index: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="w-full px-10 py-15">
      <h2 className="font-bold text-4xl">Exam Question Management</h2>
      <p className="font-normal text-xl text-[#444]">
        Create, edit, and manage questions.
      </p>
      <div className="mt-7  ">
        <button
          onClick={() => setTab("create")}
          className={`${
            tab === "create"
              ? " bg-[#2534D7] text-white"
              : "bg-white text-black"
          } font-medium p-4 w-[300px] h-[64px] text-center`}
        >
          Create New
        </button>
        <button
          onClick={() => setTab("setQuestion")}
          className={`${
            tab === "setQuestion"
              ? " bg-[#2534D7] text-white"
              : "bg-white text-black"
          } font-medium p-4 w-[300px] h-[64px] text-center`}
        >
          Set Exam Questions
        </button>
        <button></button>
      </div>
      <div className="w-full flex justify-center">
        <AnimatePresence mode="wait">
          {tab === "create" ? (
            <motion.form
              key="box1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-5/10 mt-5 bg-white  py-10 px-10 rounded-2xl"
            >
              <h2 className="text-[26px] text-center font-bold ">
                Create An Exam
              </h2>
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
                    Exam Level
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
                  <input
                    placeholder="Set a score"
                    className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                    type="text"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#2534D7] w-[125px] p-4 h-[54px] rounded-2xl text-white">
                    Create
                  </button>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.form
              key="box2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-9/10 mt-5 bg-white  py-10 px-10 rounded-2xl"
            >
              <h2 className="text-[26px] text-center font-bold ">
                Create New Exam Questions
              </h2>
              <div className="flex flex-col gap-5 ">
                <div className="flex gap-4">
                  <div className="w-1/2 flex flex-col">
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
                  <div className="w-1/2 flex flex-col">
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
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2 flex flex-col">
                    <label className="font-semibold" htmlFor="Subject">
                      Level
                    </label>
                    <select
                      className="border  border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                      name=""
                      id=""
                    >
                      <option>Select An Option</option>
                    </select>
                  </div>
                  <div className="w-1/2 flex flex-col">
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
                </div>
                <motion.div layout className="">
                  <AnimatePresence mode="popLayout">
                    {questions.map((q, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        }}
                        key={index}
                        className="mt-6"
                      >
                        <motion.div
                          layout
                          initial={{ height: "auto" }}
                          animate={{ height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col">
                            <div className="flex w-full justify-between items-center">
                              <label className="text-[#666] font-semibold">
                                Question {index + 1}
                              </label>
                              <button
                                type="button"
                                onClick={() => handleDeleteQuestion(index)}
                                className="cursor-pointer flex items-center gap-1 text-red-500 hover:text-red-600 px-2 py-1 hover:bg-red-100 rounded-md bg-red-50 transition"
                              >
                                <HiOutlineTrash className="text-lg" />
                                <span className="text-sm">Delete</span>
                              </button>
                            </div>
                            <select
                              value={q.type}
                              onChange={(e) => {
                                const updated = [...questions];
                                updated[index].type = e.target.value;
                                setQuestions(updated);
                              }}
                              className="border border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                            >
                              <option value="Objective">Objective</option>
                              <option value="Theory">Theory</option>
                            </select>
                          </div>

                          {q.type === "Objective" ? (
                            <>
                              <input
                                placeholder="Enter a question"
                                value={q.question}
                                onChange={(e) => {
                                  const updated = [...questions];
                                  updated[index].question = e.target.value;
                                  setQuestions(updated);
                                }}
                                className="w-full border border-[#D9D9D9] px-2 rounded-md h-[56px] mt-2"
                              />
                              <div className="options w-full flex gap-2 mt-2">
                                {["A", "B", "C", "D"].map((opt, i) => (
                                  <input
                                    key={i}
                                    placeholder={`Option ${opt}`}
                                    value={q.options[i]}
                                    onChange={(e) => {
                                      const updated = [...questions];
                                      updated[index].options[i] =
                                        e.target.value;
                                      setQuestions(updated);
                                    }}
                                    className="w-full border border-[#D9D9D9] px-2 rounded-md h-[56px]"
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <textarea
                              placeholder="Enter a question"
                              value={q.question}
                              onChange={(e) => {
                                const updated = [...questions];
                                updated[index].question = e.target.value;
                                setQuestions(updated);
                              }}
                              className="w-full border h-[220px] border-[#D9D9D9] px-2 rounded-md mt-2"
                            />
                          )}

                          <div className="w-full flex items-center gap-6 mt-2">
                            <h3 className="bg-[#91B5FF80] rounded-2xl w-15 h-10.5 p-4 text-center flex justify-center items-center">
                              Ans
                            </h3>
                            <input
                              placeholder="Enter an answer"
                              value={q.answer}
                              onChange={(e) => {
                                const updated = [...questions];
                                updated[index].answer = e.target.value;
                                setQuestions(updated);
                              }}
                              className="w-full border border-[#D9D9D9] px-2 rounded-md h-[56px]"
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <motion.button
                    layout
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddQuestion();
                    }}
                    className="cursor-pointer mt-4 bg-[#F2F2FF] flex font-medium gap-2 justify-center items-center w-full h-[50px] rounded-md "
                  >
                    Add New Question
                    <IoMdAddCircleOutline className="text-2xl" />
                  </motion.button>
                </motion.div>

                <div className="flex justify-center ">
                  <button className="cursor-pointer bg-[#2534D7] w-[125px] p-4 h-[54px] rounded-2xl text-white">
                    Save
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SetQuestions;
