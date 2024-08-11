import { useForm } from "react-hook-form";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" max-w-7xl w-7/12 mx-auto px-4 md:px-6 lg:px-10 mt-14">
        <section className="">
          <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
            <div>
              <label>Email</label>
              <input
                className="mt-2 border w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("email", { required: true })}
                placeholder="Enter email"
              />
              {errors.email && (
                <span className=" text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label> Password</label>
              <input
                className="mt-2 border w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                {...register("password", { required: true })}
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className=" text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="button"
              className="bg-[#055AB1] font-medium text-xl text-white rounded-md py-4 w-full text-center"
            >
              Sign In
            </button>
          </form>
        </section>

        <section>
          <div className=" flex items-center text-center justify-center gap-3 my-8">
            <div className=" border-b w-2/12"></div>
            <p className=" font-medium text-gray-600">
              Or, Sign in with your email
            </p>
            <div className=" border-b w-2/12"></div>
          </div>
          <SocialLogIn />
          <div>
            <p className=" font-medium text-gray-600 text-center my-11">
              Do not have an account ?
              <span className=" text-red-600 px-1">
                <Link to="/signUp">Sign Up</Link>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
