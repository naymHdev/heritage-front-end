/* eslint-disable react/prop-types */
import { Modal, Select } from "antd";
import { useState } from "react";
import publicAxios from "../../../../Hooks/PublicAxios";
import toast from "react-hot-toast";

const { Option } = Select;

const UserEditModal = ({ EditOutlined, name, roles, _id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roles);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setLoading(true);
    try {
      const response = await publicAxios.put(`/api/signUp/${_id}`, {
        roles: selectedRole,
      });
      console.log("updated res", response);
      toast.success(response.data.message);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to update role");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };

  return (
    <>
      <button onClick={showModal}>
        <EditOutlined key="edit" />
      </button>
      <Modal
        title={`Edit User Role for ${name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <Select
            value={selectedRole}
            onChange={handleRoleChange}
            style={{ width: "100%" }}
          >
            <Option value="admin">Admin</Option>
            <Option value="propertyOwner">Property Owner</Option>
            <Option value="bidder">Bidder</Option>
          </Select>
        </div>
      </Modal>
    </>
  );
};

export default UserEditModal;
