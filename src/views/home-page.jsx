import homeBackground from "../images/ssg.gif";

const HomePage = () => (
  <div
    style={{
      background: "black",
      backgroundImage: `url(${homeBackground})`,
      backgroundSize: "cover",
      fontSize: 32,
      color: "black",
      fontWeight: "bold",
      padding: 155,
      margin: "0px",
      overFlowY: "hidden",
      overFlowX: "hidden",
      display: "flex",
      flex: 1,
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid red",
    }}
  >
    <div class="container">
      <div class="box-1">
        <p style={{ padding: 100, display: "center" }}>
          <br />
          <br />
          <br />
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
