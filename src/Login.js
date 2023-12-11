import React, { useState } from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { InfoCircleOutlined, UnlockOutlined } from "@ant-design/icons";

import { Input,Tooltip } from "antd";
import { Col, Row } from 'antd';

import { Button } from "antd";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canLogin = () => {
    console.log("Login Successful", email);
    <a href="#"></a>
    onClose();
  };

  return (
  <Row >
    <Col span={10}>
    <div>
      <h2>Login</h2>
     
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size="large"
        placeholder=" Enter your Email"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <br />
     
      <br />
      <Input.Password
      size="large"
      prefix={<UnlockOutlined className="site-form-item-icon" />}
        placeholder=" Enter your password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button type="default" wrap="wrap" onClick={canLogin}>
        {" "}
        Login
      </Button>
    </div>
    </Col>
  </Row>
  );
};

export default Login;
