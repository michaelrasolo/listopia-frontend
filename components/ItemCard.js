import React from "react";
import styles from "../styles/ItemCard.module.css";
import Verified from "@mui/icons-material/Verified";

function ItemCard(props) {
  return (

      <div className={styles.cardContainer} onClick={props.onClick}>

      <div className={styles.picContainer}>
      <img className={styles.itemPic} src={props.image} alt={props.itemName} />
        {props.booked && (
          <div className={styles.reservedItem}>
            <Verified sx={{ fontSize: 24, marginRight: 1 }} /> Réservé
          </div>
        )}
      </div>
      <div className={styles.descContainer}>
        <h3 className={styles.title}>{props.itemName}</h3>
        <div className={styles.itemDetails}>
          <h3 className={styles.price}>{props.price}€</h3>
          <p className={styles.seller}>{props.dealer}</p>
        </div>
      </div>
            </div>
  );
}

export default ItemCard;
