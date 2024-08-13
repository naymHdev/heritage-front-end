import DashBoardSectionName from "../../../../Components/DashBoardSectionName";
import useAllProperty from "../../../../Hooks/useAllProperty";

const ManageProperties = () => {
  const [allProperty] = useAllProperty();

  return (
    <>
      <div>
      <DashBoardSectionName
          title="Property List"
          lengths={allProperty.length}
        />
        <section className=" mt-8">{}</section>
      </div>
    </>
  );
};

export default ManageProperties;
