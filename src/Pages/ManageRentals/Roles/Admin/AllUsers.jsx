import DashBoardSectionName from "../../../../Components/DashBoardSectionName";
import useAllUsers from "../../../../Hooks/useAllUsers";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [allUsers] = useAllUsers();

  return (
    <>
      <div>
        <DashBoardSectionName title="All Users" lengths={allUsers.length} />

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
