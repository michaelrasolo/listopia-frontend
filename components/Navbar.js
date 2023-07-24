import styles from "../styles/Navbar.module.css";
import SideMenu from "./SideMenu";
import { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const toggleDrawer = (open) => {
    setMenuState(open);
  };

  return (
    <header className={styles.navbarContainer}>
      <nav>
        <IconButton onClick={() => toggleDrawer(true)}>
          <Menu sx={{ m: 1, b: 1, color: "#264653", fontSize: 32 }} />
        </IconButton>

        <SideMenu open={menuState} onClose={() => toggleDrawer(false)} />
      </nav>

      <div className={styles.logoBox}>
        <h1 className={styles.logo}>
        <img src="strollerIcon.png" alt="stroller icon" className={styles.logoIcon}/>
          Listopia
        
        </h1>
      </div>
      <div></div>
    </header>
  );
}

export default Navbar;
