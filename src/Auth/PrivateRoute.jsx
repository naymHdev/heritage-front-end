/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import UseAuth from "./UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ImSpinner2 className="animate-spin" size={50} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
