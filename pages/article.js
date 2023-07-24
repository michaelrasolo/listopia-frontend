import React, { useEffect } from "react";
import styles from "../styles/Article.module.css";
import MainButton from "../components/MainButton";
import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"; // Import the useRouter hook
import BookingModal from "../components/BookingModal";
import UnbookModal from "../components/UnbookModal";
import { useSelector } from "react-redux";

function article() {
  const router = useRouter(); // Get the useRouter instance

  const [booked, setBooked] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [openUnbooking, setOpenUnbooking] = useState(false);
const item = useSelector((state) => state.item.value.selectedItem);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    if (item.itemName == null) {
      router.push("/"); 
    } else {
      setBooked(item.booked);
    }
  }, [item.itemName, router]);

  return (
    <main>
      <img src={item.image} alt={item.itemName} className={styles.itemPic} />
      <div className={styles.articleContainer}>
        <div className={styles.itemHeader}>
          <div className={styles.itemTitles}>
            <h2 className={styles.h2}>{item.itemName}</h2>
            <h3
              className={styles.dealer}
              onClick={() => openInNewTab(item.url)}
            >
              {item.dealer}
            </h3>
          </div>
          <h2 className={styles.h2} style={{ marginLeft: "3vh" }}>
            {item.price}€
          </h2>
        </div>
        {item.desc == null ? (
          <></>
        ) : (
          <p className={styles.itemDesc}>{item.desc}</p>
        )}
        <div className={styles.itemInfos}>
          <MainButton
            text={
              <>
                <OpenInNewIcon sx={{ mr: "1rem", fontSize: "1.2rem" }} />
                {" Voir sur le site marchand"}
              </>
            }
            color="transparent"
            width="70%"
            caption="Lien vers le site du vendeur"
            onClick={() => openInNewTab(item.url)}
          />
        </div>
        <Divider sx={{ my: "1vh" }} />
        {booked ? (
          <div className={styles.itemValidation}>
            <p>Cet article est déjà réservé par {item.gifter}</p>
            <MainButton
              text={
                <>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ marginRight: "1em" }}
                  />
                  {"Annuler la réservation"}
                </>
              }
              color="green"
              width="70%"
              caption="Annuler le cadeau que vous avez réservé"
              onClick={() => setOpenUnbooking(true)}
            />
          </div>
        ) : (
          <div className={styles.itemValidation}>
            <div>
              <h3 className={styles.h3}>Vous souhaitez offrir ce cadeau ?</h3>
              <p>
                Cliquez ci-dessous pour indiquer sur la liste que vous allez
                acheter ce cadeau.
              </p>
            </div>
            <MainButton
              text={
                <>
                  <FontAwesomeIcon
                    icon={faGift}
                    style={{ marginRight: "1em" }}
                  />
                  {"Offrir le cadeau"}
                </>
              }
              color="green"
              width="70%"
              caption="Offrir le cadeau"
              onClick={() => setOpenBooking(true)}
            />
          </div>
        )}
      </div>
      <BookingModal
        url={item.url}
        open={openBooking}
        onClose={() => setOpenBooking(false)}
      />
      <UnbookModal
        open={openUnbooking}
        onClose={() => setOpenUnbooking(false)}
      />
    </main>
  );
}

export default article;
