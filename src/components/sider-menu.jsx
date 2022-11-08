import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const SiderMenu = () => (
  <Layout.Sider style={{ background: "orange", padding: 1 }}>
    <Menu defaultSelectdKeys={["Home"]}>
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
        <Menu.ItemGroup>
          <Menu.Item key="news">
            <Link to="/announcements">Announcements</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <span>
            <span>Guides</span>
          </span>
        }
      >
        <Menu.ItemGroup>
          <Menu.Item key="teamBuild">Team Build</Menu.Item>
          <Menu.Item key="guildPoints">Guild Points</Menu.Item>
          <Menu.Item key="events">Events</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={
          <span>
            <span>Screenshots</span>
          </span>
        }
      >
        <Menu.ItemGroup>
          <Menu.Item key="forfeit">Forfeits</Menu.Item>
          <Menu.Item key="artWork">Art Work</Menu.Item>
          <Menu.Item key="events">Events</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <span>
            <span>Roster</span>
          </span>
        }
      >
        <Menu.ItemGroup>
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
            <span>Tournaments</span>
          </span>
        }
      >
        <Menu.ItemGroup>
          <Menu.Item key="inGuildTournament">In Guild Tournament</Menu.Item>
          <Menu.Item key="public Tournament">Public Tournament</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <span>
            <span>Other</span>
          </span>
        }
      >
        <Menu.ItemGroup>
          <Menu.Item key="dbSpace">DB Space</Menu.Item>
          <Menu.Item key="gamePress">Game Press</Menu.Item>
          <Menu.Item key="dblwebsite">DBL Website</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  </Layout.Sider>
);

export default SiderMenu;
