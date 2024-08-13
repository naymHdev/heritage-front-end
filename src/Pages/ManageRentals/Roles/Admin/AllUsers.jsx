import useAllUsers from "../../../../Hooks/useAllUsers";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [allUsers] = useAllUsers();

  return (
    <>
      <div className="md:pl-[300px] px-4 max-w-7xl mx-auto">
        <div>
          <p className="text-xl font-medium">
            All Users <span>({allUsers.length})</span>
          </p>
          <p className=" text-sm text-gray-500">Welcome to Compass</p>
        </div>

        <section className=" mt-8">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            {allUsers?.map((user) => (
              <UserCard key={user?._id} user={user} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AllUsers;
