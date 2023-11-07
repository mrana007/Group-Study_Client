
const submittedAssignmentsTable = ({submittedAssignment}) => {
    const { examineeName, title, marks, status } = submittedAssignment;
  
    return (
      <tr>
        <th>
        </th>
        <td>{examineeName}</td>
        <td>{title}</td>
        <td>{marks}</td>
        <th>
          {
              status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
              <button className="btn bg-orange-600 normal-case font-bold items-center text-white">Pending</button>
          }
        </th>
        <th>
            {
                <button className="btn bg-orange-500 text-white  normal-case">Give Mark</button>
            }
        </th>
      </tr>
    );
  };
  
  export default submittedAssignmentsTable;

