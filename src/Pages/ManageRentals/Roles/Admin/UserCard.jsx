/* eslint-disable react/prop-types */
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import publicAxios from "../../../../Hooks/PublicAxios";
import toast from "react-hot-toast";

const UserCard = ({ user, refetch }) => {
  const { email, name, roles, _id } = user || {};

  const handleDelete = async (id) => {
    try {
      const response = await publicAxios.delete(`/api/signUp/${id}`);
      if (response.data.deletedCount == 1) {
        toast.success("User deleted successful");
        refetch();
      } else {
        toast.error("User deleted failed!");
      }
    } catch (error) {
      console.log("user deleted", error);
    }
  };

  return (
    <>
      <div>
        <div className=" w-full p-6 bg-white rounded-2xl border-none">
          <div className=" space-y-1">
            <h2 className=" text-xl font-bold text-black">{name}</h2>
            <p className=" text-gray-700 font-medium">{email}</p>
            <p className=" text-gray-700 font-medium">{roles}</p>
          </div>
          <div className=" border-b w-full my-6" />
          <div className=" flex items-center justify-between">
            <button>
              <EditOutlined key="edit" />
            </button>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
            >
              <DeleteOutlined key="delete" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
