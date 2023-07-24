import React from "react";
import Kitty from "../components/Kitty";
import styles from "../styles/Comp.module.css"

function moneypot() {
  return (
    <div className={styles.potContainer}>
      <Kitty />
      <p>Nous vous remercions chaleureusement pour votre participation à l'accueil de Bubulle dans notre famille !</p>
    </div>
  );
}

export default moneypot;
