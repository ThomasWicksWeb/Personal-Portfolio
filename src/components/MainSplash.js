import React, { Component } from 'react';

class MainSplash extends Component {

    state = {
        timeText: "",
    }

    render(){
        return(
            <section id="introSection" className="section viewportHeight">
                <div className="container alignment headerParaCont">
                    <p className="is-size-3" id="timeText">{ this.state.timeText }</p>
                    <p id="myName" className="is-size-1"><strong>Thomas Wicks</strong> <span className="cheers">🎉</span></p>
                    <p className="is-size-5 has-text-centered">a software developer from the little-known state of New York.</p>
                    <p className="is-size-5">Down below are some of my projects</p>
                    <p className="is-size-5 zFix">Alternatively, you can view my <a target="_blank" rel="noopener"
                            href="https://thomaswicks.com/MyResume/ThomasWicksResume.pdf" className="linkContactme noWrap"><span
                                className="borderMarker"><strong>résumé</strong> 📝</span></a>
                    </p>
                    <p className="is-size-5 zFix">If you're looking to get in touch, <a href="#contactMe"
                            className="noWrap"><span className="borderMarker"><strong>shoot me an email</strong>
                                ✉️</span></a>
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
        )
    }

    componentDidMount(){
        this.GetGreeting();
    }

    GetGreeting = () => {
        console.log(this.props.hourOfTheDay);
        if (this.props.hourOfTheDay <= 2) {
          this.state.timeText = "🌅 Good (super early) morning, I'm";
          } else if (this.props.hourOfTheDay >= 3 && this.props.hourOfTheDay <= 11) {
              this.state.timeText = "🌅 Good morning, I'm";
          } else if (this.props.hourOfTheDay >= 12 && this.props.hourOfTheDay <= 17) {
              this.state.timeText = "☀️ Good afternoon, I'm";
          } else {
              this.state.timeText = "🌇 Good evening, I'm";
          }
    }

}

export default MainSplash;