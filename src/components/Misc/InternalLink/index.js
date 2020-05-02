import React from "react";
import classnames from "classnames";
import styles from "./InternalLink.module.scss";

const InternalLink = ({ text, href, emoji }) => {
  console.log(styles);
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classnames("noWrap zFix", styles.zFix)}
    >
      <span className={classnames("borderMarker", styles.borderMarker)}>
        <strong>{text}</strong> {emoji}
      </span>
    </a>
  );
};

export default InternalLink;
