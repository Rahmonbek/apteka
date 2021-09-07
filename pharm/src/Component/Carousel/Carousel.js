import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Css/SliderGroup.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import Slider from "./ImageGroup/ImageSlider";
import Slider1 from "./ImageGroup/ImageSlider1";
import Slider2 from "./ImageGroup/ImageSlider2";
export default function ImageSlider() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className={styles.SliderMenu}>
      <Container>
        <div className={styles.SliderMenuText}>
          <p className={styles.SliderMenuText1}>
            Eng Yaxshi Dorixonalar Ruyhati
          </p>
          <p className={styles.SliderMenuText2}>
            Semper integer est quis leo, nunc. Quis lectus amet aenean massa
            turpis senectus pulvinar. Pharetra gravida volutpat faucibus
            faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
            Pharetra gravida volutpat faucibus faucibus.
          </p>
        </div>
        <div className={styles.SliderContainer}>
          {" "}
          <Slider />
        </div>
        <div className={styles.SliderContainer1}>
          {" "}
          <Slider1 />
        </div>
        <div className={styles.SliderContainer2}>
          {" "}
          <Slider2 />
        </div>
      </Container>
    </div>
  );
}
