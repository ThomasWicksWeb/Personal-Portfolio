import React from 'react';
import SectionHeader from '../Misc/SectionHeader/SectionHeader'

const ContactMe = () => {
    return(
        <section id="contactMe" className="section">
            <div className="container">
            <SectionHeader emoji="✉️" label="Folder emoji" HeaderText="Contact Me" />
                <form className="form" action="https://formspree.io/thomaswicks.ch@gmail.com" method="POST">
                    <div className="field">
                        <label htmlFor="name" className="label is-size-5">Name</label>
                        <div className="control">
                            <input id="name" className="input inputMax" type="text" placeholder="Your name" name="name" />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="email" className="label is-size-5">Email</label>
                        <div className="control">
                            <input id="email" name="email" className="input inputMax" type="email" placeholder="Your email" />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="message" className="label is-size-5">Message</label>
                        <div className="control">
                            <textarea id="message" className="textarea" placeholder="Hey there" name="message"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
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