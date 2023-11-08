import swal from "sweetalert";


const MyAssignmentsTable = ({myAssignment, myAssignments, setAssignMents}) => {

    const {_id, title, marks, status, giveMarks, feedback  } = myAssignment;
    
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Bookings!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://a11-group-study-server.vercel.app/giveMarks/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        swal("Success! Your Selected Booking has deleted!", {
                            icon: "success",
                          });
                          const remaining = myAssignments.filter(car => car._id !== id)
                          setAssignMents(remaining)
                    }
                })
            }
          });
    }

    return (
      <tr>
        <th>
        </th>
        <td className="text-center">{title}</td>
        <td className="text-center">{marks}</td>
        <td className="text-center">{status}</td>
        <td className="text-center">{giveMarks}</td>
        <td className="text-center">{feedback}</td>
        
        <td className="text-center"><button onClick={()=>handleDelete(_id)} className="text-red-500 text-3xl font-bold">X</button></td>
        
        <th>
        </th>
      </tr>
    );
  };
  
  export default MyAssignmentsTable;

