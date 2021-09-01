import React from "react";
import styles from "../Css/Cardgroup.module.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Pagination from "./CardGroup/Pagination_1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rasm1 from "../img/MediciniPng/A13.png";
import Rasm2 from "../img/MediciniPng/A12.png";
import Rasm3 from "../img/MediciniPng/A10.png";
import Rasm4 from "../img/MediciniPng/A3.png";
import Rasm5 from "../img/MediciniPng/A17.png";
import Rasm6 from "../img/MediciniPng/A16.png";
import Rasm7 from "../img/MediciniPng/A21.png";
import Rasm8 from "../img/MediciniPng/A19.png";
import Rasm9 from "../img/MediciniPng/A8.png";
import Rasm10 from "../img/MediciniPng/A3.png";
import Rasm11 from "../img/MediciniPng/A6.png";
import Rasm12 from "../img/MediciniPng/A20.png";
import AOS from "aos";

import {
  faHeadset,
  faBook,
  faCocktail,
  faFax,
  faHospital,
  faMedkit,
  faPlus,
  faToilet,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
export default function ServiceShow() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      img: Rasm1,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Gripgo",
    },
    {
      userId: 1,
      id: 2,
      img: Rasm2,
      icon: <FontAwesomeIcon icon={faFlask} />,
      title: "Alsetro",
    },
    {
      userId: 1,
      id: 3,
      img: Rasm3,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Futsis",
    },
    {
      userId: 1,
      id: 4,
      img: Rasm4,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Levonic",
    },
    {
      userId: 1,
      id: 5,
      img: Rasm5,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Rubufin",
    },
    {
      userId: 1,
      id: 6,
      img: Rasm6,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Pentalgin",
    },
    {
      userId: 1,
      id: 7,
      img: Rasm7,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Rotalfen",
    },
    {
      userId: 1,
      id: 8,
      img: Rasm8,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Ketaneym",
    },
    {
      userId: 1,
      id: 9,
      img: Rasm9,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "FosFogliv",
    },
    {
      userId: 1,
      id: 10,
      img: Rasm10,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Levonic",
    },
    {
      userId: 1,
      id: 11,
      img: Rasm11,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Dermazol",
    },
    {
      userId: 1,
      id: 12,
      img: Rasm12,
      icon: <FontAwesomeIcon icon={faFlask} />,

      title: "Sertofen",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(8);
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
    <div className={styles.CardGroupMenu}>
      <Container>
        <div>
          <div className={styles.CardGroupMenuText}>
            <p className={styles.CardGroupMenuText1}>
              Bizning Eng Yaxshi Dorilarimiz
            </p>
            <p className={styles.CardGroupMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.flex_container}>
            {posts.slice(pagination.start, pagination.end).map((post) => (
              <div className={styles.flex_item} key={post.id}>
                <img src={post.img} alt="" className="img-fluid" />
                <div className={styles.flex_title_item}>
                  <p>
                    <i
                      style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginTop: "7%",
                      }}
                    >
                      {post.icon}
                    </i>
                    <i
                      style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginTop: "7%",
                      }}
                    >
                      {post.title}
                    </i>
                  </p>
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
