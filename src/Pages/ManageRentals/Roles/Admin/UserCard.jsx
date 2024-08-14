/* eslint-disable react/prop-types */
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const UserCard = ({ user }) => {
  // console.log("user", user);

  const { email, name } = user || {};

  return (
    <>
      <div>
        <Card
          className=" w-full"
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <EditOutlined key="edit" />,
            <DeleteOutlined key="delete" />,
          ]}
        >
          <Meta title={name} description={email} />
        </Card>
      </div>
    </>
  );
};

export default UserCard;
