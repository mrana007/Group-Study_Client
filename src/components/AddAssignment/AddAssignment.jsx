import swal from "sweetalert";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const AddAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAddAssignment = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const category = form.category.value;
        const user = form.user.value;
        const description = form.description.value;
        const date = form.date.value;
        
        const newAssignment ={name, marks, image, category, user, date, description}
        console.log(newAssignment);

        // send data to the server
        fetch('http://localhost:5000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                swal("", "Assignment added successfully", "success");
            }
        })
    }

  return (
    <div className="bg-green-50 p-24">
      <h2 className="text-3xl text-center font-extrabold mb-6">Add an Assignment</h2>
      <form onSubmit={handleAddAssignment} className="space-y-8">
        {/* Assignment title and marks row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Title</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Enter assignment title"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input type="number" name="marks" placeholder="Enter marks"
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
              <input type="text" name="image" placeholder="Enter image url"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="Enter category"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* Assignment user and date row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User</span>
            </label>
            <label className="input-group">
              <input type="email" name="user" placeholder="Enter user email"
                className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Assignment Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" placeholder="Enter assignment description"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* assignment description row */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Due Date</span>
            </label>
            <label className="input-group">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  name="date" placeholder="date"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Add an Assignment" className="btn btn-block text-white bg-green-700 normal-case" />
      </form>
    </div>
  );
};

export default AddAssignment;