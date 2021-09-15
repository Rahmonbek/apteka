import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Css/LandingPage.module.css";
import Carousell from "./Carousel/CarouselSlider";
import CardGroup from "./CardTeen/CardGroup";
import ServiceShow from "./Service/ServiceShow";
import AOS from "aos";
import Menu from "./Menu";
import PragressGroup from "./PragressGroup";
import Events from "./Events";
import Partner from "./Partner";
export default function LandingPage() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className={styles.BodyHeader}>
      <Menu />
      <Container>
        <section id="service"></section>
        <div>
          <ServiceShow />
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
      <div>
        <PragressGroup />
      </div>
      <div>
        <Partner />
      </div>

      <div>
        <Events />
      </div>
    </div>
  );
}
