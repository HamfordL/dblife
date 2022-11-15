import AnnImage from "../images/wmat.jpeg";

const Announcements = () => (
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
      border: "1px solid red",
      backgroundImage: `url(${AnnImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <container style={{}}>Announcements Page</container>
    <br />
    <container style={{}}>
      Read about the latest happenings from DB Life here!
    </container>
    <br />
    <container style={{ fontSize: 25 }}>
      We are currently looking for ____ amount of players
    </container>
    <br />
    <br />
  </div>
);

export default Announcements;
