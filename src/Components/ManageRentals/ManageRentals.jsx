import useUser from "../../Hooks/useUser";

const ManageRentals = () => {
  const { getRole } = useUser();
  console.log("user role", getRole?.roles);

  return (
    <>
      <div></div>
    </>
  );
};

export default ManageRentals;
