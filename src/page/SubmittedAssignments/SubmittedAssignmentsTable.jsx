import GiveMarkModal from "../../components/Modal/GiveMarkModal";

const submittedAssignmentsTable = ({submittedAssignment}) => {
    const { _id, examineeName, title, marks, status } = submittedAssignment;
  
    return (
      <tr>
        <th>
        </th>
        <td>{examineeName}</td>
        <td>{title}</td>
        <td>{marks}</td>
        <th>
          {
              status === 'pending' ? <span className="font-bold text-orange-600 text-lg">Pending</span> :
              <span className=" font-bold text-green-900 text-lg">Confirmed</span>
          }
        </th>
        <th>
            {
                <GiveMarkModal _id={_id}></GiveMarkModal>
            }
        </th>
      </tr>
    );
  };
  
  export default submittedAssignmentsTable;

