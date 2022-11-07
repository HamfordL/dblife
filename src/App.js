import React from "react";
import { Layout, Typography } from "antd";

import SiderMenu from "./components/sider-menu";
import HomePage from "./views/home-page";

import "./App.css";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "orange" }}>
          <Title level={1}>Welcome to DB Life!</Title>
        </Header>

        <Layout>
          <SiderMenu />

          <Content>
            <HomePage />
          </Content>
        </Layout>

        <Footer style={{ padding: 2 }}>Official website for DB Life</Footer>
      </Layout>
    </div>
  );
}

export default App;
