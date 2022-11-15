import React from "react";
import { Card, Col, Row } from "antd";

import OfficersImage from "../images/gokushouse.webp";
import yobsBanner from "../images/hakairus.jpg";
import rapsBanner from "../images/cooler.jpg";

const GuildOfficers = () => (
  <div
    style={{
      background: "black",
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      padding: 10,
      margin: "0px",
      overFlowY: "hidden",
      overFlowX: "hidden",
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
    <container style={{}}></container>
    <br />
    <br />
    <br />
    <div className="site-card-wrapper">
      <Row gutter={20}>
        <Col span={10}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              fontWeight: "bold",
              color: "green",
              fontSize: 20,
              background: "black",
            }}
            title
            headStyle={{
              backgroundImage: `url(${yobsBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0px",
            }}
            bordered={false}
          >
            łƵł ゴミ箱 RR
            <br />
            <br />
            19x Godly
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
              color: "green",
              fontSize: 20,
              background: "black",
            }}
            title
            headStyle={{
              backgroundColor: "#5c6cfa",
              backgroundImage: `url(${rapsBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0px",
            }}
            bordered={false}
          >
            łƵł B WILD
            <br />
            <br />
            2x Godly
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
