import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import BuyerScreens from "../Pages/BuyerScreens/BuyerScreens";
import About from "../Pages/About/About";
import SearchResult from "../Pages/SearchResult/SearchResult";
import PropertyDetails from "../Pages/PrppertyDetails/PropertyDetails";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";
import PrivateRoute from "../Auth/PrivateRoute";
import ManageRentals from "../Pages/ManageRentals/ManageRentals";
import RentalsLayout from "../Layouts/RentalsLayout";
import AllUsers from "../Pages/ManageRentals/Roles/Admin/AllUsers";
import AddProperties from "../Pages/ManageRentals/Roles/PropertyOwner/AddProperties";
import ManageProperties from "../Pages/ManageRentals/Roles/Admin/ManageProperties";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buyerScreens",
        element: <BuyerScreens />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
      {
        path: "/propertyDetails/:_id",
        element: <PropertyDetails />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },

  // dashboard layout menus

  {
    path: "/",
    element: <RentalsLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/manageRentals",
        element: (
          <PrivateRoute>
            <ManageRentals />
          </PrivateRoute>
        ),
      },
      // Admin routes
      {
        path: "/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/manageProperties",
        element: <ManageProperties />,
      },

      // Owner routes
      {
        path: "/addProperties",
        element: <AddProperties />,
      },
    ],
  },
]);

export default Router;
