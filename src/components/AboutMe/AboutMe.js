import React from 'react';
import styles from './AboutMe.css'

const AboutMe = () => {


    return(
        <div id="aboutMe" className="tint helpingPadding">
            <div className="container ">
                <div className="bannerTextContainer">
                    <h3 className="title is-size-2 sectionHeader">About Me <span role="img" aria-label="Dog emoji">🎓</span></h3>
                </div>
                <div className="smallGridParent">
                    <div id="aboutMeColumns" className="columns2 is-vcentered projectsSmallGrid">
                        <div>
                            <p className="is-size-5">I'll be graduating from Farmingdale State College in May of 2020 with a
                                Bachelor's degree in Computer Programming &amp; Information Systems <span role="img" aria-label="School building emoji">🏛️</span></p>
                            <br />
                            <p className="is-size-5">I can speak a decent bit of German <span role="img" aria-label="German flag emoji">🇩🇪</span></p>
                            <br />
                            <p className="is-size-5">I really enjoy programming, gaming, lisening to music &amp; podcasts, and
                                video editing <span role="img" aria-label="Flopy disc emoji">💾</span></p>
                            <br />
                            <p className="is-size-5">I have a pug named Frank <span role="img" aria-label="Dog emoji">🐶</span></p>
                        </div>
                        <div>
                            <img className="profileImage" src="./images/thatsme.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;