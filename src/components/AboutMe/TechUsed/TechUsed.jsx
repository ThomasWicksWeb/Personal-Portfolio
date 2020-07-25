import React from "react";
import classnames from "classnames";

import styles from "./TechUsed.module.scss";

const TechUsed = () => {
  const TechItems = [
    "Javascript (ES6+)",
    "React",
    "HTML & (S)CSS",
    "Google Firebase",
    "MongoDB",
    "Tailwind CSS",
    "Bulma CSS",
  ];

  return (
    <div>
      <h3
        className={classnames(
          "has-text-weight-bold is-size-3",
          styles.TechUsedHeader
        )}
      >
        Recent Tech I've Used
      </h3>
      <ul className={styles.ListContainer}>
        {TechItems.map((item) => {
          return (
            <li className={classnames("is-size-6", styles.ListItem)}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechUsed;
