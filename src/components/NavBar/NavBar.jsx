import React from "react";
import Button from "../../components/Buttons/Button.jsx";
import HeaderLogo from "../../assets/header-logo.png";
import styles from "./NavBar.module.css";
import Search from "../SearchBar/Search.jsx";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={HeaderLogo} alt="headerLogo"/>
      <Search placeholder="Search an album of your choice" />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default NavBar;