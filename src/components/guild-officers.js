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
        <p>Here is a list of our Guild Officers.</p>

        <p>
          {" "}
          As an Officers of the Guild, we share many of the guild leader's tools
          for managing the guild, its members, and activities.
        </p>
      </div>
    </div>
  </>
);
export default App;
