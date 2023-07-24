import React from "react";
import styles from "../styles/Kitty.module.css";

function Kitty() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");}
  return (
    <div className={styles.container}>
      <h3 className={styles.kittyTitle}>Participation libre à la cagnotte</h3>

      <div className={styles.buttonsContainer}>
        <button style={{backgroundColor : "#fbd344"}} className={styles.payButton} 
        onClick={() => openInNewTab("https://www.paypal.com/paypalme/mickeyetmarie/")}
        >
          <img
            className={styles.payImg}
            src="paypal.png"
            alt="Participer avec Paypal"
          />
        </button>
        <button className={styles.payButton} onClick={() => openInNewTab("https://revolut.me/metm/50eur/merci%20pour%20votre%20participation!%20marie%20&%20michael%F0%9F%92%96")}>Carte Bancaire

        </button>
      </div>
    </div>
  );
}

export default Kitty;
