import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
const App = () => (
  <>
    <div style={{ background: "black", display: "flex" }}>
      <Avatar size={50} icon={<UserOutlined />} />
    </div>
  </>
);
export default App;
