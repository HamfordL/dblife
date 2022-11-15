import React from "react";
import { Layout, Typography } from "antd";
import { Routes, Route } from "react-router-dom";

import SiderMenu from "./components/sider-menu";
import Avatar from "./components/avatar";

import HomePage from "./views/home-page";
import Announcements from "./views/announcements";
import GuildMembers from "./views/guild-members";
import GuildLeader from "./views/guild-leader";
import GuildOfficers from "./views/guild-officers";
import Registration from "./views/registration";
import SignIn from "./views/sign-in";
import GuildPoints from "./views/guild-points";
import Forums from "./views/forums";
import Other from "./views/other";

import "./App.css";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
          margin: "0px",
          overFlowY: "hidden",
          overFlowX: "hidden",
        }}
      >
        <Header
          style={{
            background: "black",
            height: "auto",
          }}
        >
          <Title style={{ color: "green", fontWeight: "bold" }} level={1}>
            Welcome to DB Life!
          </Title>
        </Header>

        <Avatar style={{}}></Avatar>

        <Layout>
          <SiderMenu />

          <Content>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/guild-members" element={<GuildMembers />} />
              <Route path="/guild-leader" element={<GuildLeader />} />
              <Route path="/guild-officers" element={<GuildOfficers />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/guild-points" element={<GuildPoints />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/other" element={<Other />} />
            </Routes>
          </Content>
        </Layout>

        <Footer
          style={{
            marginTop: "100vh",
            padding: 1,
          }}
        >
          Official website for DB Life
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
