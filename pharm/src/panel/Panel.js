import React, { Component } from "react";
import { Layout, Menu ,Card } from "antd";
import foto from './doctorlogo.jpg';
import Bosh from './Bosh'
import Apteka from './Apteka'
import Card1 from './Card1.js'
import {
  
  HomeOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  
} from "@ant-design/icons";
import "../App.css";
import { BrowserRouter,NavLink,Link,Route,Switch } from "react-router-dom";
const { Header, Content,  Sider } = Layout;
const { Meta } = Card;
export default class Panel extends Component {
  
  render() {
    return (<div>
      <BrowserRouter>
      <Layout style={{ Width:'100vw',height:'100vh' }} >
      <Header
        className="site-layout-sub-header-background header"
        
      > 
      
      <div className="imgh1">
      <img src={foto} style={{width:'50px',height:'50px',borderRadius:'50%',marginLeft:'10%'}} className='foto'/><h1 className="text">O'zbekiston Respublikasi Sog'liqni saqlash vazirligi</h1></div>
      
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
          <Menu.Item key="1" href="/bosh1" as={NavLink} to="/bosh" icon={<HomeOutlined />}>
          <Link to="/bosh1">  Bosh sahifa</Link>
          </Menu.Item>
          <Menu.Item ke
          y="2" as={NavLink} to="/dorilar1" icon={<PlusOutlined />}>
          <Link to="/dorilar1">  Dorilar</Link>
          </Menu.Item>
          <Menu.Item key="3" as={NavLink} to="/apteka" icon={<EnvironmentOutlined />}>
          <Link to="/apteka1">Aptekalar</Link>
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
          <Route exact path="/bosh1" component={Bosh}/>
          <Route exact path="/dorilar1" component={Card1}/> 
          <Route exact path="/apteka1" component={Apteka}/>
           </Switch>
          </Content>
          
      </Layout> 
          
          
          
        </Layout>
      </Layout>
    </BrowserRouter> </div>);
  }
}