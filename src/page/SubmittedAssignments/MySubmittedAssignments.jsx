
// import SubmittedAssignmentsTable from "./SubmittedAssignmentsTable";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MySubmittedAssignmentsTable from "./MySubmittedAssignmentsTable";

const MySubmittedAssignments = () => {

    const {user}= useContext(AuthContext);

    const [mySubAssignments, setMyAssignments] =useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/submittedAssignments?creator=${user?.email}`)
        .then(res=>res.json())
        .then(data=> setMyAssignments(data))
    }
    ,[])

  return (
    <div className="max-w-7xl px-2 md:px-0 mx-auto">
      <h2 className="text-5xl text-center my-10">
        My Submitted Assignments: {mySubAssignments?.length}
      </h2>
      <div className="overflow-x-auto mb-10 bg-green-100">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="">
              <th>
                <label></label>
              </th>
              <th className="font-bold text-xl text-black">Examinee Name</th>
              <th className="font-bold text-xl text-black">Title</th>
              <th className="font-bold text-xl text-black">PDF Preview</th>
              <th className="font-bold text-xl text-black">Marks</th>
              <th className="font-bold text-xl text-black">Status</th>
              <th className="font-bold text-xl text-black">Obtain Marks</th>
            </tr>
          </thead>
          <tbody>

            {
                mySubAssignments?.map(assign=>{
                    <MySubmittedAssignmentsTable assign={assign}></MySubmittedAssignmentsTable>
                })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmittedAssignments;
