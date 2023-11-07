import GiveMarkModal from "../../components/Modal/GiveMarkModal";

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
              status === 'pending' ? <span className="font-bold text-primary">Pending</span> :
              <button className="btn bg-orange-600 normal-case font-bold items-center text-white">Confirm</button>
          }
        </th>
        <th>
            {
                <GiveMarkModal />
            }
        </th>
      </tr>
    );
  };
  
  export default submittedAssignmentsTable;

