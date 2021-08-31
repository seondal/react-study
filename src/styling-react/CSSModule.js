import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  //여기서 styles 값은 "CSSModule_wrapper_해시값"
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요 저는 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
