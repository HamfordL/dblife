import { Image } from "antd";
import React from "react";

import GPoints1 from "../images/points1.jpeg";
import GPoints2 from "../images/points2.jpeg";
import GPoints3 from "../images/points3.jpeg";
import GPoints4 from "../images/points4.jpeg";
import GPoints5 from "../images/points5.jpeg";
import Wenergy from "../images/energy.jpeg";
import Activepoints from "../images/apoints.jpg";

const App = () => (
  <div style={{ height: "100vh", background: "black" }}>
    <Image.PreviewGroup>
      <Image className="center" width={1500} height={200} src={Activepoints} />
      <br />

      <Image className="center" width={500} height={300} src={GPoints1} />
      <Image className="center" width={500} height={300} src={GPoints2} />
      <Image className="center" width={500} height={300} src={GPoints3} />
      <Image className="center" width={500} height={300} src={GPoints4} />
      <Image className="center" width={500} height={300} src={GPoints5} />
      <Image className="center" width={500} height={300} src={Wenergy} />
    </Image.PreviewGroup>
  </div>
);
export default App;
