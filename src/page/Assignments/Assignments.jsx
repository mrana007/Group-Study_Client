import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";

const Assignments = () => {
  const assignments = useLoaderData();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredAssignments = selectedCategory
    ? assignments.filter(
        (assignment) => assignment.category === selectedCategory
      )
    : assignments;

  return (
    <div className="max-w-7xl mx-auto my-12 md:my-20">
      <div className="flex justify-end pr-2 md:pr-12">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2">
                <li>
                  <button onClick={() => setSelectedCategory("easy")}>
                    Easy
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedCategory("medium")}>
                    Medium
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedCategory("hard")}>
                    Hard
                  </button>
                </li>
                {/* Add a button to clear the filter */}
                <li>
                  <button onClick={() => setSelectedCategory(null)}>All</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="py-8 md:py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center ">
          All Assignments
        </h2>
        <p className="p-4 lg:p-0">
          Let us approach this assignment with enthusiasm and a sense of unity.
          Together, we can achieve more and learn from one another. Remember
          that we are here to support and encourage each other every step of the
          way.Please feel free to reach out if you have any questions or need
          assistance. Let us work together to excel and make the most of our
          group study experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 p-4 lg:p-0">
        {filteredAssignments.map((assignment) => (
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
