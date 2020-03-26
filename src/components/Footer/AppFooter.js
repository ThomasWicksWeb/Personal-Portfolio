import React from 'react';
import ExternalLink from '../Misc/ExternalLink/ExternalLink'

const ContactMe = () => {
    return(
        <footer className="footer block">
            <div className="content has-text-centered block">
                <p className="is-size-5">Built with <i className="fas fa-heart"></i> by <strong>Thomas Wicks</strong> in [rainy,
                    sunny, hot, humid, cold] New York</p>
                <p className="is-size-5 minH footerIcons">
                    <ExternalLink text="GitHub " icon="fab fa-github is-size-5 icons" label="GitHub" href="https://github.com/ThomasWicksWeb" />

                    <ExternalLink text="LinkedIn " icon="fas fa-external-link-alt is-size-5 icons" label="LinkedIn" href="https://www.linkedin.com/in/thomas-wicks-280b5717a/" />

                    <ExternalLink text="Résumé " icon="fas fa-file-alt icons" label="Résumé" href="https://www.thomaswicks.com/MyResume/ThomasWicksResume.pdf" />
                </p>
            </div>
        </footer>
    )
}

export default ContactMe;