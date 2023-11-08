import { useLoaderData } from "react-router-dom";
import TakeAssignmentModal from "../../components/Modal/TakeAssignmentModal";

const AssignmentsDetails = () => {

    const {title, category, marks, description, image, date, creator } = useLoaderData();

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="px-6">
        <div className="relative">
          <div className="mb-6">
            <div className="flex justify-center py-8">
              <h2 className="card-title">
                {title}
                <p className="badge bg-green-600 p-3 text-white">{category}</p>
              </h2>
            </div>
            <img
              className="hero h-[50vh] w-[50vh] mx-auto rounded-md pb-4"
              src={image}
              alt=""
            />
            <p className="text-center md:w-2/3 mx-auto">{description}</p>
          </div>
          <div className="md:w-2/3 mx-auto text-center border mb-8">
            <div className="pt-2">
              <p>
                Marks: <span className="text-lg font-semibold">{marks}</span> 
              </p>
              <p>
                Assignments Creator: <span className="text-lg font-semibold">{creator}</span>
              </p>
              <p className="pb-2">
                Submission Date: <span className="text-lg font-semibold">{date}</span>
              </p>
              
            </div>
            <TakeAssignmentModal></TakeAssignmentModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsDetails;