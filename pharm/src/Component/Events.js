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
                  <i class="fas fa-check"></i>

                  <i>
                    Bizning ish foaliyatimiz 1995-yil, 2-Yanvardan buyon 24/7 da
                    ishlaydi.
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>

                  <i>
                    Bizning Mahsulotlarimiz Jahon standartlari asosida ishlab
                    chiqariladi.
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>

                  <i>
                    Hamkorlarimiz va Mijozlarimizning Fikri va istagi biz uchun
                    juda muhim.
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>

                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>

                  <i>
                    Mijozlar istagidan inobatga olib, yetkazib berish xizmatini
                    yo'lga qo'ydik.
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>

                  <i>
                    Biz mijozlar uchun chegirmalar mavsumini ham yo'lga
                    qo'ganmiz
                  </i>
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
                <li>
                  <i class="fas fa-check-double"></i>
                  <i class="fas fa-check"></i>
                  <i>
                    Hozirgi kunda shahar bo'ylab 10 ga yaqin filiallarimiz bor.
                  </i>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
