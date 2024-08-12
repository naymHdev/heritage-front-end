import { useForm } from "react-hook-form";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";
import UseAuth from "../UseAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const { loading, userLogIn, setLoading } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await userLogIn(data);
      // console.log(response);
      if (response.success) {
        navigate(from, { replace: true });
        toast.success("Login successful.");
      } else {
        toast.error("Login failed: " + response.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="max-w-7xl md:w-7/12 mx-auto px-4 md:px-6 lg:px-10 mt-8">
      <section>
        <Link to="/">
          <div className="flex items-center gap-2 justify-center">
            <img className="w-12 h-full" src={logo} alt="website logo" />
            <h2 className="text-3xl font-extrabold">
              Heritage<span className="text-[#055BB2]">Nest</span>
            </h2>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mt-8 md:mt-14">
            Hey There!!! Welcome Back.
          </h1>
        </Link>
      </section>

      <section className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label>Email</label>
            <input
              className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
              {...register("email", { required: "This field is required" })}
              placeholder="Enter email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
              {...register("password", { required: "This field is required" })}
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="flex items-center text-center justify-center gap-3 my-8">
          <div className="border-b w-2/12"></div>
          <p className="font-medium text-gray-600">
            Or, Sign in with your email
          </p>
          <div className="border-b w-2/12"></div>
        </div>
        <SocialLogIn />
        <div>
          <p className="font-medium text-gray-600 text-center my-11">
            Do not have an account?
            <span className="text-red-600 px-1">
              <Link to="/signUp">Sign Up</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
