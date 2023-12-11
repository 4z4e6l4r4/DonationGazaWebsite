import React from "react";
import { Anchor, Col, Row } from "antd";
import LoginRegister from "./LoginRegister";
import Statistics from "./Statistics";
import { Layout } from "antd";
import Cart from './Cart';

const { Footer } = Layout;

const HomeDesign = () => (
  <Row>
    <Col span={23}>
      <div
        id="part-1"
        style={{
          height: "150vh",
          background: "rgba(255,0,0,0.02)",
        }}
      />
      <LoginRegister />
<br/>
 <Cart/>
      <div
        id="part-2"
        style={{
          height: "150vh",
          background: "rgba(0,255,0,0.02)",
        }}
      />
      <div
        id="part-3"
        style={{
          height: "100vh",
          background: "rgba(0,0,255,0.02)",
        }}
      />
    </Col>
    <Col span={1}>
      <Anchor
        replace
        items={[
          {
            key: "part-1",
            href: "#part-1",
            title: "Part 1",
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Part 2",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Part 3",
          },
        ]}
      />
    </Col>

    {/* --------------- FOOTER --------------- */}
    <Col span={24}>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <Statistics />
      </Footer>
    </Col>
  </Row>
);
export default HomeDesign;
