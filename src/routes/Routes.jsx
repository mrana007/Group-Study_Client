import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Login from "../page/LogIn/LogIn";
import SignUp from "../page/SignUp/SignUp";
import AddAssignment from "../components/layout/AddAssignment/AddAssignment";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home />,
            loader: () => fetch("http://localhost:5000/assignment"),
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
            path: 'updateAssignment',
            element: <SignUp />
        },
      ]
    },
    {
        path: '/errorPage',
        element: <ErrorPage />
    }
  ]);

  export default routes;