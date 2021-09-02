import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "../../Css/ServiceShow.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-between">
      <Button
        style={{ marginTop: "10px" }}
       id={styles.ButtonGroupId}
        onClick={() => onButtonClick("prev")}
      >
        Orqaga
      </Button>
      <Button
        style={{ marginTop: "10px" }}
        id={styles.ButtonGroupId}
        onClick={() => onButtonClick("next")}
      >
        Keyingisi
      </Button>
    </div>
  );
};

export default Pagination;
