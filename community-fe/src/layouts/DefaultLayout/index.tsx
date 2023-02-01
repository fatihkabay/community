import { PropsWithChildren, useState } from 'react';
import { Layout, Menu, theme, Button } from 'antd';
import items from './MenuItems';
import "./DefaultLayout.css";
import { clearStorage } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const {Header, Content, Footer, Sider } = Layout;

interface Props {}

const DefaultLayout = (props: PropsWithChildren<Props>) => {
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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
      <Header>
        <div className="logo" />
        <Button onClick={onLogout}>Logout</Button>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']} 
        />
        </Header>
        
        <Content>
          <div style={{ padding: 24, minHeight: 655, background: colorBgContainer }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Community ©2023 Created by Fatih Kabay</Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;


 