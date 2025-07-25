

const Review = () => {
  return (
     <div className="w-full px-10 py-15">
      {" "}
      <h2 className="font-bold text-4xl">Review Exam Submissions</h2>
      <p className="font-normal text-xl text-[#444]">
        Real-time proctoring of students taking the exam.
      </p>
       <section className="w-full bg-white mt-6 rounded-2xl shadow-md px-4 py-4">
          <h1 className="font-semibold text-2xl">Subject Breakdown</h1>
          <p className="text-[#736B6B]">Your performance in each course</p>
          <table className="w-full mt-6  border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-[#000] text-[18px] border-b border-[#736B6B]">
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4">Submission ID</th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">Student Name</th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">
                Score
                </th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">Status</th>
                <th className="pb-3 font-semibold border-b border-[#736B6B] w-1/4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">SUB- 003</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Chioma Nwosu</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">34/50</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Graded</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">SUB- 003</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Chioma Nwosu</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">34/50</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Graded</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">SUB- 003</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Chioma Nwosu</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">34/50</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Graded</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              <tr className="text-[#222] bg-white ">
                <td className="py-4 font-medium border-b border-[#736B6B]">SUB- 003</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Chioma Nwosu</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">34/50</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Graded</td>
                <td className="py-4 font-medium border-b border-[#736B6B] text-center">Approved</td>
              </tr>
              
             
            </tbody>
          </table>
        </section>
    </div>
  )
}

export default Review