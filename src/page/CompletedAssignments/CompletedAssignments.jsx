import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import CompletedAssignmentsTable from "./CompletedAssignmentsTable";

const CompletedAssignments = () => {

   const {user} = useContext(AuthContext);
   const [myAssignments, setMyAssignments] = useState([]);

    const url = "http://localhost:5000/giveMarks";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAssignments(data))
    }, [user, url]);
   

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl text-center my-10">Completed Assignments: {myAssignments.length}</h2>
            <div className="overflow-x-auto mb-10 bg-green-100">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>
                <label>
                </label>
              </th>
              <th className="font-bold text-xl text-black text-center">Examinee</th>
              <th className="font-bold text-xl text-black text-center">Title</th>
              <th className="font-bold text-xl text-black text-center">Assignments Marks</th>
              <th className="font-bold text-xl text-black text-center">Status</th>
              <th className="font-bold text-xl text-black text-center">Obtain Marks</th>
              <th className="font-bold text-xl text-black text-center">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {
                myAssignments?.map(myAssignment=> <CompletedAssignmentsTable key={myAssignment._id} myAssignment={myAssignment}></CompletedAssignmentsTable>)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default CompletedAssignments;