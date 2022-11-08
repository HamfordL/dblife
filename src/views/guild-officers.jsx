import { Card, Col, Row } from "antd";
import YobsImage from "../images/GogetaBlue.jpg";
import RapImage from "../images/cooler.jpg";
import OfficersImage from "../images/gokubeerus.jpg";
import React from "react";

const GuildOfficers = () => (
  <div
    style={{
      background: "black",
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      padding: 155,
      display: "flex",
      flex: 1,
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${OfficersImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    Our Guild's Officers consist of 2 long time members.
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
              color: "green",
              fontSize: 20,
            }}
            title="łƵł ゴミ箱 RR"
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
              color: "green",
              fontSize: 20,
            }}
            title="łƵł B WILD"
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
