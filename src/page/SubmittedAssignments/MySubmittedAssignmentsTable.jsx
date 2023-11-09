import GiveMarkModal from "../../components/Modal/GiveMarkModal";

const MySubmittedAssignmentsTable = ({assign}) => {
    const { _id, creator, examineeName, pdf, title, marks, status } = assign;
    console.log("gggg",assign);
    const defaults = {pdf, examineeName, title, marks, creator, status};
  
    return (
      <tr>
        <th>
        </th>
        <td>{examineeName}</td>
        <td>{title}</td>
        <td>{pdf}</td>
        <td>{marks}</td>
        <th>
          {
              status === 'pending' ? <span className="font-bold text-orange-600 text-lg">Pending</span> :
              <span className=" font-bold text-green-900 text-lg">Confirmed</span>
          }
        </th>
        <th>
            {
                <GiveMarkModal _id={_id} defaults={defaults} ></GiveMarkModal>
            }
        </th>
      </tr>
    );
  };
  
  export default MySubmittedAssignmentsTable;

