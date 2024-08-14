import { Rate } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import publicAxios from "../../Hooks/PublicAxios";
import toast from "react-hot-toast";

const GetReviews = () => {
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const reviewData = { ...data, value };

      const res = await publicAxios.post("/api/review", reviewData);
      console.log("add result", res.data);
      if (res?.data.acknowledged) {
        toast.success("Review Added Success");
      } else {
        toast.error("Review Added Failed!");
      }
    } catch (error) {
      console.log("addReview form", error);
      toast.error("Review Added Failed!", error.message);
    }
  };

  return (
    <div className="mx-auto p-6 sm:p-8 bg-white">
      <h2 className="text-xl font-semibold mb-4">Rating:</h2>
      <div className="flex mb-6">
        <Rate onChange={(value) => setValue("rating", value)} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <input
              type="text"
              placeholder="Name *"
              {...register("name", { required: "Name is required" })}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Comment *"
              {...register("comment", { required: "Comment is required" })}
              className="border border-gray-300 rounded-lg p-2 w-full h-24"
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">
                {errors.comment.message}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input type="checkbox" {...register("saveInfo")} className="mr-2" />
            <label className="text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-800 text-white font-semibold py-2 px-4 w-full sm:w-auto sm:px-6 sm:py-3 rounded-lg"
        >
          POST COMMENT
        </button>
      </form>
    </div>
  );
};

export default GetReviews;
