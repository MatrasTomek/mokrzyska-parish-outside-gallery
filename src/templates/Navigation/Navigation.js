import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { NAV_DATA } from "../../Data/navigationItems";

import styles from "./navigation.module.scss";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = useRef(null);

  const handleOpenCloseMenu = () => {
    setOpenMenu(!openMenu);
    menu.current.classList.toggle(`${styles.isVisible}`);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    menu.current.classList.remove(`${styles.isVisible}`);
  };

  const navigationItems = NAV_DATA.map((item) => {
    return (
      <Link key={item.id} to={`${item.path}`} onClick={handleCloseMenu}>
        {item.name}
      </Link>
    );
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.logo}></div>
        <div className={styles.navigation}>
          <div className={styles.burger} onClick={handleOpenCloseMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <p>{!openMenu ? "menu" : "zamknij"}</p>
          </div>
          <nav ref={menu}>
            <ul>
              {navigationItems}
              <a
                href="https://www.ecmentarze.pl/parafia/mokrzyska/"
                target="blank"
              >
                {" "}
                cmentarz parafialny
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
