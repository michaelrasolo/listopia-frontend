import React from "react";
import styles from "../styles/Comp.module.css"
function adresse() {
  return (
    <section className={styles.addressBox}>
        <h3>Adresse de livraison: </h3>
        <div className={styles.addressElements}>Marie et Michaël RASOLONJATOVO</div>
        <div className={styles.addressElements}>45 boulevard de Montmorency</div>
        <div className={styles.addressElements}>75016 Paris</div>
    </section>
  );
}

export default adresse;
