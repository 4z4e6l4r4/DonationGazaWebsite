import React, { useState } from "react";
import {Input, Tooltip} from "antd";
import {
    UserOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
  } from "@ant-design/icons";
  import { InfoCircleOutlined, UnlockOutlined } from "@ant-design/icons";
  import { Button } from "antd";
  import { Col, Row } from 'antd';


const Register = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canRegister = () => {
    console.log("Successful Registration", email);
    <a href="#"></a>

    onClose();
  };

  return (
  <Row>
    <Col span={10}>
    <div >
      <h2>Register</h2>
      <label>Email:</label>
      <br />

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
      <label>Password:</label>
      <br />
      <Input.Password
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        size="large"
        prefix={<UnlockOutlined className="site-form-item-icon" />}
          placeholder=" Enter your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
      />
      <br />
      <br />
      <Button type="default" wrap="wrap" onClick={canRegister}>
        {" "}
        Sign Up
      </Button>
    </div>
    </Col>
  </Row>
  );
};
export default Register;
