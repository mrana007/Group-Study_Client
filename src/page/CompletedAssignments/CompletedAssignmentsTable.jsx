
const CompletedAssignmentsTable = ({myAssignment, }) => {

    const {examineeName, title, marks, status, giveMarks, feedback  } = myAssignment;

    return (
      <tr>
        <th>
        </th>
        <td className="text-center">{examineeName}</td>
        <td className="text-center">{title}</td>
        <td className="text-center">{marks}</td>
        <td className="text-center">{status}</td>
        <td className="text-center">{giveMarks}</td>
        <td className="text-center">{feedback}</td>
        
        <th>
        </th>
      </tr>
    );
  };
  
  export default CompletedAssignmentsTable;
