import React, { useState, useEffect, useRef } from "react";
import "./css/medicine.css";
import Medicine from "./Medicine";
import { dorilar } from "./../server";
import { BackTop, Row, Col } from "antd";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "./Header";
import { BsArrowUp } from "react-icons/bs";
import styles from "../../Component/Css/LandingPage.module.css";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

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
  const [value, setValue] = useState("");
  const [bool, setBool] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    setData(
      dorilar.sort((a, b) =>
        a.nomi.toLowerCase() > b.nomi.toLowerCase() ? 1 : -1
      )
    );
    setLoading(true);
  }, []);

  const handleInput = () => {
    let value = inputRef.current.value;
    setValue(value);
    let newData = dorilar.filter((item) =>
      item.nomi.toLowerCase().includes(value.toLowerCase())
    );
    if (newData.length > 0) {
      setData(
        newData.sort((a, b) =>
          a.nomi.toLowerCase() > b.nomi.toLowerCase() ? 1 : -1
        )
      );
      setBool(true);
    } else {
      setBool(false);
    }
  };

  return (
    <div className="medicines">
      {loading ? (
        <>
          <Header />
          <div className="margin_for"></div>
          <div className="dorilar_page">
            <div className="findout">
              <Container className="find_container">
                <Row>
                  <Col sm={24} lg={10} className="findout_col">
                    <div className="findout_item">
                      <div id="dorilar"></div>
                      <h1>
                        Brellaning qo'shimcha tibbiy sug'urtasi bilan
                        jamoangizga tinchlik bering.
                      </h1>
                      <p>Menga kerak...</p>
                      <InputGroup className="mb-3">
                        <FormControl
                          ref={inputRef}
                          onChange={handleInput}
                          placeholder="Dorini nomi..."
                          value={value}
                          aria-label="how Brella's plan workss"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                          Find out
                        </Button>
                      </InputGroup>
                    </div>
                  </Col>
                  <Col md={24} lg={14}></Col>
                </Row>
              </Container>
            </div>
            <div className="dorilar-page_bottom">
              <svg
                className={styles.Curved}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#FFFFFF"
                  fill-opacity="1"
                  d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,208C840,192,960,96,1080,80C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {bool ? (
            <span>
              {data.map((item) => (
                <Medicine key={item.id} data={item} />
              ))}
            </span>
          ) : (
            <h1 className="text-center py-5">
              Bunday nomdagi dori mavjud emas
            </h1>
          )}
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
