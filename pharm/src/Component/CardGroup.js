import React from "react";
import styles from "./Css/Cardgroup.module.css";
import { Container, Image } from "react-bootstrap";
import AOS from "aos";
import Rasm1 from "./img/AA1.png";
import Rasm2 from "./img/AA2.jpg";
import Rasm3 from "./img/AA3.jpg";
import Rasm4 from "./img/Drug1.jpg";
import Rasm5 from "./img/AA5.png";
import Rasm6 from "./img/Drug5.jpg";
import Rasm7 from "./img/Drug8.jpg";
import Rasm8 from "./img/Drug2.jpg";
import Rasm9 from "./img/Drug3.jpg";
import Rasm10 from "./img/Drug4.jpg";

export default function CardGroup1() {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className={styles.CardGroupMenu}>
      <Container>
        <div className={styles.CardGroupMenuText}>
          <p className={styles.CardGroupMenuText1}>
            Bizning Eng Yaxshi Dorilarimiz
          </p>
          <p className={styles.CardGroupMenuText2}>
            Semper integer est quis leo, nunc. Quis lectus amet aenean massa
            turpis senectus pulvinar. Pharetra gravida volutpat faucibus
            faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
            Pharetra gravida volutpat faucibus faucibus.
          </p>
        </div>
        <div className={styles.flex_container}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm1} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm2} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm3} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm4} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm5} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm6} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm7} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm8} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm9} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.flex_item}
          >
            <Image id={styles.flex_img} src={Rasm10} className="img-fluid" />
            <div>
              {" "}
              <a href="#">
                <p class="fas fa-plus"></p>
                <p>Ma'lumot uchun</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
