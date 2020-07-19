import React from "react";
import { Helmet } from 'react-helmet'

import { ContactMe } from "../../components/ContactMe";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <main styles={styles.DottedBG}>
      <ContactMe />
      <Helmet>
        <title>Thomas Wicks | Contact</title>
      </Helmet>
    </main>
  );
};

export default ContactPage;
