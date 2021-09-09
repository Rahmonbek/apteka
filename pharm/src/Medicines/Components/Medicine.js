import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { Zoom, Fade } from "react-reveal";
import ReactPlayer from "react-player/youtube";
import { changeInfo } from "./../Redux/Actions/infoAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Medicine(props) {
  const { data, changeInfo } = props;

  return (
    <Fade up duration={1000}>
      <Container>
        <div className="medicine">
          <Row>
            <Col sm={6} lg={4}>
              <div>
                <Zoom left duration={1500} delay={1000}>
                  <Image width="100%" height="100%" src={data.url} />
                </Zoom>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div>
                <h1>{data.nomi}</h1>
                <Zoom top cascade duration={1500} delay={100}>
                  {data.title}{" "}
                </Zoom>
              </div>
            </Col>
            <Col sm={12} lg={4}>
              <div className="player-wrapper">
                <Zoom right duration={1500} delay={1000}>
                  <ReactPlayer
                    className="react-player"
                    url={data.video}
                    width="100%"
                    height="100%"
                  />
                </Zoom>
              </div>
            </Col>
          </Row>
          <div className="madicine_button">
            <Button onClick={() => changeInfo(data.id)} variant="outline-info">
              <Link to="./ma'lumot"> Ma'lumot</Link>
            </Button>
            <Button variant="outline-primary">Sotib olish</Button>
          </div>
        </div>
      </Container>
    </Fade>
  );
}
const mapState = (state) => {
  return state;
};

export default connect(mapState, { changeInfo })(Medicine);
