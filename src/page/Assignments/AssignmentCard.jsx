import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, category, image, marks } = assignment;
  
  return (
    <div className="card card-compact bg-base-100 rounded-none border">
      <div className="relative">
      <figure>
        <img className="w-full h-48 p-1" src={image} alt='groupStudy' />
      </figure>     
        <button className="absolute top-0 right-1 text-red-500 text-3xl font-bold">X</button>
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