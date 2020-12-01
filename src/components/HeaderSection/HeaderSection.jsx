import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import styles from "./HeaderSection.module.css";
import HeaderSlider from "./HeaderSlider/HeaderSlider";

const HeaderSection = (props) => {
  return (
    <>
      <div className={styles.headerSection}>
        <HeaderComponent />
        <HeaderSlider />
      </div>
    </>
  );
};

export default HeaderSection;
