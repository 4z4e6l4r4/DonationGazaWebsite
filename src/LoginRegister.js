import React from 'react';
import { Tabs } from 'antd';
import Login from './Login';
import Register from './Register';
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserShared2Fill } from "react-icons/ri";


const LoginRegister = () => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane
      tab={<span>Login</span>}
      key="1"
      icon={<RiUserShared2Line />}
    >
      <Login />
    </Tabs.TabPane>

    <Tabs.TabPane
      tab={<span>Register</span>}
      key="2"
      icon={<RiUserShared2Fill />}
    >
      <Register />
    </Tabs.TabPane>
  </Tabs>
);

export default LoginRegister;
