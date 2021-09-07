import React, { Component } from "react";
import style from "../Component/Css/FooterA.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import PragressGroup from "./PragressGroup";
import Events from "./Events";
import logo from "./img/Brand.png";
import {
  PhoneFilled,
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
export default class FooterA extends Component {
  render() {
    return (
      <div>
        <section id="Testimonials"></section>
        <PragressGroup />
        <section id="event"></section>
        <Events />

        <div className={style.footer}>
          <div className={style.block1}>
            <img alt="logo" style={{ opacity: "0.6" }} src={logo} />
            <h3 style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              Manzil: Toshkent shahar Yakkasaroy tumani mahalla idorasi ikkinchi
              qavat{" "}
            </h3>
            <a href="#2" className={style.aloqa3}>
              <PhoneFilled className={style.icons} />
              <span style={{ paddingLeft: "10px" }}>+998(94)-000-00-00</span>
            </a>
            <a href="#3" className={style.aloqa3}>
              <MailOutlined className={style.icons} />
              <span style={{ paddingLeft: "10px" }}>uzApteka@mail.ru</span>
            </a>
          </div>
          <div className={style.block}>
            <h5 className={style.aloqa1}>Yetkazish</h5>
            <p className={style.aloqa}>Xavfsiz</p>
            <p className={style.aloqa}>Ishonchli</p>
            <p className={style.aloqa}>Samarali</p>
            <p className={style.aloqa}>Tez va qulay vaqtda</p>
          </div>
          <div className={style.block}>
            <h5 className={style.aloqa1}>Menu</h5>
            <p className={style.aloqa}>Xizmat ko`rsatish</p>
            <p className={style.aloqa}>Yaroqli maxsulot bilan taminlash</p>
            <p className={style.aloqa}>Shaxsiy maslahatlar</p>
            <p className={style.aloqa}>Qo`shimcha yoriqnoma</p>
          </div>

          <div className={style.block}>
            <h5 className={style.aloqa1}>Bog`lanish</h5>
            <p className={style.aloqa}>Press</p>
            <p className={style.aloqa}>Yordam</p>
            <div className={style.boglash}>
              <InstagramOutlined className={style.icbog} />
              <FacebookOutlined className={style.icbog} />
              <MailOutlined className={style.icbog} />
              <TwitterOutlined className={style.icbog} />
              <YoutubeOutlined
                className={style.icbog}
                style={{ margin: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
