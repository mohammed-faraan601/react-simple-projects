import React from "react";
import styles from "./button.module.css";

function Button({ value, icon, isOutlined }) {
  return (
    <div>
      <button className={isOutlined ? `${styles.outlined_btn}` : `${styles.btn}`}>
        {icon ? icon : ""}
        {value ? value : ""}
      </button>
    </div>
  );
}

export default Button;
