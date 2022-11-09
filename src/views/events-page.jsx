const EventsPage = () => (
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
      Current Events happening in game.
    </container>
    <br />
    <br />
    <container style={{ border: "1px solid red" }}>
      Stay up to date with the current latest Events happening in Dragon Ball
      Legends!
    </container>
    <br />
    <br />
  </div>
);

export default EventsPage;
