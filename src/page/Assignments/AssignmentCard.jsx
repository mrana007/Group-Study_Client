import { useContext, } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const AssignmentCard = ({ assignment }) => {
  const { _id, creator, title, category, image, marks } = assignment;
  // console.log(creator);

  

  const {user} = useContext(AuthContext);
  // console.log("name", user?.email);
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
            fetch(`http://localhost:5000/assignment/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    swal("Success! Your Selected Booking has deleted!", {
                        icon: "success",
                      });
                }
            })
        }
      });
}
  
  return (
    <div className="card card-compact bg-base-100 rounded-none border">
      
      <div className="relative">
      <figure>
        <img className="w-full h-48 p-1" src={image} alt='groupStudy' />
      </figure>
      <div>
        {user?.email==creator?<>
        <button onClick={()=>handleDelete(_id)} className="absolute top-0 right-2 text-red-600 font-extrabold text-3xl">X</button>
        </>
        : null}
        </div>
      </div>
     
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge bg-blue-600 w-20 p-3 text-white">{category}</div>
        </h2>
        <p>
        Marks: <span className="text-xl font-semibold">{marks}</span>
        </p>
        <div className="card-actions justify-between">
          <Link to={`/updateAssignment/${_id}`}>
            <button className="btn bg-green-600 text-white normal-case">Update Assignment</button>
          </Link>
          <Link to={`/assignmentDetails/${_id}`}>
            <button className="btn bg-blue-400 text-white normal-case">View Assignment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;