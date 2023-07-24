import React from "react";
import Kitty from "../components/Kitty";
import styles from "../styles/Comp.module.css"

function moneypot() {
  return (
    <div className={styles.addressBox}>
      <Kitty />
    </div>
  );
}

export default moneypot;
