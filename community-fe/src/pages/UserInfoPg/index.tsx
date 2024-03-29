import { Descriptions } from "antd";
import { getUser } from "../../utils/helpers";

const UserInfoPage = () => {
  const user = getUser();

  return (
    <Descriptions style={{textAlign: "center"}} title="User Info">
      <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
      <Descriptions.Item label="Lastname">{user?.lastname}</Descriptions.Item>
      <Descriptions.Item label="Birthday">{user?.birthday}</Descriptions.Item>
      <Descriptions.Item label="Gender">{user?.gender}</Descriptions.Item>
      <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
    </Descriptions>
  );
};

export default UserInfoPage;
