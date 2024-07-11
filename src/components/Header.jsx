import React from "react";
import styles from "./styles/Header.module.css";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h3>GITHUB HASH</h3>
        <p>Github Profile Finder</p>
        <Toggle />
      </header>
    </>
  );
};

export default Header;
