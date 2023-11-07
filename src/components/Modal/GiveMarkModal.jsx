
import swal from "sweetalert";
import { useRef } from "react";
// import { useLoaderData } from "react-router-dom";

const GiveMarkModal = () => {
  const dialogRef = useRef();
    // const services = useLoaderData();
    // const { giveMarks, feedback} = services;

  const handleGiveMark = (event) => {
    event.preventDefault();

    const form = event.target;
    const pdfLink = form.pdfLink.value;
    const note = form.note.value;
    const giveMarks = form.giveMarks.value;
    const feedback = form.feedback.value;

    const status ="pending"

    const newGiveMarks = {status, pdfLink, note, giveMarks, feedback};
    
    // send data to the server
    fetch("http://localhost:5000/giveMarks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGiveMarks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("", "Marks Given Successfully", "success");
          dialogRef.current.close(); // Close the modal
        }
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-orange-500 text-white  normal-case"
        onClick={() => dialogRef.current.showModal()}
      >
        Give Marks
      </button>
      <dialog
        ref={dialogRef} // Add a ref to the dialog element
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form onSubmit={handleGiveMark}>
            <div className="mb-8 w-full mx-auto">
                {/* examinee */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PDF Link</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="pdfLink"
                    placeholder=""
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
              {/* Quick Note */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give a quick Note</span>
                </label>
                <label className="input-group">
                <textarea className="textarea textarea-bordered w-full"
                type="text"
                name="note" 
                placeholder="Quick Note">
                </textarea>
                </label>
              </div>
                    {/* Give Marks */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give Mark</span>
                </label>
                <label className="input-group">
                <input
                    type="number"
                    name="giveMarks"
                    placeholder="Please give marks"
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
                {/* feedback */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feed Back</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="feedback"
                    placeholder="Give feedback"
                    className="input input-bordered w-full  py-2"
                  />
                </label>
              </div>
                {/* assignment creator */}
            </div>
            <input
              type="submit"
              value="Giving Mark"
              className="btn btn-block bg-green-500 text-white normal-case"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default GiveMarkModal;
