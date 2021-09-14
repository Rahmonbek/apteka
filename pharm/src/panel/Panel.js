import React, { Component } from "react";
import { Layout, Menu ,Card } from "antd";
import foto from '../doctor logo.png';
import Bosh from './Bosh'
import Apteka from './Apteka'
import Card1 from './Card1.js'
import {
  
  HomeOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  
} from "@ant-design/icons";
import "../App.css";
import { BrowserRouter,NavLink,Route,Switch } from "react-router-dom";
const { Header, Content,  Sider } = Layout;
const { Meta } = Card;
export default class Panel extends Component {
  
  render() {
    return (<div>
      <BrowserRouter>
      <Layout >
      <Header
        className="site-layout-sub-header-background header"
        style={{ padding: 0 }}
      > 
      
      <div className="imgh1">
      <img src={foto} className='foto'/><h1 className="text">O'zbekiston Respublikasi Sog'liqni saqlash vazirligi</h1></div>
      
      </Header>
        
        
        <Layout>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
      
      
        <Menu theme="dark" mode="inline" className='menu' defaultSelectedKeys={["4"]} >
          <Menu.Item key="1" href="/bosh" as={NavLink} to="/bosh" icon={<HomeOutlined />}>
           Bosh sahifa
          </Menu.Item>
          <Menu.Item key="2" as={NavLink} to="/dorilar" icon={<PlusOutlined />}>
          
            Dorilar
          </Menu.Item>
          <Menu.Item key="3" as={NavLink} to="/apteka" icon={<EnvironmentOutlined />}>
          Aptekalar
        </Menu.Item>
         
        </Menu>
        
      </Sider>
      <Layout style={{ padding: '24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        > <Switch>
          <Route exact path="/bosh" component={Bosh}/>
          <Route exact path="/dorilar" component={Card1}/> 
          <Route exact path="/apteka" component={Apteka}/> </Switch>
          </Content>
          
      </Layout> 
          
          
          
        </Layout>
      </Layout>
    </BrowserRouter> </div>);
  }
}