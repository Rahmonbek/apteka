import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Css/Partner.module.css";
import styles from "./Css/Cardgroup.module.css";
import Rasm1 from "./img/Homiy9.png";
import Rasm2 from "./img/Homiy7.png";
import Rasm3 from "./img/Homiy6.png";
import Rasm4 from "./img/Homiy8.png";
import Rasm5 from "./img/Homiy5.png";
import Rasm6 from "./img/Homiy10.png";
import AOS from "aos";
import { Container } from "react-bootstrap";

export default function Partner() {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  AOS.init({
    duration: 1000,
  });
  return (
    <div>
      <div className={style.TextPartner}>
        <Container>
          {/* Buning style Cardgroup.module.css da yozilgan  */}
          <div className={styles.CardGroupMenuText}>
            <p style={{ color: "black" }} className={styles.CardGroupMenuText1}>
              Bizning Hamkorlarimiz!
            </p>
            <p style={{ color: "black" }} className={styles.CardGroupMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
        </Container>
      </div>
      <div data-aos="zoom-in" className={style.sliderHomiy}>
        <Carousel
          responsive={responsive2}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          infinite={true}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://president.uz/oz" target="_blank">
                <img src={Rasm1} title="grayscale" />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://www.gov.uz/uz" target="_blank">
                <img src={Rasm6} />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://lex.uz/" target="_blank">
                <img src={Rasm2} />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://my.gov.uz/oz" target="_blank">
                <img src={Rasm3} />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://www.uzedu.uz/" target="_blank">
                <img src={Rasm4} />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alingItems: "center",
            }}
          >
            <div className={style.toolpat} style={{ backgroundColor: "white" }}>
              <a href="https://ittower.uz/" target="_blank">
                <img src={Rasm5} />
              </a>
            </div>
            <p>O'zbekiston Respublikasi dori bilan taminlash vazirligi</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
