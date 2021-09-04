import React, { useState, useEffect } from "react";
import Medicine from "./Medicine";
import { dorilar } from "./../server";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
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
