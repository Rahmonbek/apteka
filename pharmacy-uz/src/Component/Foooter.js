import React, { Component } from "react";
import style from "./Css/Footer.module.css";
import dori from "./img/dori.jpg";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import logo from "./img/dori1.jpg";
import Fab from "./img/Fabric1.jpg";
import Brand from "./img/Brand.png";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri";

import {
  PhoneFilled,
  MailFilled,
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
export default class Obuna extends Component {
  render() {
    return (
      <div>
        <section id="Testimonials"></section>
        <div className={style.menu}>
          <Container>
            <Row className={style.row}>
              <Col className={style.col}>
                <div className={style.plus}>500+</div>
                <div className={style.homiy}>Homiylar</div>
              </Col>
              <Col className={style.col}>
                <div className={style.plus}>1500+</div>
                <div className={style.homiy}>Obunachilar</div>
              </Col>
              <Col className={style.col}>
                <div className={style.plus}>200+</div>
                <div className={style.homiy}>Xodimlar</div>
              </Col>
              <Col className={style.col}>
                <div className={style.plus}>15+</div>
                <div className={style.homiy}>Filyallar</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.menu2}>
          <h1>Ishlab chiqarish jarayoni</h1>
          <p className={style.izoh}>
            Bizda dori-darmonlar yuqori saviyada, chet el inavatsiyon
            texnolofiyalari asoslarida ishlab chiqariladi.
          </p>
          <Container className={style.matn}>
            <div className={style.Rasm}>
              <img src={Fab} alt="dori fabrikasi" />
            </div>
            <div className={style.CommentMe}>
              <Timeline>
                <Timeline.Item color="red">
                  <p>Chet el talablariga javob beradigan tarkib</p>
                  <p>Bizda samarali ishlab chiqarish </p>
                  <p>Ko`p yillik tajriba 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                  <p>Maxsulotni yaxshi saqlash</p>
                  <p>yaroqlilik muddatini muttasil ko`rib borish</p>
                  <p>Kafolatni taminlash </p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Ishonchi maslahatlar</p>
                  <p>Mijoz bilan kirishish qobiliyati</p>
                  <p>Kamchiliksiz ishlash</p>
                </Timeline.Item>
                <Timeline.Item color="gray" variant="saccess">
                  <p>Tez va samarali yetkazib berish</p>
                  <p>Maxsulot saqlash sharoitini tushuntrish </p>
                  <p>Maxsulotni ishlatish yoriqnomasi</p>
                </Timeline.Item>
              </Timeline>
            </div>
          </Container>
        </div>
        <div className={style.FooterMenu}>
          <Container>
            <section id="blog"></section>
            <div className={style.FooterMenuMe}>
              <div className={style.FooterMenuGroup1}>
                <img id={style.FooterBrand} src={Brand} />
                <p>
                  Manzil: Toshkent shahar, Yakkasaroy tumani, Qarotash Mavzuse,
                  ikkinchi tor kucha 45-uy{" "}
                </p>
                <p>
                  <i>
                    <MdCall />
                  </i>
                  +998(71)777-77-77
                </p>
                <p>
                  <i>
                    <HiOutlineMail />
                  </i>
                  pharmacyuzb@gmail.com
                </p>
              </div>
              <div className={style.FooterMenuGroup2}>
                <p>
                  <b>Yetkazish</b>
                </p>
                <p>
                  <a href="#href">Xavfsiz</a>
                </p>
                <p>
                  <a href="#href">Ishonchli</a>
                </p>
                <p>
                  <a href="#href">Samarali</a>
                </p>
                <p>
                  <a href="#href">Tez va qulay vaqtda</a>
                </p>
              </div>
              <div className={style.FooterMenuGroup3}>
                <p>
                  <b>Menu</b>
                </p>
                <p>
                  <a href="#href">Xizmat ko`rsatish</a>
                </p>
                <p>
                  <a href="#href">Ruyxat</a>
                </p>
                <p>
                  <a href="#href">Jadval</a>
                </p>
                <p>
                  <a href="#href">Testimonials</a>
                </p>
                <p>
                  <a href="#href">Blog</a>
                </p>
              </div>
              <div className={style.FooterMenuGroup4}>
                <p>
                  <b>Bog'lanish</b>
                </p>
                <p>
                  <a href="#href">Press</a>
                </p>
                <p>
                  <a href="#href">Yordam</a>
                </p>
                <p className={style.IconsFooterGroup}>
                  <p>
                    <AiOutlineTwitter className={style.IconsFooter} />
                  </p>
                  <p>
                    {" "}
                    <FiFacebook className={style.IconsFooter} />
                  </p>{" "}
                  <p>
                    <AiOutlineInstagram className={style.IconsFooter} />
                  </p>
                  <p>
                    <FiLinkedin className={style.IconsFooter} />
                  </p>
                </p>
              </div>
            </div>
            <hr className={style.Footerhr} />
            <div>
              <p className={style.Copyright}>
                {" "}
                <RiCopyrightLine style={{ marginRight: "10px" }} />
                Copyright 2021 The LOGO All Rights Reserved.
              </p>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
