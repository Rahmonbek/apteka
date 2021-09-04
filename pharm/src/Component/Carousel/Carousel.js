import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Css/SliderGroup.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import Slider from "./ImageSlider";
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
        <Slider />
      </Container>
    </div>
  );
}
