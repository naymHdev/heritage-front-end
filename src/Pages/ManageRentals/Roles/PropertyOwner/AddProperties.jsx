import { useForm } from "react-hook-form";
import DashBoardSectionName from "../../../../Components/DashBoardSectionName";
import useAllProperty from "../../../../Hooks/useAllProperty";
import { useEffect, useState } from "react";
import axios from "axios";
import publicAxios from "../../../../Hooks/PublicAxios";
import toast from "react-hot-toast";

const AddProperties = () => {
  const [countries, setCountries] = useState([]);

  const [allProperty, refetch] = useAllProperty();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch country data from RestCountries API
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const onSubmit = async (data) => {
    const propertyData = {
      property_name: data.propertyName,
      property_type: data.propertyType,
      location: data.mapLocation,
      country: data.country,
      price: data.price,
      details_overview: data.overview,
      taxRate: data.taxRate,
      images: [
        { image1: data.image1 },
        { image2: data.image2 },
        { image3: data.image3 },
      ],
      details: {
        kitchens: data.kitchens,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        fully_furnished: data.furnished,
        carpet_area: data.size,
        floor: data.floors,
        transaction_type: data.listedIn,
        facing: data.facing,
        additional_rooms: data.additionalRooms,
        age_of_construction: data.yearBuilt,
      },
      amenities: [data.amenities],
      category: data.category,
    };

    console.log(propertyData);

    try {
      const res = await publicAxios.post("/api/property", propertyData);
      console.log("add result", res.data);
      if (res?.data.acknowledged) {
        toast.success("Property Added Success");
        refetch();
      } else {
        toast.error("Property Added Failed!");
      }
    } catch (error) {
      console.log("addProperty form", error);
      toast.error("Property Added Failed!", error.message);
    }
  };

  return (
    <>
      <div>
        <DashBoardSectionName
          title="Add New Property"
          lengths={allProperty?.length}
        />

        <section className=" mt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {/* Overview Section */}
            <div className="mb-8 shadow-md bg-white p-8 rounded-2xl">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2">
                  Property Title
                </label>
                <input
                  {...register("propertyName", { required: true })}
                  className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  placeholder="Your Property Name"
                />
                {errors.propertyName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  {...register("overview", { required: true })}
                  className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  placeholder="Write about property..."
                />
                {errors.overview && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    {...register("propertyType")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  >
                    <option disabled value="">
                      Add your property
                    </option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Condo">Condo</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Lodge">Lodge</option>
                    <option value="Estate">Estate</option>
                    <option value="Loft">Loft</option>
                    <option value="Beach House">Beach House</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Listed in
                  </label>
                  <select
                    {...register("listedIn")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  >
                    <option value="All Listing">All Listing</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Your Price"
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Fully Furnished
                  </label>
                  <select
                    {...register("furnished")}
                    className="w-full px-4 py-3 border rounded-md"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Listing Details Section */}
            <div className="mb-8 shadow-md bg-white p-8 rounded-2xl">
              <h2 className="text-lg font-bold mb-4">Listing Details</h2>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Size in ft²
                  </label>
                  <input
                    {...register("size", { required: true })}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Ex: 3,210 sqft"
                  />
                  {errors.size && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    {...register("bedrooms")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Bathrooms
                  </label>
                  <select
                    {...register("bathrooms")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    className="w-full px-4 py-3 border rounded-md"
                  >
                    <option value="New_Projects">New Projects</option>
                    <option value="Pre_launch_offers">Pre_launch_offers</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Year Built
                  </label>
                  <input
                    {...register("yearBuilt")}
                    type="number"
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Type Year"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Floors No
                  </label>
                  <input
                    {...register("floors")}
                    type="number"
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Type No"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Additional Rooms
                  </label>
                  <input
                    {...register("additionalRooms")}
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Comma-separated rooms (e.g., Living Room, Kitchen)"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Facing
                  </label>
                  <input
                    {...register("facing")}
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Facing Direction"
                  />
                </div>
              </div>
            </div>

            {/* Photo & Video Attachment Section */}
            <div className="mb-8 shadow-md bg-white p-8 rounded-2xl">
              <h2 className="text-lg font-bold mb-4">
                Photo & Video Attachment
              </h2>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  File Attachment | Add Image Link
                </label>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-2">
                    Image 1
                  </label>
                  <input
                    {...register("image1")}
                    type="url"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Image URL 1"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-2">
                    Image 2
                  </label>
                  <input
                    {...register("image2")}
                    type="url"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Image URL 2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-2">
                    Image 3
                  </label>
                  <input
                    {...register("image3")}
                    type="url"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Image URL 3"
                  />
                </div>
              </div>
            </div>

            {/* Select Amenities Section */}
            <div className="mb-8 shadow-md bg-white p-8 rounded-2xl">
              <h2 className="text-lg font-bold mb-4">Select Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.parking")}
                    className="mr-2"
                  />
                  Parking
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.lakeView")}
                    className="mr-2"
                  />
                  Lake View
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.garden")}
                    className="mr-2"
                  />
                  Garden
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.disabledAccess")}
                    className="mr-2"
                  />
                  Disabled Access
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.petFriendly")}
                    className="mr-2"
                  />
                  Pet Friendly
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.ceilingHeight")}
                    className="mr-2"
                  />
                  Ceiling Height
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.outdoorShower")}
                    className="mr-2"
                  />
                  Outdoor Shower
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.refrigerator")}
                    className="mr-2"
                  />
                  Refrigerator
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.fireplace")}
                    className="mr-2"
                  />
                  Fireplace
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.wifi")}
                    className="mr-2"
                  />
                  Wifi
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.tvCable")}
                    className="mr-2"
                  />
                  TV Cable
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.barbeque")}
                    className="mr-2"
                  />
                  Barbeque
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.laundry")}
                    className="mr-2"
                  />
                  Laundry
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.dryer")}
                    className="mr-2"
                  />
                  Dryer
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.lawn")}
                    className="mr-2"
                  />
                  Lawn
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("amenities.elevator")}
                    className="mr-2"
                  />
                  Elevator
                </label>
              </div>
            </div>

            {/* Address & Location Section */}
            <div className="mb-8 shadow-md bg-white p-8 rounded-2xl">
              <h2 className="text-lg font-bold mb-4">Address & Location</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Your Address"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    {...register("country", { required: true })}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                  >
                    <option value="">Select a Country</option>
                    {countries.map((country) => (
                      <option key={country.cca3} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    {...register("city")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Your City"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 mt-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    {...register("zipCode")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Zip Code"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    {...register("state")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Map Location
                  </label>
                  <input
                    {...register("mapLocation")}
                    className="w-full px-4 py-3 focus:outline-none border rounded-md"
                    placeholder="Map Location"
                  />
                </div>
              </div>
              <div className="mt-8">
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
