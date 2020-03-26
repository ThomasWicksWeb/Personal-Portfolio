import React from 'react';
import classnames from 'classnames';
import styles from './AboutMe.module.scss';
import Emoji from '../Misc/Emoji/Emoji';

const AboutMe = () => {

    return(
        <div id="aboutMe" className={classnames("tint", styles.sectionPadding)}>
            <div className="container ">
                <div className="bannerTextContainer">
                    <h3 className="title is-size-2 sectionHeader">About Me
                        <Emoji label="Graduation Cap"
                                emoji="🎓"
                        />
                    </h3>
                </div>
                <div className="smallGridParent">
                    <div className={classnames("is-vcentered projectsSmallGrid", styles.AboutMeColumns)}>
                        <div>
                            <p className="is-size-5">I'll be graduating from Farmingdale State College in May of 2020 with a
                                Bachelor's degree in Computer Programming &amp; Information Systems 
                                <Emoji label="School building"
                                        emoji="🏛️"
                                />
                            </p>
                            <br />
                            <p className="is-size-5">I can speak a decent bit of German 
                                <Emoji label="German flag"
                                        emoji="🇩🇪"
                                />
                            </p>
                            <br />
                            <p className="is-size-5">I really enjoy programming, gaming, lisening to music &amp; podcasts, and
                                video editing 
                                <Emoji label="Floppy Disc"
                                        emoji="💾"
                                />
                            </p>
                            <br />
                            <p className="is-size-5">I have a pug named Frank 
                            <Emoji label="Dog emoji"
                                    emoji="🐶"
                            />
                            </p>
                        </div>
                        <div>
                            <img src="./images/thatsme.png" alt="That's me!" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;