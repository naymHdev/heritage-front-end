import { Link } from "react-router-dom";
import logo from "../assets/error-page-bg.png";

const Error = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          src={logo}
          alt="Error Background"
        />
        <div className="relative flex flex-col text-black items-center justify-center h-full w-full z-10">
          <h2 className="text-4xl font-bold text-center drop-shadow-lg">
            Oops! It looks like <br /> you are lost.
          </h2>
          <p className="mt-5 font-thin text-xl text-center drop-shadow-lg">
            The page you are looking for is not available. Try to search again
            or use <br /> the go to
          </p>
          <Link to="/">
            <button className="mt-10 text-white bg-black rounded-full border-none px-8 py-3">
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
