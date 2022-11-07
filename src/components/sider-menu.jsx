import { Layout, Menu } from "antd";

const SiderMenu = () => {
  return (
    <Layout.Sider style={{ background: "orange", padding: 10 }}>
      <Menu defaultSelectdKeys={["Home"]}>
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.SubMenu
          title={
            <span>
              <span>News</span>
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="news">Announcements</Menu.Item>
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
            <Menu.Item onClick key="guildLeader">
              Guild Leader
            </Menu.Item>
            <Menu.Item key="guildMembers">Guild Officers</Menu.Item>
            <Menu.Item key="guildMembers">Guild Members</Menu.Item>
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
};

export default SiderMenu;
