import React from "react";
import styles from "../styles/Comp.module.css"
function adresse() {
  return (
    <section className={styles.addressBox}>
        <h3>Adresse de livraison: </h3>
        <div className="name">Marie et Michaël RASOLONJATOVO</div>
        <div className="street">45 boulevard de Montmorency</div>
        <div className="postCode">75016 Paris</div>
    </section>
  );
}

export default adresse;
