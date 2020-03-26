import React from 'react';
import Emoji from '../Misc/Emoji/Emoji'

const ContactMe = () => {
    return(
        <section id="contactMe" className="section">
            <div className="container">
                <div className="bannerTextContainer">
                    <h3 className="title is-size-2 sectionHeader">Contact Me <Emoji label="Email emoji" emoji="✉️" /></h3>
                </div>
                <form className="form" action="https://formspree.io/thomaswicks.ch@gmail.com" method="POST">
                    <div className="field">
                        <label for="name" className="label is-size-5">Name</label>
                        <div className="control">
                            <input id="name" className="input inputMax" type="text" placeholder="Your name" name="name" />
                        </div>
                    </div>

                    <div className="field">
                        <label for="email" className="label is-size-5">Email</label>
                        <div className="control">
                            <input id="email" name="email" className="input inputMax" type="email" placeholder="Your email" />
                        </div>
                    </div>

                    <div className="field">
                        <label for="message" className="label is-size-5">Message</label>
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