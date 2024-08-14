/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useState } from "react";

const UserEditModal = ({ EditOutlined, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>
        <EditOutlined key="edit" />
      </button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <h2 className=" text-2xl font-bold">{name}</h2>
          <div className=" mt-3">
            <p className=" text-xl font-medium">Coming soon...</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserEditModal;
