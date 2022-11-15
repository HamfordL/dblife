import React from "react";
import { Card } from "antd";

import LeaderImage from "../images/uiomen.jpg";

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
        title="łƵłIllyrion"
        headStyle={{
          backgroundColor: "#5c6cfa",
          color: "#ffffff",
          fontWeight: "bold",
        }}
        bordered={false}
        style={{
          width: 400,
        }}
      >
        <p>Bad Bitch</p>
        <p>Tall Bitch</p>
        <p>Singing Bitch</p>
      </Card>
    </div>
  </div>
);

export default GuildLeader;
