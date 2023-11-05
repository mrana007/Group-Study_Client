import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, category, image, marks } = assignment;

  return (
    <div className="card card-compact bg-base-100 rounded-none border">
      <figure>
        <img className="w-full h-48 p-1" src={image} alt='groupStudy' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge bg-blue-600 w-20 p-3 text-white">{category}</div>
        </h2>
        <p>
        Marks: <span className="text-xl font-semibold">{marks}</span>
        </p>
        <div className="card-actions justify-between">
          <Link to={`/update/${_id}`}>
            <button className="btn bg-green-600 text-white">Update</button>
          </Link>
          <Link to={`/product/${_id}`}>
            <button className="btn bg-blue-400 text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;