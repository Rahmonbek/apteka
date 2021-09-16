import React from "react";
import styles from "./Css/PragressGroup.module.css";
import { Container } from "react-bootstrap";
import Countup from "react-countup";
import AOS from "aos";

export default function PragressGroup() {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className={styles.containerMe}>
      <Container>
        <div data-aos="zoom-in" className={styles.CountUp}>
          <div className={styles.CountUp_item}>
            {" "}
            <Countup
              className={styles.CountUp_itemGroup}
              end={500}
              duration={5}
              speed={5000}
            />
            <p>Mavjud Dorilar</p>
          </div>

          <div className={styles.CountUp_item}>
            {" "}
            <Countup
              className={styles.CountUp_itemGroup}
              start={500}
              end={1500}
              duration={5}
            />
            <p> Kunlik mijozlar</p>
          </div>

          <div className={styles.CountUp_item}>
            {" "}
            <Countup
              className={styles.CountUp_itemGroup}
              end={200}
              duration={4}
            />
            <p>Bizning Hamkorlar</p>
          </div>

          <div className={styles.CountUp_item}>
            <Countup
              className={styles.CountUp_itemGroup}
              end={15}
              duration={3}
            />

            <p>Bizning Filallarimiz</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
