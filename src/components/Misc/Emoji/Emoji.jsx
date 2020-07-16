import React from "react";
import classnames from "classnames";
import styles from "./Emoji.module.scss";

const Emoji = ({ emoji, label, classes }) => {
  return (
    <span
      role="img"
      className={classnames(styles.emoji, classes)}
      aria-label={label}
    >
      {emoji}
    </span>
  );
};

export default Emoji;
