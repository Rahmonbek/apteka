import React from "react";
import styles from "../Css/ServiceShow.module.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Pagination from "./ServiceGroup.js/Pagination_1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";

import {
  faHeadset,
  faBook,
  faCocktail,
  faFax,
  faHospital,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";
export default function ServiceShow() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      icon: <FontAwesomeIcon icon={faHospital} />,
      title: "Afzalliklari",
      body: "Siz uyingizdan chiqamagan holda dori buyurtma berasiz. Biz yetkazib beramiz",
    },
    {
      userId: 1,
      id: 2,
      icon: <FontAwesomeIcon icon={faFax} />,
      title: "Qulayliklar",
      body: "Siz bizning malakali Doctorlarimizdan istalgan vaqtda, maslahat olishingiz mumkin.",
    },
    {
      userId: 1,
      id: 3,
      icon: <FontAwesomeIcon icon={faCocktail} />,

      title: "Yaxshi G'amxurlik",
      body: "Agar sizning imkoniyatingiz cheklangan bo'lsa, biz sizga yordam beramiz.",
    },
    {
      userId: 1,
      id: 4,
      icon: <FontAwesomeIcon icon={faHeadset} />,

      title: "Favqulodda Yordam",
      body: "Sizga Favqulodda tezkor yordam kerakmi, unda bizga murojaat qiling.",
    },
    {
      userId: 1,
      id: 5,
      icon: <FontAwesomeIcon icon={faBook} />,

      title: "Ma'lumot Uchun",
      body: "Sizga kerakli dorilaringiz xaqida  shu yerda ba'tafsil shu yerda ma'lumot olishingiz mumkin.",
    },
    {
      userId: 1,
      id: 6,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 7,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 8,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 9,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 10,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 11,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 12,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 13,
      icon: <FontAwesomeIcon icon={faHospital} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 14,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 15,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 16,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 17,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 18,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 19,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 20,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 21,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 22,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 23,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
    {
      userId: 1,
      id: 24,
      icon: <FontAwesomeIcon icon={faMedkit} />,

      title: "24 Soatlik Xizmat ",
      body: "Biz mijozlarga 24/7 xizmat ko'rsatamiz. Siz bizga isqalgan vaqtda murojaat qilishingiz mumkin.",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  AOS.init({
    duration: 2000,
  });
  return (
    <div className={styles.Service}>
      <Container>
        <div>
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
          <div className={styles.ServiceMenu}>
            {posts.slice(pagination.start, pagination.end).map((post) => (
              <div
                data-aos="zoom-in-up"
                className={styles.ServiceMenuCard}
                key={post.id}
              >
                <div className={styles.CardIcons}>
                  <i>{post.icon}</i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>{post.title}</p>
                  <p className={styles.CardTextSmall}>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={posts.length}
          />
        </div>
      </Container>
    </div>
  );
}
