import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const SocialLogIn = () => {
  return (
    <>
      <div className=" space-y-4">
        <button className=" flex items-center gap-2 w-full mx-auto justify-center py-2 bg-gray-100">
          <FcGoogle size={25} />
          Sign up with Google
        </button>
        <button className=" flex items-center gap-2 w-full mx-auto justify-center py-2 bg-gray-100">
          <FaFacebook className=" text-blue-600" size={25} />
          Sign up with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
