import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "./../images/—Pngtree—thank you doctor and nurses_5352502.png";
import "./css/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error">
      <div>
        <Image src={img} alt="Error" />
        <div className="botton_error">
          <Button variant="primary">
            <Link to="./" style={{ textDecoration: "none", color: "#fff" }}>
              Bosh sahifaga qaytish
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
