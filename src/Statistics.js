import React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';


const formatter = (value) => <CountUp end={value} separator="," />;
const Statistics = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Donation Summary (₺)" value={10708096} precision={2} formatter={formatter} />
    </Col>
  </Row>
);
export default Statistics;