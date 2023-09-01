import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../styles/Modal.module.css";
import MainButton from "./MainButton";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useSelector } from "react-redux";
export default function BookingModal(props) {
  const router = useRouter(); // Get the useRouter instance
  const [gifter, setGifter] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resaConfirmed, setResaConfirmed] = useState(false);
  const itemId = useSelector((state) => state.item.value.selectedItem._id);
  const item = useSelector((state) => state.item.value.selectedItem);
  const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [error, setError] = useState(false);
  const handleConfirm = async () => {
    // Console log the current States
    console.log("Redux: ",gifter, message, email, itemId);
    // Check for empty fields
    if (!message || !gifter || !email) {
      setError(true);
      return; // Stop if empty field
    }

    // Check if the email has a valid format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setError(true);
      return; // Stop if the email format is invalid
    }

    try {
      // API call if checks are passed

      // DB action to book the selected item
      const response = await fetch(
        "https://listopia-backend.vercel.app/items/book",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: itemId,
            message,
            gifter,
            email,
          }),
        }
      );

      // const emailToSend = await fetch("http://localhost:3001/api/email", {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     itemName:item.itemName,
      //     gifter,
      //     email
      //   })
      // });

      const data = await response.json();
      console.log("réponse du back: ", data.message);
      setResaConfirmed(true);
      console.log("state ResaConfirmed:", resaConfirmed);
    } catch (error) {
      console.error("Erreur lors de la requête PUT :", error);
    }
  };

  useEffect(() => {
    if (resaConfirmed) {
      setTimeout(() => {
        openInNewTab(props.url);
        router.push("/"); // Redirect to "/"
      }, 1000);
    }
  }, [resaConfirmed]);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {resaConfirmed == false ? (
          <Box className={styles.modal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Offrir le cadeau{" "}
            </Typography>

            <form className={styles.form}>
              <label className={styles.label} for="name">
                Votre nom
              </label>
              <input
                className={`${styles.input} ${
                  error && !gifter && styles.errorBorder
                }`}
                placeholder="Bubulle"
                type="text"
                id="name"
                name="name"
                required
                value={gifter}
                onChange={(e) => setGifter(e.target.value)}
              />
              <label className={styles.label} for="email">
                Votre email
              </label>
              <input
                className={`${styles.input} ${
                  error && !email.match(emailPattern) && styles.errorBorder
                }`}
                placeholder="bubulle@baby.com"
                type="email"
                id="email"
                required
                pattern={emailPattern}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.label} for="text">
                Votre message aux futurs parents
              </label>
              <textarea
                className={`${styles.message} ${
                  error && !message && styles.errorBorder
                }`}
                placeholder="Votre texte d'amour ici"
                type="text"
                id="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className={error ? styles.error : styles.noerror}>
                Champ vide ou incorrect
              </p>
              <Accordion sx={{ boxShadow: 0 }}>
                <AccordionSummary
                  sx={{ p: 0 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p style={{ color: "#335C67" }}>Adresse de livraison</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>Marie et Michaël RASOLONJATOVO</p>
                  <p>45 boulevard de Montmorency</p>
                  <p>75016 Paris</p>
                </AccordionDetails>
              </Accordion>

              <p style={{ marginTop: "6px", fontSize: "0.75rem" }}>
                Je réserve le cadeau dans la liste, et je vais être redirigé
                vers le site pour réaliser l'achat.
              </p>
            </form>
            <MainButton
              color="green"
              width="160px"
              text="Valider"
              onClick={handleConfirm}
            />
          </Box>
        ) : (
          <Box className={styles.modal} style={{ justifyContent: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Merci pour votre cadeau !
            </Typography>
            <p style={{ textAlign: "center", width: "100%" }}>
              Vous allez être redirigé vers le site commerçant...
            </p>
            <CircularProgress style={{ color: "#335c67", margin: "3vh" }} />
          </Box>
        )}
      </Modal>
    </div>
  );
}
