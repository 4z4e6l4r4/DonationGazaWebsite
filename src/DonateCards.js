import React from "react";
import { Card, Col, Row } from "antd";


const { Meta } = Card;

const DonateCard = () => (
  <div  style={{
    textAlign: 'center',
    marginLeft: '60px'
}}>
    <Row gutter={24}
    style={{
      textAlign: 'center'
}}>
      <Col span={6} >
        <Card
          hoverable
          style={{
            width: 300,
            textAlign: 'center',

          }}
          cover={
            <img
              alt="Palestine School"
              src="https://i.pinimg.com/564x/2d/1b/df/2d1bdf7a35c8a1590cb28f3005d2f60b.jpg"
            />
          }
        >
          <Meta title="Educational Support" description="If you want to be a life for education in Palestine" />
        </Card>
      </Col>
     
      <Col span={6}>
        <Card
          hoverable
          style={{
            width: 300,
            textAlign: 'center',
          }}
          cover={
            <img
              alt="example"
              src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2130000/2131328.jpg"
            />
          }
        >
          <Meta title="Food Support" description="If you want to meet the most basic nutritional need in Palestine" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 300,
            textAlign: 'center',
          }}
          cover={
            <img
              alt="example"
              src="https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2023/11/202311mena_palestine_indonesian_hospital.JPG?itok=rB1yw3fq"
            />
          }
        >
          <Meta title="Europe Street beat" description={"If you want to meet the most basic medicine  need in Palestine"} />
        </Card>
      </Col>
    </Row>
  </div>
);
export default DonateCard;
