import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const SiderMenu = () => (
  <Layout.Sider
    style={{
      background: "black",
      padding: 0.1,
      height: "100vh",
    }}
  >
    <Menu
      defaultSelectdKeys={["Home"]}
      style={{
        background: "orange",
        padding: 1,
        fontWeight: "bold",
        fontSize: 20,
      }}
    >
      <Menu.Item key="Home">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.SubMenu
        title={
          <span>
            <span>News</span>
          </span>
        }
      >
        <Menu.ItemGroup
          style={{
            background: "orange",
            padding: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Menu.Item key="news">
            <Link to="/announcements">Announcements</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={
          <span>
            <span>Forums</span>
          </span>
        }
      >
        <Menu.ItemGroup
          style={{
            background: "orange",
            padding: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Menu.Item key="forums">
            <Link to="/forums">Forums</Link>
          </Menu.Item>
          <Menu.Item key="guildPoints">
            <Link to="/guild-points">Points Guide</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={
          <span>
            <span>Roster</span>
          </span>
        }
      >
        <Menu.ItemGroup
          style={{
            background: "orange",
            padding: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Menu.Item key="guildLeader">
            <Link to="/guild-leader">Guild Leader</Link>
          </Menu.Item>
          <Menu.Item key="guildOfficers">
            <Link to="/guild-officers">Guild Officers</Link>
          </Menu.Item>
          <Menu.Item key="guildMembers">
            <Link to="/guild-members">Guild Members</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={
          <span>
            <span>Other</span>
          </span>
        }
      >
        <Menu.ItemGroup
          style={{
            background: "orange",
            padding: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Menu.Item key="dbSpace">DB Space</Menu.Item>
          <Menu.Item key="gamePress">Game Press</Menu.Item>
          <Menu.Item key="dblwebsite">DBL Website</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={
          <span>
            <span>Login</span>
          </span>
        }
      >
        <Menu.ItemGroup
          style={{
            background: "orange",
            padding: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Menu.Item key="signIn">
            <Link to="/sign-in">Sign-In</Link>
          </Menu.Item>
          <Menu.Item key="registration">
            <Link to="/registration">Registration</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  </Layout.Sider>
);

export default SiderMenu;
