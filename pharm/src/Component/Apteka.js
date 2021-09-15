import React, { Component } from 'react'
import '../App.css'
import styles from './Css/Apteka.module.css'
import { Container, Row, Col,Navbar,Nav, Image, Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MdSlowMotionVideo, MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import contact1 from './img/apteka1.jpg';
import Rasm from "./img/Brand.png";
import apteka1 from "./img/slider1.jpg"
import apteka2 from "./img/slider2.jpg"
import apteka3 from "./img/slider3.jpg"
import apteka4 from "./img/slider4.jpg"
import apteka5 from "./img/slider5.jpg"
import apteka6 from "./img/slider6.jpg"

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';
import clsx from 'clsx';


import Aos from 'aos';
import 'aos/dist/aos.css';

export default class Apteka extends Component {
    state={
        smShow:false,
        expanded:[]
    }
   
    componentDidMount(){
      Aos.init({
        duration:2000
    
      });

    this.setState({expanded:[false, false, false]});

   
    }

     showModalBot = () => {
      this.setState({
          smShow:false
      })
     }
     
    handleExpandClick = (id) => {
      var a=this.state.expanded
      a[id]=!a[id]
   
      this.setState({expanded:a})
    };
    
    handleJustifyClick = (value) => {
      if (value === this.state.justifyActive) {
        return;
      }
  
      this.setState({justifyActive:value});
    };

    render() {
        return (
            <div>
                           <div className={styles.HeaderMenu} style={{width:'100%'}}>
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
                        <p>Bosh sahifa</p>
                      </Nav.Link>

                      <Nav.Link href="/Doctors">
                        <p>Doctors</p>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/dorilar">
                          {" "}
                          <p>Dorilar</p>
                        </Link>
                      </Nav.Link>

                      <Nav.Link href="/Contact">
                        <p>Kantakt</p>
                      </Nav.Link>
                      <Nav.Link href="/apteka">
                        <p>Dorixonalar</p>
                      </Nav.Link>
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div> 
          <Row>
              <Col lg={6}>
                  <h1 className={styles.headertext}>Eng sifatli xizmat va dorilar HEALTH  dorixonalarida!</h1>
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
                      
                    >
                      <i class="fas fa-times" onClick={() => this.showModalBot()}></i>
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


        {/* ------------------------- Card Section ---------------- */}

        
<div className={styles.cardApteka}>
<h1 style={{margin:'50px 0px 60px 0px'}} data-aos="zoom-in-up">Bizning Dorixonalarimiz</h1>
<Container>
  <Row >
  <Col lg={6} md={6} sm={12}>
      <Row>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka1}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[0],
                  })}
                  onClick={()=>{this.handleExpandClick(0)}}
                  aria-expanded={this.state.expanded[0]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[0]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka1}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[1],
                  })}
                  onClick={()=>{this.handleExpandClick(1)}}
                  aria-expanded={this.state.expanded[1]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[1]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
      </Row>
    </Col>
    <Col lg={6} md={6} sm={12}>
      <Row>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka2}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[2],
                  })}
                  onClick={()=>{this.handleExpandClick(2)}}
                  aria-expanded={this.state.expanded[2]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[2]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'0px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka2}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[3],
                  })}
                  onClick={()=>{this.handleExpandClick(3)}}
                  aria-expanded={this.state.expanded[3]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[3]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
      </Row>
    </Col>
    <Col lg={6} md={6} sm={12}>
      <Row>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka3}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[4],
                  })}
                  onClick={()=>{this.handleExpandClick(4)}}
                  aria-expanded={this.state.expanded[4]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[4]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka3}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[5],
                  })}
                  onClick={()=>{this.handleExpandClick(5)}}
                  aria-expanded={this.state.expanded[5]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[5]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
      </Row>
    </Col>  
    <Col lg={6} md={6} sm={12}>
      <Row>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka4}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[6],
                  })}
                  onClick={()=>{this.handleExpandClick(6)}}
                  aria-expanded={this.state.expanded[6]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[6]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </Col>
        <Col lg={12} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <Card className={styles.root} style={{margin:'auto', marginBottom:'40px'}} data-aos="zoom-in-up">
              <CardHeader 
                // avatar={
                //   <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}} variant='square'>
                //     <img src={Rasm} style={{width:'30px', height:'30px', backgroundColor:'#1B4976'}}/>
                //   </Avatar>
                // }
                
               
                title="The name of pharm"
                
              
              />
              <CardMedia
                className={styles.media}
                image={apteka4}
                title="the name of pharmy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore saepe animi tenetur perferendis repudiandae dolor nobis maiores veritatis, exercitationem consequuntur nam minima tempora rerum alias asperiores eius. Earum, natus!
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
     <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>YouTube</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='https://www.youtube.com'>
                  <IconButton >
                  <YouTubeIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Dorixona haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[7],
                  })}
                  onClick={()=>{this.handleExpandClick(7)}}
                  aria-expanded={this.state.expanded[7]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[7]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
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
