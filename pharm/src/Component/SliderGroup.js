import React from "react";
import ImageSlider from "./Carousel/Carousel";
import { Container } from "react-bootstrap";
import styles from "./Css/SliderGroup.module.css";
export default function SliderGroup() {
  return (
    <>
      <div className={styles.SliderContainer}>
        <Container>
          <div className="">
            <h1 className={styles.slider_title}>React Image Carousel</h1>
            <ImageSlider />
          </div>
        </Container>
      </div>
    </>
  );
}
