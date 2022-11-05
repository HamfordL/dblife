import { Layout, Typography, Image, Menu } from "antd";
import React, { useState, Component } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "orange" }}></Header>

        <Title
          style={{ background: "black", color: "yellow", padding: 25 }}
          level={1}
        >
          Welcome to DB Life!
        </Title>
        <Layout>
          <Sider style={{ background: "orange", padding: 10 }}>
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
                  <Menu.Item key="inGuildTournament">
                    In Guild Tournament
                  </Menu.Item>
                  <Menu.Item key="public Tournament">
                    Public Tournament
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
                <Menu.ItemGroup>
                  <Menu.Item key="dbSpace">DB Space</Menu.Item>
                  <Menu.Item key="gamePress">Game Press</Menu.Item>
                  <Menu.Item key="dblwebsite">DBL Website</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                background: "black",
                fontsize: 22,
                color: "yellow",
                padding: 200,
              }}
            >
              <Image
                className="center"
                width={400}
                height={200}
                src="src/ui.jpg"
              />
              <div class="container">
                <div class="box-1">
                  <p>
                    We strive to be a top 20-40 guild, but also a familial
                    guild. We want to keep an active guild discord where we talk
                    about all things DB and more. A band of brothers, if you
                    will! So the first thing is, you must enjoy participating in
                    the guild life!
                  </p>
                </div>
              </div>
            </Content>
            <Footer style={{ padding: 2 }}>Official website for DB Life</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
