import React, { Component } from 'react';

class Slider extends Component {
    
    // state = {
    //     currentHourOfDay: new Date().getHours()
    // }

    render(){
        return(
            <div>
                <label id="toggleSliderDOM" className="switch">
                    <input id="darkModeSliderBtn" ref="darkModeSliderBtn" type="checkbox" onClick={this.darken} />
                    <span className="slider round">&nbsp;</span>
                </label>
            </div>
        )
    }

    componentDidMount(){
        if (this.props.currentHourOfDay <= 5 || this.props.currentHourOfDay >= 20) {
            this.darken();
            this.refs.darkModeSliderBtn.checked = true;
        };
    }

    darken = e => {
        // Apply darkmode to text
        document.querySelectorAll('p, a, span, label, strong, h3, .certWrapper > *, .is-size-3, .is-size-4, .is-size-5, .is-size-6, .projectTitle').forEach(e => e
          .classList.toggle('darkText'));
        // Border to logo
        document.querySelectorAll('#logo').forEach(e => e.classList.toggle('logoDark'));
        // Border to border marker
        document.querySelectorAll('.borderMarker').forEach(e => e.classList.toggle('borderMarkerDark'));
        // Apply dark background color
        document.querySelectorAll('body, .certWrapper, .text-container').forEach(e => e.classList.toggle('darkBG'));
        // Off-shade footer BG
        document.querySelectorAll('footer, .tint, .projectContainer, .projectContainer div, .column').forEach(e => e.classList.toggle('darkBGLight'));
        // Strengthens orange colors on the page behind text
        document.querySelectorAll('.bannerText, .orangeBackground, .text-highlight').forEach(e => e.classList.toggle(
          'bannerTextDark'));
        }


}

export default Slider;