import React from 'react';
import classnames from 'classnames';
import SectionHeader from '../Misc/SectionHeader'
import styles from './ContactMe.module.scss';

const ContactMe = () => {
    return(
        <section id="contactMe" className={ classnames("section", styles.contactMe) }>
            <div className="container">
            <SectionHeader emoji="✉️" label="Folder emoji" HeaderText="Contact Me" />
                <form className="form" action="https://formspree.io/thomaswicks.ch@gmail.com" method="POST">
                    <div className={ classnames("field", styles.field) }>
                        <label htmlFor="name" className="label is-size-5">Name</label>
                        <div className="control">
                            <input id="name" className="input" type="text" placeholder="Your name" name="name" />
                        </div>
                    </div>

                    <div className={ classnames("field", styles.field) }>
                        <label htmlFor="email" className="label is-size-5">Email</label>
                        <div className="control">
                            <input id="email" name="email" className="input" type="email" placeholder="Your email" />
                        </div>
                    </div>

                    <div className={ classnames("field", styles.field) }>
                        <label htmlFor="message" className="label is-size-5">Message</label>
                        <div className="control">
                            <textarea id="message" className="textarea" placeholder="Hey there" name="message"></textarea>
                        </div>
                    </div>

                    <div className={ classnames("field is-grouped", styles.field) }>
                        <div className="control">
                            <button value="submit" type="submit" className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactMe;