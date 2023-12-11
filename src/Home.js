import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import HomeDesign from './HomeDesign';
import { TbGardenCart, TbUserPentagon } from "react-icons/tb";
import { RiBookOpenFill, RiHome3Line } from 'react-icons/ri';
import LoginRegister from './LoginRegister';


const { Header, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {   
              key: '1',
              icon: <LoginRegister/>,
              label: 'Wellcome',
            },
            {
              key: '2',
              icon: <RiHome3Line />,
              label: 'Home',
            },
            {
              key: '3',
              icon: <RiBookOpenFill />,
              label: 'Library',
            },
            {
              key: '4',
              icon: <TbGardenCart />,
              label: 'Donation',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

<HomeDesign/>



      </Layout>
      
    </Layout>
  );
};
export default Home;