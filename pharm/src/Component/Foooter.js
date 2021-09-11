import React, { Component } from "react";
import style from "./Css/Footer.module.css";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Brand from "./img/Brand.png";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri";

export default class Obuna extends Component {
  render() {
    return (
      <>
        <div className={style.FooterMenu}>
          <Container>
            <section id="blog"></section>
            <div className={style.FooterMenuMe}>
              <div className={style.FooterMenuGroup1}>
                <Image id={style.FooterBrand} src={Brand} />
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
                By It-Tower tamonidan tayyorlangan mahsulot
              </p>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
