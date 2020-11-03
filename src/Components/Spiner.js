import React from "react";
import Loader from "react-loader-spinner";
// import styles from "./Spinner.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner() {
  return (
    <div>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
