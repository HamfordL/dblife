import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const App = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
    </div>

    <div class="container">
      <div class="box-1">
        <p>he is our G leader</p>
      </div>
    </div>
  </>
);
export default App;
