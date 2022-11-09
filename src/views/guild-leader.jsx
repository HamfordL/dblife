import { Card } from "antd";
import LeaderImage from "../images/uiomen.jpg";

const GuildLeader = () => (
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
      backgroundImage: `url(${LeaderImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "2px solid red",
    }}
  >
    <container style={{ border: "1px solid red" }}>
      Our Guild Leader's Page
    </container>
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
          width: 300,
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
