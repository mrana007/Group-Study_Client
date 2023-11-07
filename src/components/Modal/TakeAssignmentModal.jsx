
import swal from "sweetalert";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
// import {  NavLink } from "react-router-dom";

const TakeAssignmentModal = () => {
  const dialogRef = useRef();
    const services = useLoaderData();
    const {title, marks, creator} = services;

  const handleSubmitAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const examineeName = form.examineeName.value;
    const title = form.title.value;
    const marks = form.marks.value;
    const creator = form.creator.value;

    const newSubmittedAssignments = {examineeName, title, marks, creator};

    // const bookService = {examineeName,title};

    // console.log(bookService);

    // send data to the server
    fetch("http://localhost:5000/submittedAssignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSubmittedAssignments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("", "Assignment Submit Successfully", "success");
          dialogRef.current.close(); // Close the modal
        }
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-block bg-green-500 text-white normal-case"
        onClick={() => dialogRef.current.showModal()}
      >
        Take Assignment
      </button>
      <dialog
        ref={dialogRef} // Add a ref to the dialog element
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form onSubmit={handleSubmitAssignment}>
            <div className="mb-8 w-full mx-auto">
                {/* examinee */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Examinee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="examineeName"
                    required
                    placeholder="Input your examineeName file"
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
                    {/* title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assignment Title</span>
                </label>
                <label className="input-group">
                  <input
                    className="textarea textarea-bordered w-full"
                    name="title" defaultValue={title} placeholder="Enter a quick title"
                  />
                </label>
              </div>
                {/* marks */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="marks"
                    defaultValue={marks}
                    placeholder="Assignment marks"
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
                {/* assignment creator */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Assignment creator email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="creator"
                    defaultValue={creator}
                    placeholder="Assignment creator email"
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-block bg-green-500 text-white normal-case"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default TakeAssignmentModal;
