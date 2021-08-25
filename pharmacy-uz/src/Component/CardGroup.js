import React from "react";
import styles from "./Css/Cardgroup.module.css";
import { Container } from "react-bootstrap";

const CardInfo = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg",
    title: "Hello",
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
  {
    id: 8,
    img: "https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg",
    title: "Hello",
  },
];

export default function CardGroup() {
  return (
    <div>
      {" "}
      <div className={styles.MedicineMenu}>
        <Container>
          <div className={styles.MedicineMenuText}>
            <p className={styles.MedicineMenuText1}>Sifatli Dorilar Ruyhati</p>
            <p className={styles.MedicineMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.MedicineMenuCard}>
            <div className={styles.MedicineMenuCardGroup}>
              <div className={styles.CardMedicine}>
                <p>Ingalatsiya uchun narkoz vositalari</p>
                <p>
                  Izofluran, Galotan <br /> Sevofluran
                </p>
                <p>ingalatsiya uchun eritma 100 ml; 250 ml</p>
              </div>

              <div className={styles.CardMedicine1}>
                <p>Tutqanoqga qarshi vositalar</p>
                <p>
                  Fenobarbital, Karbamazepin <br /> Benzobarbital
                </p>
                <p>Kukun, ichish uchun tomchilar 300 mg/ml</p>
              </div>

              <div className={styles.CardMedicine2}>
                <p>Neyroleptik vositalar</p>
                <p>
                  Levomepromazin, Droperidol <br /> Trifluoperazin
                </p>
                <p>
                  inyeksiya uchun eritma 5 mg/ml inyeksiya uchun moyli eritma 50
                  mg/ml
                </p>
              </div>
              <div className={styles.CardMedicine3}>
                <p>Trankvilizatorlar</p>
                <p>
                  Alprazolam, Tofizopam <br /> Fenazepam
                </p>
                <p>
                  tabletkalar 5 mg inyeksiya uchun eritma 5 mg/ml 2 ml; 10
                  mg/2ml.
                </p>
              </div>
            </div>{" "}
            <div className={styles.MedicineMenuCardGroup}>
              <div className={styles.CardMedicine}>
                <p>Antidepressantlar</p>
                <p>
                  Venlafaksin, Fluvoksamin <br /> Mirtazapin
                </p>
                <p>ingalatsiya uchun eritma 100 ml; 250 ml</p>
              </div>
              <div className={styles.CardMedicine1}>
                <p>Psixostimulyatorlar</p>
                <p>
                  Kofein-natriy benzoat , Karbamazepin <br /> Sitokolin
                </p>
                <p>Kukun, ichish uchun tomchilar 300 mg/ml</p>
              </div>
              <div className={styles.CardMedicine2}>
                <p>Parkinsonizmga qarshi vositalar</p>
                <p>
                  Trigeksifenidil, Amantadin
                  <br /> karbidopa
                </p>
                <p>
                  Tabletkalar 100 mg, Kukun, ichish uchun tomchilar 300 mg/ml
                </p>
              </div>
              <div className={styles.CardMedicine3}>
                <p>Nonarkotik analgetiklar</p>
                <p>
                  Paratsetamol, Metamizol natriy
                  <br /> Benzobarbital
                </p>
                <p>
                  Tabletkalar 100 mg, Kukun, ichish uchun tomchilar 300 mg/ml
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
