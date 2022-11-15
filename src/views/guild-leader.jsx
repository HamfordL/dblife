import React from "react";
import { Card } from "antd";

import LeaderImage from "../images/uiomen.jpg";
import IllyBanner from "../images/muiku.jpeg";

const GuildLeader = () => (
  <div
    style={{
      background: "black",
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      padding: 10,
      overFlowY: "hidden",
      overFlowX: "hidden",
      display: "flex",
      flex: 1,
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${LeaderImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "1px solid red",
    }}
  >
    <container style={{}}>Our Guild Leader's Page</container>
    <br />
    <br />
    <div className="site-card-border-less-wrapper">
      <Card
        title
        headStyle={{
          backgroundColor: "#5c6cfa",
          backgroundImage: `url(${IllyBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0px",
        }}
        bordered={false}
        style={{
          width: 400,
          color: "green",
          fontSize: 20,
          background: "black",
        }}
      >
        łƵłIllyrion
        <br />
        <br />
        12x Godly
        <br />
        <br />
        Smells feet for a living
        <br />
        <br />
        1x Top Guild Season Scorer
        <br />
      </Card>
    </div>
  </div>
);

export default GuildLeader;
