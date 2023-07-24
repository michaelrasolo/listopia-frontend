import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Savings from "@mui/icons-material/Savings";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import PinDrop from "@mui/icons-material/PinDrop";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function SideMenu(props) {
  const toggleDrawer = () => {
    props.onClose();
  };

  const list = () => (
    <Box
      sx={{ width: 250, height: "100vh", backgroundColor: "#FEF8F0" }}
      role="presentation"
    >
      <List sx={{ width: 250, textAlign:"center" }}>
      <img src="strollerIcon.png" alt="stroller icon" className={styles.logoIcon}/>
        <Link href="/" style={{ textDecoration: "none", color: "#44433e" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChildFriendly />
              </ListItemIcon>
              <ListItemText primary={"Accueil"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Savings />
            </ListItemIcon>
            <ListItemText primary={"Cagnotte"} />
          </ListItemButton>
        </ListItem>
        <Link href="/adresse" style={{ textDecoration: "none", color: "#44433e" }}>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PinDrop />
            </ListItemIcon>
            <ListItemText primary={"Adresse et infos"} />
          </ListItemButton>
        </ListItem>
        </Link>
        
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      sx={{ marginTop: 200 }}
    >
      <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        {list()}
      </div>
    </SwipeableDrawer>
  );
}
