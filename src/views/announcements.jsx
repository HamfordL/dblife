const Announcements = () => (
  <div
    style={{
      background: "black",
      fontSize: 30,
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
    <container style={{ border: "1px solid red" }}>
      Announcements Page
    </container>
    <br />
    <br />
    <container style={{ border: "1px solid red" }}>
      Read about the latest happenings from DB Life here!
    </container>
    <br />
    <br />
  </div>
);

export default Announcements;
