import React, { Component } from "react";
import styles from "./Css/contact.module.css";
import contact1 from "./img/contact1-removebg-preview.png";
import { Container, Row, Col } from "react-bootstrap";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
} from "react-yandex-maps";
import Rasm from "./img/Brand.png";
import { Navbar, Nav, Image, Modal } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import contact2 from "./img/Contact_Customers-removebg-preview.png";
import { Form, Input, Button } from "antd";
import map from "./img/5860108.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import NavbarMenuChat from "./NavbarMenu";
const { TextArea } = Input;
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
  state = {
    points: [
      {
        name: "ZAKO",
        param: [41.354353, 69.223353],
      },
      {
        name: "IT Tower",
        param: [41.317648, 69.230585],
      },
      {
        name: "PDP",
        param: [41.295995, 69.17519],
      },
      {
        name: "ICT academy",
        param: [41.281412, 69.212667],
      },
      {
        name: "Roboticslab",
        param: [41.235069, 69.247354],
      },
      {
        name: "Najot ta'lim",
        param: [41.286009, 69.253749],
      },
    ],
    smShow: false,
  };
  showModalBot = () => {
    this.setState({
      smShow: false,
    });
  };
  formRef = React.createRef();
  onGenderChange = (value) => {
    switch (value) {
      case "male":
        this.formRef.current.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        this.formRef.current.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        this.formRef.current.setFieldsValue({
          note: "Hi there!",
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
      note: "Hello world!",
      gender: "male",
    });
  };
  render() {
    const { width, height } = this.state;
    const style = {
      width: "100%",
      height: "100%",
    };
    return (
      <div style={{ overflow: "hidden" }}>
        <div className={styles.HeaderMenu}>
          <div id={styles.NavbarMe}>
            <NavbarMenuChat />
          </div>
          <Container>
            {/* <div className={styles.NavbarMenu}>
              <div className={styles.ScheduleName}>
                <div className={styles.ScheduleNameIcon}>
                  <p>
                    <MdTimer />
                  </p>
                  <p style={{ letterSpacing: "0.5px" }}>
                    Dush-Jum (9:00-17:00)
                  </p>
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
                  <p style={{ letterSpacing: "0.5px" }}>
                    pharmacyuzb@gmail.com
                  </p>
                </div>
              </div>
              <Navbar
                className={styles.NavbarGroup}
                collapseOnSelect
                expand="lg"
              >
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
                      <Nav.Link>
                        <Link to="/">
                          <p>Bosh sahifa</p>
                        </Link>
                      </Nav.Link>

                      <Nav.Link>
                        <Link to="/dorilar">
                          {" "}
                          <p>Dorilar</p>
                        </Link>
                      </Nav.Link>

                      <Nav.Link>
                        <Link to="/dorilar">
                          {" "}
                          <p>Dorilar</p>
                        </Link>
                      </Nav.Link>
                      <Nav.Link href="/apteka">
                        <p>Dorixonalar</p>
                      </Nav.Link>

                      <Nav.Link href="/Contact">
                        <p>Kantakt</p>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div> */}
            <Row>
              <Col  lg={6}>
                <h1 className={styles.headertext}>Biz bilan bog'laning !</h1>
                <div className={styles.WhatchWriter}>
                  <a
                    className={styles.CardModalItemMe}
                    onClick={() => this.setState({ smShow: true })}
                  >
                    Qo'ngiroq qilish!
                  </a>

                  <Modal
                    className={styles.CardModalItem}
                    size="sm"
                    show={this.state.smShow}
                    onHide={() => this.setState({ smShow: false })}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        Telefon Raqam!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                    </Modal.Body>
                    <Modal.Footer className={styles.CardFooterExitIcon}>
                      <i
                        class="fas fa-times"
                        styles={{ color: "red" }}
                        onClick={() => this.showModalBot()}
                      ></i>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Col>
              <Col lg={6}>
                <img className={styles.headerImg} src={contact1} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.map}>
          <Container>
            <Row>
              <Col lg={6}>
                <img
                  className={styles.mapImg}
                  src={map}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col lg={6}>
                <h2
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    marginTop: "50px",
                  }}
                >
                  Manzilimiz:
                </h2>
                <YMaps>
                  <div
                    style={{
                      width: "100%",
                      height: "400px",
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <Map
                      width="100%"
                      height="100%"
                      defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    />
                  </div>
                </YMaps>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.form}>
          <Container>
            <Row>
              <Col
                className={styles.leftForm}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={contact2} style={{ marginTop: "80px" }} />
              </Col>
              <Col
                className={styles.rightForm}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ color: "white" }}>Bizga xabar qoldiring</h3>
                <Form
                  className={styles.formInput}
                  style={{ width: "100%", marginLeft: "170px" }}
                  {...layout}
                  ref={this.formRef}
                  name="control-ref"
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input style={{ borderRadius: "10px", padding: "8px" }} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input style={{ borderRadius: "10px", padding: "8px" }} />
                  </Form.Item>
                  <Form.Item name="text">
                    <TextArea
                      style={{ borderRadius: "10px", padding: "8px" }}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button
                      className={styles.btnForm}
                      htmlType="submit"
                      style={{
                        backgroundColor: "white",
                        color: "#1C487A",
                        fontWeight: "800",
                        width: "100px",
                      }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ position: "relative" }}>
          <div className={styles.aloqa}>
            <h1>Biz bilan aloqa</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className={styles.aloqacard}>
                <div>
                  <HiOutlineLocationMarker style={{ color: "white" }} />
                </div>
                <p>
                  <b>Manzil: </b> Yakkasaroy tumani
                </p>
              </div>
              <div className={styles.aloqacard}>
                <div>
                  <FaPhoneAlt style={{ color: "white" }} />
                </div>
                <p>
                  <b>Telefon: </b>+9983398567165
                </p>
              </div>
              <div className={styles.aloqacard}>
                <div>
                  <AiOutlineMail style={{ color: "white" }} />
                </div>
                <p>
                  <b>E-mail: </b>kathfygfbqb@gmail.com
                </p>
              </div>
              <div className={styles.aloqacard}>
                <div>
                  <FaTelegramPlane style={{ color: "white" }} />
                </div>
                <p>
                  <b>Telegram: </b>@it_tower
                </p>
              </div>
              <div className={styles.aloqacard}>
                <div>
                  <AiOutlineInstagram style={{ color: "white" }} />
                </div>
                <p>
                  <b>Instagram: </b>@it_tower
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
