import React from 'react';

const AboutMe = () => {


    return(
        <div id="aboutMe" class="tint helpingPadding">
            <div class="container ">
                <div class="bannerTextContainer">
                    <h3 class="title is-size-2 sectionHeader">About Me 🎓</h3>
                </div>
                <div class="smallGridParent">
                    <div id="aboutMeColumns" class="columns2 is-vcentered projectsSmallGrid">
                        <div>
                            <p class="is-size-5">I'll be graduating from Farmingdale State College in May of 2020 with a
                                Bachelor's degree in Computer Programming &amp; Information Systems 🏛️</p>
                            <br />
                            <p class="is-size-5">I can speak a decent bit of German 🇩🇪</p>
                            <br />
                            <p class="is-size-5">I really enjoy programming, gaming, lisening to music &amp; podcasts, and
                                video editing 💾</p>
                            <br />
                            <p class="is-size-5">I have a pug named Frank 🐶</p>
                        </div>
                        <div>
                            <img class="profileImage" src="./images/thatsme.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;