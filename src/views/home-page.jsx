import { Image } from "antd";
import homeImage from "../ui.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        background: "black",
        fontsize: 22,
        color: "yellow",
        padding: 155,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image className="center" width={400} height={200} src={homeImage} />
      <div class="container">
        <div class="box-1">
          <p style={{ padding: 30 }}>
            We strive to be a top 20-40 guild, but also a familial guild. We
            want to keep an active guild discord where we talk about all things
            DB and more. A band of brothers, if you will! So the first thing is,
            you must enjoy participating in the guild life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
