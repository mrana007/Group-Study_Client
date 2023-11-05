import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const assignment = useLoaderData();
    const {_id, title, marks, image, category, user, date, description} = assignment;

    const handleUpdateAssignment = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const category = form.category.value;
        const user = form.user.value;
        const description = form.description.value;
        const date = form.date.value;

        const updatedAssignment ={title, marks, image, category, user, date, description}
        console.log(updatedAssignment);

                // send data to the server
                fetch(`http://localhost:5000/assignment/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedAssignment)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.modifiedCount > 0 ){
                        swal("", "Assignment updated successfully", "success");
                    }
                })
            }

    return (
        <div className="bg-green-50 p-24">
      <h2 className="text-3xl text-center font-extrabold mb-6">Update Assignment</h2>
      <form onSubmit={handleUpdateAssignment} className="space-y-8">
        {/* Assignment title and marks row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Title</span>
            </label>
            <label className="input-group">
              <input type="text" name="title" defaultValue={title} placeholder="Enter assignment title"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input type="number" name="marks" defaultValue={marks} placeholder="Enter marks"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* assignment image and category row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="image" defaultValue={image} placeholder="Enter image url"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" defaultValue={category} placeholder="Enter category"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* Assignment user and description row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User</span>
            </label>
            <label className="input-group">
              <input type="email" name="user" defaultValue={user} placeholder="Enter user email"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Assignment Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" defaultValue={description} placeholder="Enter assignment description"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* assignment date row */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Due Date</span>
            </label>
            <label className="input-group">
            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="date" defaultValue={date} placeholder="date"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Assignment" className="btn btn-block text-white bg-green-700 normal-case" />
      </form>
    </div>
    );
};

export default UpdateAssignment;