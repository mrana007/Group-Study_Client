import GiveMarkModal from "../../components/Modal/GiveMarkModal";

const SubmittedAssignmentsTable = ({submittedAssignment}) => {
    const { _id, creator, examineeName, pdf, title, marks, status } = submittedAssignment;
    const defaults = {pdf, examineeName, title, marks, creator, status};
  
    return (
      <tr>
        <th>
        </th>
        <td className="text-center">{examineeName}</td>
        <td className="text-center">{title}</td>
        <td className="text-center">{pdf}</td>
        <td className="text-center">{marks}</td>
        <th>
          {
              status === 'pending' ? <span className="font-bold text-orange-600 text-lg">Pending</span> :
              <span className=" font-bold text-green-900 text-lg text-center">Confirmed</span>
          }
        </th>
        <th className="text-center">
            {
                <GiveMarkModal _id={_id} defaults={defaults} ></GiveMarkModal>
            }
        </th>
      </tr>
    );
  };
  
  export default SubmittedAssignmentsTable;

