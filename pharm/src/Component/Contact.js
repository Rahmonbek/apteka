import React, { Component } from 'react'
import styles from './Css/contact.module.css'
import contact1 from './img/contact1-removebg-preview.png'
import { Container,Row,Col } from 'react-bootstrap'
import Menu from './Menu'
import { YMaps, Map } from 'react-yandex-maps';
import Rasm from "./img/Brand.png";
import { Navbar,Nav, Image } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import contact2 from './img/Contact_Customers-removebg-preview.png'
import { Form, Input, Button, Select } from 'antd';
import map from './img/5860108.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai'
import {FaSignInAlt,FaTelegramPlane,FaPhoneAlt} from 'react-icons/fa'
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default class Contact extends Component {

    formRef = React.createRef();
  onGenderChange = (value) => {
    switch (value) {
      case 'male':
        this.formRef.current.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        this.formRef.current.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        this.formRef.current.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
    render() {
        return (
            <div>
                 <div className={styles.HeaderMenu}>
        <Container>
          <div className={styles.NavbarMenu}>
            <div className={styles.ScheduleName}>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <MdTimer />
                </p>
                <p style={{ letterSpacing: "0.5px" }}>Dush-Jum (9:00-17:00)</p>
              </div>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <IoIosCall />
                </p>
                <p style={{ letterSpacing: "0.5px" }}>+998(71)799-88-00</p>
              </div>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <HiOutlineMail />
                </p>
                <p style={{ letterSpacing: "0.5px" }}>pharmacyuzb@gmail.com</p>
              </div>
            </div>
            <Navbar className={styles.NavbarGroup} collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <Image className={styles.ImgBrand} src={Rasm} />
                </Navbar.Brand>
                <Navbar.Toggle
                  className={styles.NavbarMenuMedia}
                  aria-controls="responsive-navbar-nav"
                  style={{ color: "#98349400", border: "none" }}
                >
                  <i
                    class="fas fa-bars"
                    style={{ color: "white", fontSize: "26px" }}
                  ></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className={styles.NavMe}>
                    <Nav.Link href="#deets">
                      <p>Menu</p>
                    </Nav.Link>
                    <Nav.Link href="#service">
                      <p>Xizmatlar</p>
                    </Nav.Link>
                    <Nav.Link href="#List">
                      <p>Doctors</p>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/dorilar">
                        {" "}
                        <p>Dorilar</p>
                      </Link>
                    </Nav.Link>

                    <Nav.Link href="#Testimonials">
                      <p>Testimonials</p>
                    </Nav.Link>
                    <Nav.Link href="#blog">
                      <p>Blog</p>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div> 
          <Row>
              <Col lg={6}>
                  <h1 className={styles.headertext}>Biz bilan bog'laning !</h1>
                  <div className={styles.WhatchWriter}>
                  <p>Qo'ng'iroq qilish</p>
                </div>
              </Col>
              <Col lg={6}>
                  <img src={contact1}/>
              </Col>
          </Row>
        </Container>

      </div>
      <div className={styles.map}>
        <Container>
          <Row>
            <Col lg={6}>
              <img src={map} style={{width:'100%'}}/>
            </Col>
            <Col lg={6}>
              <h2 style={{fontFamily: 'Arial, Helvetica, sans-serif',marginTop:'50px'}}>Manzilimiz:</h2>
              <YMaps style={{width:'100%'}}>
    <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',width:'550px'}}>
      <Map width={550} height={400} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
            </Col>

          </Row>
        </Container>
      </div>
      <div className={styles.form}>
      
          <Container>
              <Row>
                  <Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <img src={contact2} style={{marginTop:'80px'}}/>
                  </Col>
                  <Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                      <h3 style={{color:'white'}}>Bizga xabar qoldiring</h3>
                  <Form style={{width:'100%',marginLeft:'170px'}} {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{borderRadius:'10px',padding:'8px'}}/>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{borderRadius:'10px',padding:'8px'}}/>
        </Form.Item>
        <Form.Item name="text">
        <Input.TextArea style={{borderRadius:'10px',padding:'20px'}}/>
      </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" style={{backgroundColor:'white',color:'#1C487A',fontWeight:'800',width:'100px'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
                  </Col>
              </Row>
          </Container>
          <svg id="wave" style={{transform:'rotate(180deg)', transition: '0.3s',height:'300px',width:'157%'}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(28, 72, 122, 1)" offset="0%"></stop><stop stop-color="rgba(28, 72, 122, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:'translate(0, 0px)', opacity:'1'}} fill="url(#sw-gradient-0)" d="M0,0L34.3,40.8C68.6,82,137,163,206,171.5C274.3,180,343,114,411,89.8C480,65,549,82,617,130.7C685.7,180,754,261,823,318.5C891.4,376,960,408,1029,367.5C1097.1,327,1166,212,1234,196C1302.9,180,1371,261,1440,294C1508.6,327,1577,310,1646,294C1714.3,278,1783,261,1851,269.5C1920,278,1989,310,2057,318.5C2125.7,327,2194,310,2263,310.3C2331.4,310,2400,327,2469,326.7C2537.1,327,2606,310,2674,318.5C2742.9,327,2811,359,2880,375.7C2948.6,392,3017,392,3086,392C3154.3,392,3223,392,3291,359.3C3360,327,3429,261,3497,220.5C3565.7,180,3634,163,3703,130.7C3771.4,98,3840,49,3909,57.2C3977.1,65,4046,131,4114,204.2C4182.9,278,4251,359,4320,359.3C4388.6,359,4457,278,4526,228.7C4594.3,180,4663,163,4731,130.7C4800,98,4869,49,4903,24.5L4937.1,0L4937.1,490L4902.9,490C4868.6,490,4800,490,4731,490C4662.9,490,4594,490,4526,490C4457.1,490,4389,490,4320,490C4251.4,490,4183,490,4114,490C4045.7,490,3977,490,3909,490C3840,490,3771,490,3703,490C3634.3,490,3566,490,3497,490C3428.6,490,3360,490,3291,490C3222.9,490,3154,490,3086,490C3017.1,490,2949,490,2880,490C2811.4,490,2743,490,2674,490C2605.7,490,2537,490,2469,490C2400,490,2331,490,2263,490C2194.3,490,2126,490,2057,490C1988.6,490,1920,490,1851,490C1782.9,490,1714,490,1646,490C1577.1,490,1509,490,1440,490C1371.4,490,1303,490,1234,490C1165.7,490,1097,490,1029,490C960,490,891,490,823,490C754.3,490,686,490,617,490C548.6,490,480,490,411,490C342.9,490,274,490,206,490C137.1,490,69,490,34,490L0,490Z"></path></svg>
      </div>
      <div style={{position:'relative'}}>
      <Container>
                 <Row>
                     <Col lg={12} className={styles.aloqa}>
                            <h1>Biz bilan aloqa</h1>
                            <Row>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard}>
                                    <div><HiOutlineLocationMarker style={{color:'white'}}/></div>
                                    <p><b>Manzil: </b> Yakkasaroy tumani</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard}>
                                    <div><FaPhoneAlt style={{color:'white'}}/></div>
                                    <p><b>Telefon: </b>+9983398567165</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard}>
                                    <div><AiOutlineMail style={{color:'white'}}/></div>
                                    <p><b>E-mail: </b>kathfygfbqb@gmail.com</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard}>
                                    <div><FaTelegramPlane style={{color:'white'}}/></div>
                                    <p><b>Telegram: </b>@it_tower</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard}>
                                    <div><AiOutlineInstagram style={{color:'white'}}/></div>
                                    <p><b>Instagram: </b>@it_tower</p>
                                </Col>
                            </Row>
                     </Col>
                 </Row>
             </Container>
      </div>
            </div>
        )
    }
}
