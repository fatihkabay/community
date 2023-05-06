import { Descriptions } from "antd";
import { getCar } from "../../utils/helpers";

const CarInfoPage = () => {
  const car = getCar();

  return (
    <Descriptions style={{textAlign: "center"}} title="User Info">
      <Descriptions.Item label="Name">{car?.Brand}</Descriptions.Item>
      <Descriptions.Item label="Lastname">{car?.Model}</Descriptions.Item>
      <Descriptions.Item label="Birthday">{car?.Year}</Descriptions.Item>
      <Descriptions.Item label="Gender">{car?.Kilometer}</Descriptions.Item>
    </Descriptions>
  );
};

export default CarInfoPage;