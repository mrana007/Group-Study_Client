import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentsTable from "./SubmittedAssignmentsTable";

const SubmittedAssignments = () => {
  const submittedAssignments = useLoaderData();
  console.log(submittedAssignments);

  return (
    <div className="max-w-7xl px-2 md:px-0 mx-auto">
      <h2 className="text-5xl text-center my-10">
        Users Submitted Assignments: {submittedAssignments.length}
      </h2>
      <div className="overflow-x-auto mb-10 bg-green-100">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="">
              <th>
                <label></label>
              </th>
              <th className="font-bold text-xl text-black text-center">Examinee Name</th>
              <th className="font-bold text-xl text-black text-center">Title</th>
              <th className="font-bold text-xl text-black text-center">PDF Preview</th>
              <th className="font-bold text-xl text-black text-center">Marks</th>
              <th className="font-bold text-xl text-black text-center">Status</th>
              <th className="font-bold text-xl text-black text-center">Obtain Marks</th>
            </tr>
          </thead>
          <tbody>
            {submittedAssignments.map((submittedAssignment) => (
              <SubmittedAssignmentsTable
                key={submittedAssignment._id}
                submittedAssignment={submittedAssignment}
              ></SubmittedAssignmentsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedAssignments;
