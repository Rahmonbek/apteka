import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Css/LandingPage.module.css";
import CardGroup from "./CardGroup";
import Doctor1 from "./img/Rectangle 10.png";
import Doctor2 from "./img/Rectangle 11.png";
import Doctor3 from "./img/Rectangle 8.png";
import Doctor4 from "./img/Rectangle 9.png";
import {
  EditOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import Menu from "./Menu";
const { Meta } = Card;

export default function LandingPage() {
  return (
    <div className={styles.BodyHeader}>
      <Menu />
      <Container>
        <section id="service"></section>
        <div className={styles.ServiceMenu}>
          <div className={styles.ServiceMenuText}>
            <p className={styles.ServiceMenuText1}>
              Bizning Eng Yaxshi Xizmatlarimiz
            </p>
            <p className={styles.ServiceMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.ServiceMenuCard}>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-ambulance fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Afzalliklar</p>
                  <p className={styles.CardTextSmall}>
                    Siz uyingizdan chiqmagan holda dori buyurtma berasiz va biz
                    yetkazib beramiz.
                  </p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-md fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Qulayliklari</p>
                  <p className={styles.CardTextSmall}>
                    Siz bizning Malakali doctorlarimizdan istalgan vaqt maslahat
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Yaxshi G'amxo'rlik</p>
                  <p className={styles.CardTextSmall}>
                    Agar sizning imkoniyatingiz cheklangan bo'lsa biz sizga
                    yordam beramiz.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-headset fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Favqulodda Yordam</p>
                  <p className={styles.CardTextSmall}>
                    Sizga Favqulodda tezkor yordam kerakmi, unda bizga murojaat
                    qiling.
                  </p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Ma'lumot uchun</p>
                  <p className={styles.CardTextSmall}>
                    Siz kerakli dorilaringiz haqida ba'tafsil shu yerda ma'lumot
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-clock fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>24 Soatlik Xizmat</p>
                  <p className={styles.CardTextSmall}>
                    Bizga sizga 24/7 xizmat ko'rsatamiz. Siz biz bilan xoxlagan
                    vaqtingiz bog'lanishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="List"></section>
        <div className={styles.ListMenu}>
          <div className={styles.ListMenuText}>
            <p className={styles.ListMenuText1}>
              Bizning ma'lakali Doctorlirimiz
            </p>
            <p className={styles.ListMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.ListMenuCard}>
            <Card
              className={styles.CardMenuList}
              hoverable
              cover={<img alt="example" src={Doctor1} />}
              actions={[
                <PhoneOutlined className={styles.CallMeCard} key="Phone" />,
                <EditOutlined key="edit" />,
                <YoutubeOutlined key="Youtube" />,

                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title="Rakshit Sannegowda
"
                description="2 -Toshkent tibbiyot institutining umumiy tibbiyot fakultetini tamomlagan. Toshkent tibbiyot akademiyasi  ilmiy darajasini oldi.
"
              />
            </Card>
            <Card
              className={styles.CardMenuList}
              hoverable
              cover={<img alt="example" src={Doctor2} />}
              actions={[
                <PhoneOutlined className={styles.CallMeCard} key="Phone" />,
                <EditOutlined key="edit" />,
                <YoutubeOutlined key="Youtube" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title="Azmiov Anvar Toirovich"
                description="2 -Toshkent tibbiyot institutining umumiy tibbiyot fakultetini tamomlagan. Toshkent tibbiyot akademiyasi  ilmiy darajasini oldi."
              />
            </Card>
            <Card
              className={styles.CardMenuList}
              hoverable
              cover={<img alt="example" src={Doctor3} />}
              actions={[
                <PhoneOutlined className={styles.CallMeCard} key="Phone" />,
                <EditOutlined key="edit" twoToneColor="#52c41a" />,
                <YoutubeOutlined key="Youtube" />,

                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title="Ахмедова Феруза Шорасуловна"
                description="Pediatriya mutaxassisligi bo'yicha SamPI bitiruvchisi. Amaliyot pediatriya bo'yicha TAPOiCHda bo'lib o'tdi."
              />
            </Card>
            <Card
              className={styles.CardMenuList}
              hoverable
              cover={<img alt="example" src={Doctor4} />}
              actions={[
                <PhoneOutlined className={styles.CallMeCard} key="Phone" />,
                <EditOutlined key="edit" twoToneColor="#52c41a" />,
                <YoutubeOutlined key="Youtube" />,

                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title="Аминов Санжар Абдуазимович
"
                description="2 -Toshkent tibbiyot institutining umumiy tibbiyot fakultetini tamomlagan. Toshkent tibbiyot akademiyasi  ilmiy darajasini oldi. 
"
              />
            </Card>
          </div>
        </div>
      </Container>
      <section id="medicine"></section>
      <div>
        <CardGroup />
      </div>
    </div>
  );
}
