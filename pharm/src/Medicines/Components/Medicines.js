import React, { useState, useEffect } from "react";
import Medicine from "./Medicine";
import { dorilar } from "./../server";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import styles from "./Css/LandingPage.module.css";
// import Rasm from "./img/Brand.png";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { MdTimer } from "react-icons/md";
// import { IoIosCall } from "react-icons/io";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsArrowRight } from "react-icons/bs";
// import { MdSlowMotionVideo } from "react-icons/md";
import Menu from "./../../Component/Menu";

function Medicines() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dorilar);
    setLoading(true);
  }, []);

  return (
    <div className="medicines">
      {loading ? (
        <>
          <>
            <Menu />
          </>
          {data.map((item, index) => (
            <Medicine key={index} data={item} />
          ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ClimbingBoxLoader color="#1BC41A" loading={!loading} size={50} />
        </div>
      )}
    </div>
  );
}

export default Medicines;
