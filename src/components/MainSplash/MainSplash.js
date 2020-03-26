import React from 'react';
import InternalLink from '../Misc/InternalLink';

const MainSplash = (props) => {

    const GetGreeting = () => {
        if (props.hourOfTheDay <= 2) {
          return("🌅 Good (super early) morning, I'm");
          } else if (props.hourOfTheDay >= 3 && props.hourOfTheDay <= 11) {
              return("🌅 Good morning, I'm");
          } else if (props.hourOfTheDay >= 12 && props.hourOfTheDay <= 17) {
              return("☀️ Good afternoon, I'm");
          } else {
              return("🌇 Good evening, I'm");
          }
    }

    return(
        <section id="introSection" className="section viewportHeight">
            <div className="container alignment headerParaCont">
                <p className="is-size-3" id="timeText">{ GetGreeting() }</p>
                <p id="myName" className="is-size-1"><strong>Thomas Wicks</strong> <span className="cheers">🎉</span></p>
                <p className="is-size-5 has-text-centered">a software developer from the little-known state of New York.</p>
                <p className="is-size-5">Down below are some of my projects</p>
                <p className="is-size-5 zFix">Alternatively, you can view my 
                    <InternalLink 
                        href={ "https://thomaswicks.com/MyResume/ThomasWicksResume.pdf" }
                        text={ "résumé" }
                        emoji={ "📝" }
                    />
                </p>
                <p className="is-size-5 zFix">If you're looking to get in touch, 
                    <InternalLink 
                        href={ "#contactMe" }
                        text={ "shoot me an email" }
                        emoji={ "✉️" }
                    />
                </p>
                <p className="is-size-5 minH">
                    <a href="https://github.com/ThomasWicksWeb"
                        className="text-highlight hvr-sweep-to-right minH helpingMarginLR" target="_blank"
                        rel="noopener"><span><strong className="icons">GitHub <i
                                    className="fas fa-external-link-alt is-size-5"></i></strong></span> </a>
                    <a href="https://www.linkedin.com/in/thomas-wicks-280b5717a/"
                        className="text-highlight hvr-sweep-to-right minH helpingMarginLR" target="_blank"
                        rel="noopener"><strong className="icons">LinkedIn <i
                                className="fas fa-external-link-alt is-size-5"></i></strong> </a>
                </p>
                <p id="scrollOnDown" className="is-size-5 arrowBounce">👇 Scroll on Down 👇</p>
            </div>
        </section>
    );
}

export default MainSplash;