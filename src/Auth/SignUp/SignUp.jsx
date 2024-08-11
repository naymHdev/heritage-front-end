import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" max-w-7xl md:w-7/12 mx-auto px-4 md:px-6 lg:px-10 mt-8">
        <section>
          <div className=" flex items-center gap-2 justify-center">
            <img className=" w-12 h-full" src={logo} alt="website logo" />
            <h2 className=" text-3xl font-extrabold">
              Heritage<span className="text-[#055BB2]">Nest</span>
            </h2>
          </div>
          <h1 className=" text-2xl md:text-4xl font-bold mt-8 md:mt-14">
            Signup! New Account.
          </h1>
        </section>

        <section className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
            <div>
              <label>Name</label>
              <input
                className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("name", { required: true })}
                placeholder="Enter name"
              />
              {errors.name && (
                <span className=" text-red-500 text-sm">
                  User name is required
                </span>
              )}
            </div>
            <div>
              <label>Email</label>
              <input
                className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("email", { required: true })}
                placeholder="Enter email"
              />
              {errors.email && (
                <span className=" text-red-500 text-sm">
                  User Email is required
                </span>
              )}
            </div>
            <div>
              <label> Password</label>
              <input
                className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("password", { required: true })}
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className=" text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("confirmPassword", { required: true })}
                placeholder="Enter Confirm Password"
              />
              {errors.confirmPassword && (
                <span className=" text-red-500 text-sm">
                  Confirm Password is required
                </span>
              )}
            </div>
            <div>
              <button
                type="button"
                className="bg-[#055AB1] font-medium text-xl text-white rounded-md py-4 w-full text-center"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>

        <section>
          <div className=" flex items-center text-center justify-center gap-3 my-8">
            <div className=" border-b w-2/12"></div>
            <p className=" font-medium text-gray-600">
              Or, Sign up with your email
            </p>
            <div className=" border-b w-2/12"></div>
          </div>
          <SocialLogIn />
          <div>
            <p className=" font-medium text-gray-600 text-center my-11">
              Already have login ?
              <span className=" text-red-600 px-1">
                <Link to="/signIn">Sign In</Link>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
