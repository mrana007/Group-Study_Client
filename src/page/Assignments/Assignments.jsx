import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const assignments = useLoaderData();

    return (
       <div className="max-w-7xl mx-auto my-12 md:my-20">
        <div className="py-8 md:py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center ">
            All Assignments
          </h2>
          <p className="p-4 lg:p-0">
          Let us approach this assignment with enthusiasm and a sense of unity. Together, we can achieve more and learn from one another. Remember that we are here to support and encourage each other every step of the way.Please feel free to reach out if you have any questions or need assistance. Let us work together to excel and make the most of our group study experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 p-4 lg:p-0">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            ></AssignmentCard>
          ))}
        </div>
      </div>
    );
};

export default Assignments;