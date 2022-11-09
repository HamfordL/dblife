import { Image } from "antd";
import homeImage from "../images/ui.jpg";

const HomePage = () => (
  <div
    style={{
      background: "black",
      fontSize: 32,
      color: "yellow",
      padding: 155,
      display: "flex",
      flex: 1,
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid red",
    }}
  >
    <Image
      className="center"
      width={500}
      height={300}
      src={homeImage}
      style={{ border: "1px solid red" }}
    />
    <div class="container">
      <div class="box-1">
        <p style={{ padding: 100, border: "1px solid red" }}>
          We strive to be a top 20-40 guild, but also a familial guild. We want
          to keep an active guild discord where we talk about all things DB and
          more. A band of brothers, if you will! So the first thing is, you must
          enjoy participating in the guild life!
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
