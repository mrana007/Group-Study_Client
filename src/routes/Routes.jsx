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
import MyAssignments from "../page/MyAssignments/MyAssignments";
import SubmittedAssignments from "../page/SubmittedAssignments/SubmittedAssignments";
import PrivetRoutes from "./PrivateRoutes";

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
            loader: () => fetch("https://a11-group-study-server.vercel.app/assignment"),
        },
        {
            path: 'updateAssignment/:id',
            element: <PrivetRoutes><UpdateAssignment /></PrivetRoutes>,
            loader: ({params}) => fetch(`https://a11-group-study-server.vercel.app/assignment/${params.id}`)
        },
        {
            path: 'assignmentDetails/:id',
            element: <PrivetRoutes><AssignmentsDetails /></PrivetRoutes>,
            loader: ({params})=>fetch(`https://a11-group-study-server.vercel.app/assignment/${params.id}`)
        },
        {
            path: "/submittedAssignments",
            element: <PrivetRoutes><SubmittedAssignments /></PrivetRoutes>,
            loader: () => fetch("https://a11-group-study-server.vercel.app/submittedAssignments")
        },
        {
            path: "/myAssignments",
            element: <PrivetRoutes><MyAssignments /></PrivetRoutes>,
        },
      ]
    },
    {
        path: '/errorPage',
        element: <ErrorPage />
    }
  ]);

  export default routes;