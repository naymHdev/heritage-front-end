import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import UseAuth from "../UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {
  const { googleLogIn, facebookLogIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handelGoogle = async () => {
    await googleLogIn();
    navigate(from, { replace: true });
  };

  const handelFacebook = async () => {
    await facebookLogIn();
    navigate(from, { replace: true });
  };

  return (
    <>
      <div className=" space-y-4">
        <button
          onClick={handelGoogle}
          className=" flex items-center gap-2 w-full mx-auto justify-center py-2 bg-gray-100"
        >
          <FcGoogle size={25} />
          Sign up with Google
        </button>
        <button
          onClick={handelFacebook}
          className=" flex items-center gap-2 w-full mx-auto justify-center py-2 bg-gray-100"
        >
          <FaFacebook className=" text-blue-600" size={25} />
          Sign up with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
