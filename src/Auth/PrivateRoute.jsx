/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import UseAuth from "./UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  // console.log(loading);

  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className=" flex items-center justify-center h-screen">
          <ImSpinner2 className=" animate-spin" size={30} />
        </div>
      </>
    );
  }

  return user ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default PrivateRoute;
