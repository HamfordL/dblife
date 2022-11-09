import React from "react";
import EventImage from "../images/jaco.webp";

const EventPage = () => (
  <div
    style={{
      background: "black",
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      padding: 10,
      display: "flex",
      flex: 1,
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: `url(${EventImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
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

export default EventPage;
