import React from "react";
import { Layout, Typography } from "antd";
import { Routes, Route } from "react-router-dom";

import SiderMenu from "./components/sider-menu";
import HomePage from "./views/home-page";
import Announcements from "./views/announcements";
import EventsPage from "./views/events-page";
import GuildMembers from "./views/guild-members";
import GuildLeader from "./views/guild-leader";
import GuildOfficers from "./views/guild-officers";

import "./App.css";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100%" }}>
        <Header style={{ background: "orange" }}>
          <Title level={1}>Welcome to DB Life!</Title>
        </Header>

        <Layout>
          <SiderMenu />

          <Content style={{}}>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/events-page" element={<EventsPage />} />
              <Route path="/guild-members" element={<GuildMembers />} />
              <Route path="/guild-leader" element={<GuildLeader />} />
              <Route path="/guild-officers" element={<GuildOfficers />} />
            </Routes>
          </Content>
        </Layout>

        <Footer style={{ padding: 2 }}>Official website for DB Life</Footer>
      </Layout>
    </div>
  );
}

export default App;