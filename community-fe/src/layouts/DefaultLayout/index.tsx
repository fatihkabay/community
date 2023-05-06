import { PropsWithChildren, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import "./DefaultLayout.css";
import { clearStorage } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/helpers";
import "./DefaultLayout.css";
import { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

interface Props {}

const DefaultLayout = (props: PropsWithChildren<Props>) => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user != null) {
      setTimeout(() => {}, 1500);
    }
  });
  const onLogout = () => {
    clearStorage();
    navigate("/login");
  };
  if (user == null) return <></>;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("", "sub1", <UserOutlined />, [
      getItem(
        <Button className="header-button" onClick={() => {
          navigate("/user-info");
        }}>
          Profile
        </Button>
      ),
      getItem(
        <Button
          className="header-button header-logout-button"
          onClick={onLogout}
        >
          Logout
        </Button>
      ),
    ]),
  ];
  const userInfoClickControl: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };
  return (
    <Layout>
      <Header className="header">
        <img className="logo" src="./logo.png" alt="" />
        <div>
          <Menu
            onClick={userInfoClickControl}
            mode="horizontal"
            theme="dark"
            items={items}
          ></Menu>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            theme="dark"
            className="sider-buttons"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Button
              onClick={() => {
                navigate("/car-info");
              }}
              className="sider-button"
            >
              My Car Info
            </Button>
            <Button className="sider-button">Lorem Ipsum</Button>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{user?.name}</Breadcrumb.Item>
              <Breadcrumb.Item>{user?.lastname}</Breadcrumb.Item>
            </Breadcrumb>
          }
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div
              style={{
                padding: 10,
                minHeight: 605,
                background: colorBgContainer,
              }}
            >
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Community ©2023 Created by Fatih Kabay
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
