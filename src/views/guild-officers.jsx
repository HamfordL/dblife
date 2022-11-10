import React from "react";
import { Card, Col, Row } from "antd";

import OfficersImage from "../images/gokubeerus.jpg";

const GuildOfficers = () => (
  <div
    style={{
      background: "black",
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      padding: 10,
      display: "flex",
      flex: 1,
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${OfficersImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "1px solid red",
    }}
  >
    <container style={{ border: "1px solid red" }}>
      Our Guild's Officers consist of 2 long time members.
    </container>
    <br />
    <br />
    <br />
    <div className="site-card-wrapper">
      <Row gutter={10}>
        <Col span={10}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
            }}
            title="łƵł ゴミ箱 RR"
            headStyle={{
              backgroundColor: "#5c6cfa",
              color: "#ffffff",
              fontWeight: "bold",
            }}
            bordered={false}
          >
            19x Godly
            <br />
            <br />
            4x Top Guild Season Scorer
          </Card>
        </Col>
        <Col span={10}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
            }}
            title="łƵł B WILD"
            headStyle={{
              backgroundColor: "#5c6cfa",
              color: "#ffffff",
              fontWeight: "bold",
            }}
            bordered={false}
          >
            2x Godly
            <br />
            <br />
            27x Top Guild Season Scorer
          </Card>
        </Col>
      </Row>
    </div>
    <br />
  </div>
);

export default GuildOfficers;
