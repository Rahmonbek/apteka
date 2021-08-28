import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Css/LandingPage.module.css";
import CardGroup from "./CardGroup";
import Carousell from "./Carousel/Carousel";
import Doctor1 from "./img/Rectangle 10.png";
import Doctor2 from "./img/Rectangle 11.png";
import Doctor3 from "./img/Rectangle 8.png";
import Doctor4 from "./img/Rectangle 9.png";
import {
  EditOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import AOS from "aos";

import { Card } from "antd";
import Menu from "./Menu";
const { Meta } = Card;

export default function LandingPage() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className={styles.BodyHeader}>
      <Menu />
      <Container>
        <section id="service"></section>
        <div className={styles.ServiceMenu}>
          <div className={styles.ServiceMenuText}>
            <p className={styles.ServiceMenuText1}>
              Bizning Eng Yaxshi Xizmatlarimiz
            </p>
            <p className={styles.ServiceMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.ServiceMenuCard}>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-ambulance fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Afzalliklar</p>
                  <p className={styles.CardTextSmall}>
                    Siz uyingizdan chiqmagan holda dori buyurtma berasiz va biz
                    yetkazib beramiz.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-md fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Qulayliklari</p>
                  <p className={styles.CardTextSmall}>
                    Siz bizning Malakali doctorlarimizdan istalgan vaqt maslahat
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Yaxshi G'amxo'rlik</p>
                  <p className={styles.CardTextSmall}>
                    Agar sizning imkoniyatingiz cheklangan bo'lsa biz sizga
                    yordam beramiz.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div
                data-aos="fade-up"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-headset fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Favqulodda Yordam</p>
                  <p className={styles.CardTextSmall}>
                    Sizga Favqulodda tezkor yordam kerakmi, unda bizga murojaat
                    qiling.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Ma'lumot uchun</p>
                  <p className={styles.CardTextSmall}>
                    Siz kerakli dorilaringiz haqida ba'tafsil shu yerda ma'lumot
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-clock fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>24 Soatlik Xizmat</p>
                  <p className={styles.CardTextSmall}>
                    Bizga sizga 24/7 xizmat ko'rsatamiz. Siz biz bilan xoxlagan
                    vaqtingiz bog'lanishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="List"></section>
        <div>
          <Carousell />
        </div>
      </Container>
      <section id="medicine"></section>
      <div>
        <CardGroup />
      </div>
    </div>
  );
}
