import React, { useState, useEffect } from "react";
import "./css/medicine.css";
import Medicine from "./Medicine";
import { dorilar } from "./../server";
import { BackTop } from "antd";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "./Header";
import { BsArrowUp } from "react-icons/bs";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: "50%",
  backgroundColor: "#1088e9",
  textAlign: "center",
  boder: "#fff",
};

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
          <Header />

          <span id="dorilar">
            {data.map((item) => (
              <Medicine key={item.id} data={item} />
            ))}
          </span>
          <BackTop>
            <div style={style}>
              <h4>
                <BsArrowUp style={{ color: "#fff" }} />
              </h4>
            </div>
          </BackTop>
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
