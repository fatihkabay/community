import { PropsWithChildren, useState } from 'react';
import {Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import "./DefaultLayout.css";
import { clearStorage } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/helpers';

const {Header, Content, Footer, Sider } = Layout;

interface Props {}

const DefaultLayout = (props: PropsWithChildren<Props>) => {
  const user = getUser();
  const navigate = useNavigate();
  const onLogout = () => {
    clearStorage();
    navigate("/login");
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
          <img className='logo' src="./logo.png" alt="" />
          <div className="header-buttons">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />
        <Button className='header-button header-toggle-button'>Nav</Button>
        <Button className='header-button header-logout-button' onClick={onLogout}>Logout</Button>
        </div>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu
            mode="inline"
            theme='dark'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
          <Button className='sider-buttons'>Nav</Button>
          <Button className='sider-buttons'>Nav</Button>
          <Button className='sider-buttons'>Nav</Button>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
         { <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{user?.name}</Breadcrumb.Item>
            <Breadcrumb.Item>{user?.lastname}</Breadcrumb.Item>
          </Breadcrumb> } 
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div style={{ padding: 10, minHeight: 605, background: colorBgContainer }}>
            {props.children}
          </div>
          </Content> <Footer style={{ textAlign: 'center' }}>Community ??2023 Created by Fatih Kabay</Footer>
        </Layout>
       
      </Layout>
    </Layout>

  );
};
export default DefaultLayout;