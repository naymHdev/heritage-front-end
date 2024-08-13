import { useForm } from "react-hook-form";
import DashBoardSectionName from "../../../../Components/DashBoardSectionName";
import useAllProperty from "../../../../Hooks/useAllProperty";

const AddProperties = () => {
  const [allProperty] = useAllProperty();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <DashBoardSectionName
          title="Add New Property"
          lengths={allProperty?.length}
        />

        <section className=" mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 bg-white shadow-md rounded-md"
          >
            {/* Overview Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Property Title
                </label>
                <input
                  {...register("propertyTitle", { required: true })}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Your Property Name"
                />
                {errors.propertyTitle && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  {...register("description", { required: true })}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Write about property..."
                />
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select
                    {...register("category")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="Apartments">Apartments</option>
                    <option value="Houses">Houses</option>
                    {/* Add other categories */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Listed in</label>
                  <select
                    {...register("listedIn")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="All Listing">All Listing</option>
                    {/* Add other options */}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-2">Price</label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your Price"
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Yearly Tax Rate
                  </label>
                  <input
                    {...register("taxRate")}
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Tax Rate"
                  />
                </div>
              </div>
            </div>

            {/* Listing Details Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Listing Details</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Size in ft²
                  </label>
                  <input
                    {...register("size", { required: true })}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Ex: 3,210 sqft"
                  />
                  {errors.size && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Bedrooms</label>
                  <select
                    {...register("bedrooms")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Bathrooms</label>
                  <select
                    {...register("bathrooms")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options */}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-2">Garages</label>
                  <select
                    {...register("garages")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    {/* Add more options */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Garage Size
                  </label>
                  <input
                    {...register("garageSize")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Ex: 1,230 sqft"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Year Built</label>
                  <input
                    {...register("yearBuilt")}
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Type Year"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-2">Floors No</label>
                  <input
                    {...register("floors")}
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Type No"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Additional Description
                  </label>
                  <textarea
                    {...register("additionalDescription")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Write additional info..."
                  />
                </div>
              </div>
            </div>

            {/* Photo & Video Attachment Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">
                Photo & Video Attachment
              </h2>
              <div>
                <label className="block text-gray-700 mb-2">
                  File Attachment
                </label>
                <input
                  {...register("fileAttachment")}
                  type="file"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            {/* Select Amenities Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Select Amenities</h2>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.acHeating")}
                    className="mr-2"
                  />
                  A/C & Heating
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.garages")}
                    className="mr-2"
                  />
                  Garages
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.swimmingPool")}
                    className="mr-2"
                  />
                  Swimming Pool
                </label>
                {/* Add more amenities as needed */}
              </div>
            </div>

            {/* Address & Location Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Address & Location</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    {...register("address")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your Address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Country</label>
                  <select
                    {...register("country")}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="Afghanistan">Afghanistan</option>
                    {/* Add more countries */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    {...register("city")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your City"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-2">Zip Code</label>
                  <input
                    {...register("zipCode")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Zip Code"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  <input
                    {...register("state")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Map Location
                  </label>
                  <input
                    {...register("mapLocation")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Map Location"
                  />
                </div>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.843534963715!2d90.38733601498145!3d23.75092918458969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d89c6beef%3A0xb196ebd36c45c759!2sDhaka%20College!5e0!3m2!1sen!2sbd!4v1689602442831!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full border-0 rounded-md"
                ></iframe>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-md"
            >
              Submit Property
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProperties;
