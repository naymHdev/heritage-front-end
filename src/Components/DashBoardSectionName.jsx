const DashBoardSectionName = ({ lengths, title }) => {
  return (
    <>
      <div>
        <p className="text-xl font-medium">
          {title} <span>({lengths})</span>
        </p>
        <p className=" text-sm text-gray-500 mt-1">Welcome to Heritage Nest</p>
      </div>
    </>
  );
};

export default DashBoardSectionName;
