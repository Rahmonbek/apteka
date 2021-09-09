import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";
import TinySlider from "tiny-slider-react";
import "./css/infoMedicine.css";
import { dorilar } from "./../server";
import { connect } from "react-redux";

function InfoMedicine(props) {
  let id = JSON.parse(localStorage.getItem("id"));
  const data = dorilar.find((item) => item.id === id);

  console.log(props.app);

  const onRemove = () => {
    localStorage.removeItem("id");
  };
  const settings = {
    duration: 1,
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 1,
    controls: false,
    responsive: {
      900: {
        items: 3,
      },
    },
    autoplay: true,
    speed: "100",
    item: 1,
    autoplayHoverPause: true,
  };
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const loadingImage =
    "data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  return (
    <div className="infoMedicine">
      <div className="contenat_inf">
        <div className="info_button">
          <Button onClick={onRemove} variant="primary">
            <Link to="./dorilar">Qaytish</Link>
          </Button>
        </div>
        <div className="info_container">
          <h1>{data.nomi}</h1>
          <h5>
            <Container>{data.title}</Container>
          </h5>
          <div className="silder">
            <Container>
              <div style={styles}>
                <TinySlider
                  settings={settings}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data.image.map((item, index) => (
                    <div key={index}>
                      <Image
                        className={`tns-lazy-img`}
                        src={loadingImage}
                        data-src={item}
                        style={{ width: "90%", height: "90%" }}
                      />
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Container>
          </div>
          <div className="list_info">
            <Container>
              <ul className="newspaper">
                <li>
                  <h4>{data.qollash.savdonomi[0]}</h4>
                  <p>{data.qollash.savdonomi[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.dorishakli[0]}</h4>
                  <p>{data.qollash.dorishakli[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.tarkibi[0]}</h4>
                  <p>{data.qollash.tarkibi[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.fguruhi[0]}</h4>
                  <p>{data.qollash.fguruhi[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.fxurusyat[0]}</h4>
                  <p>{data.qollash.fxurusyat[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.qollanishi[0]}</h4>
                  <p>{data.qollash.qollanishi[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.qollashusuli[0]}</h4>
                  <p>{data.qollash.qollashusuli[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.notasiri[0]}</h4>
                  <p>{data.qollash.notasiri[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.noqollash[0]}</h4>
                  <p>{data.qollash.noqollash[1]}</p>
                </li>
                <li>
                  <h4>{data.qollash.maxsuskorsatma[0]}</h4>
                  <p>{data.qollash.maxsuskorsatma[1]}</p>
                </li>
              </ul>
            </Container>
          </div>

          <div className="bg-white">
            <Container>
              <Row className="info_row_video">
                <Col sm={12} lg={6}>
                  {" "}
                  <ReactPlayer
                    className="react-player"
                    url={data.videos[0]}
                    width="100%"
                    height="100%"
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <ReactPlayer
                    className="react-player"
                    url={data.videos[1]}
                    width="100%"
                    height="100%"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => {
  return state;
};

export default connect(mapState)(InfoMedicine);
