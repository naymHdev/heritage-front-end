import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import BuyerScreens from "../Pages/BuyerScreens/BuyerScreens";
import About from "../Pages/About/About";
import SearchResult from "../Pages/SearchResult/SearchResult";
import PropertyDetails from "../Pages/PrppertyDetails/PropertyDetails";
import ManageRentals from "../Components/ManageRentals/ManageRentals";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";

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
      {
        path: "/manageRentals",
        element: <ManageRentals />,
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
]);

export default Router;
