import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";
import publicAxios from "../../Hooks/PublicAxios";
import toast from "react-hot-toast";
import UseAuth from "../UseAuth";
import useUser from "../../Hooks/useUser";

const SignUp = () => {
  const { loading, setLoading, createUser } = UseAuth();
  const { refetch } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUser(data.email, data.password);
      const currentDate = new Date().toISOString();
      const roles = "bidder";
      const userInfo = { ...data, currentDate, roles };
      const res = await publicAxios.post("/api/signUp", userInfo);
      // console.log(res);
      if (res.data.acknowledged) {
        navigate(from, { replace: true });
        refetch();
        toast.success("Your sign up completed.");
      } else {
        toast.error("Failed your sign up!");
      }
    } catch (error) {
      setLoading(false);
      console.log("Sign up post error", error);
      toast.error("Sign up post error", error.message);
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
            Signup! New Account.
          </h1>
        </Link>
      </section>

      <section className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label>Name</label>
            <input
              className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
              {...register("name", { required: "User name is required" })}
              placeholder="Enter name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
              {...register("email", { required: "User Email is required" })}
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
              {...register("password", { required: "Password is required" })}
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="Enter Confirm Password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#055AB1] font-medium text-xl text-white rounded-md py-4 w-full text-center"
            >
              {loading ? "Logging in..." : "Sign Up"}
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="flex items-center text-center justify-center gap-3 my-8">
          <div className="border-b w-2/12"></div>
          <p className="font-medium text-gray-600">
            Or, Sign up with your email
          </p>
          <div className="border-b w-2/12"></div>
        </div>
        <SocialLogIn />
        <div>
          <p className="font-medium text-gray-600 text-center my-11">
            Already have an account?
            <span className="text-red-600 px-1">
              <Link to="/signIn">Sign In</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
