import React from 'react';
import InternalLink from '../Misc/InternalLink';
import Emoji from '../Misc/Emoji';
import classnames from 'classnames';
import styles from './MainSplash.module.scss';
import ExternalLink from 'components/Misc/ExternalLink';

const MainSplash = ({currentHourOfDay}) => {

    const GetGreeting = () => {
        if (currentHourOfDay <= 2) {
          return("🌅 Good (super early) morning, I'm");
          } else if (currentHourOfDay >= 3 && currentHourOfDay <= 11) {
              return("🌅 Good morning, I'm");
          } else if (currentHourOfDay >= 12 && currentHourOfDay <= 17) {
              return("☀️ Good afternoon, I'm");
          } else {
              return("🌇 Good evening, I'm");
          }
    }

    return(
        <section id="introSection"  className={ classnames("section", styles.introSection) }>
            <div className={ classnames("container", styles.alignment, styles.headerParaCont) }>
                <p className={ classnames("is-size-3", styles.timeText) } id="timeText">{ GetGreeting() }</p>
                <p className={ classnames("is-size-1", styles.myName)}><strong>Thomas Wicks</strong> <span className={ styles.cheers }><Emoji emoji="🎉" label="Cheers!" /></span></p>
                <p className="is-size-5 has-text-centered">a software developer from the little-known state of New York.</p>
                <p className="is-size-5">Down below are some of my projects</p>
                <p className={ classnames("is-size-5", styles.zFix) }>Alternatively, you can view my 
                    <InternalLink 
                        href="https://thomaswicks.com/MyResume/ThomasWicksResume.pdf"
                        text="résumé"
                        emoji="📝"
                    />
                </p>
                <p className={ classnames("is-size-5", styles.zFix) }>If you're looking to get in touch, 
                    <InternalLink 
                        href="#contactMe"
                        text="shoot me an email"
                        emoji="✉️"
                    />
                </p>
                <p className={classnames("is-size-5", styles.icons, styles.minH)}>
                    <ExternalLink
                        text="GitHub "
                        icon="fas fa-external-link-alt is-size-5"
                        href="https://github.com/ThomasWicksWeb"
                    />

                    <ExternalLink
                        text="LinkedIn"
                        icon="fas fa-external-link-alt is-size-5"
                        href="https://www.linkedin.com/in/thomas-wicks-280b5717a/"
                    />

                </p>
                <p id="scrollOnDown" className={ classnames("is-size-5", styles.arrowBounce) }>
                    <Emoji emoji="👇" label="Point down" />
                     Scroll on Down 
                    <Emoji emoji="👇" label="Point down" />
                </p>
            </div>
        </section>
    );
}

export default MainSplash;