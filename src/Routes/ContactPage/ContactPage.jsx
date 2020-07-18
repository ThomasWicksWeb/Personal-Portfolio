import React from "react";
import { ContactMe } from "../../components/ContactMe";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <main styles={styles.DottedBG}>
      <ContactMe />
    </main>
  );
};

export default ContactPage;
