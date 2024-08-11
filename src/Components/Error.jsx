import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
          <p className="text-gray-700 mb-4">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
