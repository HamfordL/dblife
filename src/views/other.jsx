import React from "react";
import { Image } from "antd";

import LegendsLogo from "../images/dblogo.png";
import GamePress from "../images/gamepress.png";
import DbzSpace from "../images/dbl.png";

function Other() {
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
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      <br />
      <br />

      <a href={dbzs}>
        <Image
          preview={{
            visible: false,
          }}
          className="center"
          width={500}
          height={200}
          src={DbzSpace}
        />
      </a>

      <br />
      <br />
      <br />
      <a href={gamepress}>
        <Image
          preview={{
            visible: false,
          }}
          className="center"
          width={1000}
          height={200}
          src={GamePress}
        />
      </a>
      <br />
      <br />
      <br />
      <a href={dblsite}>
        <Image
          preview={{
            visible: false,
          }}
          className="center"
          width={1000}
          height={200}
          src={LegendsLogo}
        />
      </a>
    </div>
  );
}

export default Other;
