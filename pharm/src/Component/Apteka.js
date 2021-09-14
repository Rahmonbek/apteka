import React, { Component } from 'react'
import styles from './Css/Apteka.module.css'
import { Container, Row, Col,Navbar,Nav, Image, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MdSlowMotionVideo, MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import contact1 from './img/apteka1.jpg';
import Rasm from "./img/Brand.png";

export default class Apteka extends Component {
    state={
        smShow:false
    }
   
     showModalBot = () => {
      this.setState({
          smShow:true
      })
     }
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
                    <Nav.Link href="#blog">
                      <p>Aloqa</p>
                    </Nav.Link>
                    <Nav.Link href="#apteka">
                      <p>Dorixonalar</p>
                    </Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div> 
          <Row>
              <Col lg={6}>
                  <h1 className={styles.headertext}>Sifatli xizmat va hamyonbop dorilar HEALTH  dorixonalarida!</h1>
                  <div className={styles.MenuTextButtons}>
                <a className={styles.WhatchWriter}>
                  <a
                    className={styles.CardModalItemMe}
                    onClick={() => this.setState({smShow:true})}
                  >
                    Ma'lumot uchun
                  </a>

                  <Modal
                    className={styles.CardModalItem}
                    size="sm"
                    show={this.state.smShow}
                    onHide={() => this.setState({smShow:false})}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        Ma'lumot uchun!
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
                    <Modal.Footer
                      className={styles.CardFooterExitIcon}
                      onClick={() => this.showModalBot()}
                    >
                      <i class="fas fa-times"></i>
                    </Modal.Footer>
                  </Modal>
                </a>

                <a
                  className={styles.WhatchVideo}
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    style={{
                      fontSize: "27px",
                      color: "white",
                      marginLeft: "10%",
                    }}
                  >
                    <MdSlowMotionVideo />
                  </p>
                  <p
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    Videoni Ko'rish
                  </p>
                </a>
              </div>
              </Col>
              <Col lg={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img className={styles.headerImg} src={contact1}/>
              </Col>
          </Row>
          
        </Container>
      
        </div>
<div className={styles.cardApteka}>
<h1>Bizning Dorixonalarimiz</h1>

</div>
        
            </div>
        )
    }
}
