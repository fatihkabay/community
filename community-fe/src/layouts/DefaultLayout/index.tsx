import { PropsWithChildren, useState } from 'react';
import {Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import "./DefaultLayout.css";
import { clearStorage } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { getUser } from '../../utils/helpers';

const {Header, Content, Footer, Sider } = Layout;

interface Props {}


const DefaultLayout = (props: PropsWithChildren<Props>) => {
  const navigate = useNavigate();
  const onLogout = () => {
    clearStorage();
    navigate("/login");
  }
  
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  
const user = getUser();

  return (
    <Layout>
      <Header className="header">
          <img className='logo' src="./logo.png" alt="" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        <Button className='logout-button' onClick={onLogout}>Logout</Button>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
     
          <Menu
            mode="inline"
            theme='dark'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
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
          </Content> <Footer style={{ textAlign: 'center' }}>Community ©2023 Created by Fatih Kabay</Footer>
        </Layout>
       
      </Layout>
    </Layout>

  );
};
export default DefaultLayout;