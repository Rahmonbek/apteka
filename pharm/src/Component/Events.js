import React from "react";
import styles from "./Css/Events.module.css";
import { Container, Image } from "react-bootstrap";
import Rasm from "./img/about.jpg";
import AOS from "aos";

export default function Events() {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className={styles.Events}>
      <Container>
        <div className={styles.EventsMenu}>
          <div className={styles.EventsMenuText}>
            <p className={styles.EventsMenuText1}>
              Bizning Tariximiz va Afzalliklarimiz
            </p>
            <p className={styles.EventsMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.EventsMenuItem}>
            <div data-aos="fade-right" className={styles.EventsMenuItemImg}>
              <Image src={Rasm} className="img-fluid" />
            </div>
            <div className={styles.EventsMenuItemText}>
              <ul>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Bizning ish foaliyatimiz 1995-yil dan beri.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Bizning hozirgi kunda dorilarimiz juda sifatli.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hamkorlarimiz va Mijozlarimiz fikri biz uchun muhim.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Online dori zakaz qilsangiz yetkazib berish xizmati.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i>Hozirgi kunda 100 ga yaqin Filallarimiz bor.</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
