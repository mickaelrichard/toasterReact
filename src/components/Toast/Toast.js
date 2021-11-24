import { useMemo } from "react";
import styles from "./styles.module.css";

export const Toast = ({ mode, onClose, message }) => {
  const classes = useMemo(() => [styles.toast, styles[mode]].join(" "), [mode]);
  //styles.mode is dynamic object, mode is variable with 4 different values
  return (
    <div onClick={onClose} className={classes}>
      <div className={styles.message}>{message}</div>
    </div>
  );
};
