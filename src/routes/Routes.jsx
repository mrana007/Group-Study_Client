import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Login from "../page/LogIn/LogIn";
import SignUp from "../page/SignUp/SignUp";
import AddAssignment from "../components/layout/AddAssignment/AddAssignment";
import UpdateAssignment from "../components/layout/UpdateAssignment/UpdateAssignment";
import Assignments from "../page/Assignments/Assignments";
import AssignmentsDetails from "../page/AssignmentsDetails/AssignmentsDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'signUp',
            element: <SignUp />
        },
        {
            path: 'addAssignment',
            element: <AddAssignment />
        },
        {
            path: 'assignments',
            element: <Assignments />,
            loader: () => fetch("http://localhost:5000/assignment"),
        },
        {
            path: 'updateAssignment/:id',
            element: <UpdateAssignment />,
            loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path: 'assignmentDetails/:id',
            element: <AssignmentsDetails />,
            loader: ({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
        },
      ]
    },
    {
        path: '/errorPage',
        element: <ErrorPage />
    }
  ]);

  export default routes;