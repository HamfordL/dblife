import React, { useState } from "react";

function Other() {
  const [state, setState] = useState(false);
  let dbzs = "https://legends.dbz.space/";
  let gamepress = "https://gamepress.gg/dblegends/news";
  let dblsite = "https://dble.bn-ent.net/en/";

  return (
    <div
      className="App"
      style={{
        display: "flex",
        background: "black",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
        margin: "0px",
        overFlowY: "hidden",
        overFlowX: "hidden",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a
        href={dbzs}
        style={{
          fontSize: 22,
          color: "blue",
        }}
      >
        DBZ Space
      </a>
      <br />
      <br />
      <br />
      <a
        href={gamepress}
        style={{
          fontSize: 22,
          color: "blue",
        }}
      >
        GamePress
      </a>
      <br />
      <br />
      <br />
      <a
        href={dblsite}
        style={{
          fontSize: 22,
          color: "blue",
        }}
      >
        Official Dragon Ball Legends Website
      </a>
    </div>
  );
}

export default Other;
