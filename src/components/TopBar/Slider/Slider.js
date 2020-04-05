import React, { Component } from 'react';
import styles from './Slider.module.scss';
import classnames from 'classnames';

// import './DarkStyles.module.scss';

class Slider extends Component {

    state = {
        darkMode: false
    }
    
    render(){
        return(
            <div>
                <label className={ styles.switch }>
                    <input ref="darkModeSliderBtn" type="checkbox" onClick={this.darken} />
                    <span className={ classnames(styles.round, styles.slider) }>&nbsp;</span>
                </label>
            </div>
        )
    }

    componentDidMount(){
        if (this.props.currentHourOfDay <= 5 || this.props.currentHourOfDay >= 20) {
            this.darken();
            this.refs.darkModeSliderBtn.checked = true;
            this.setState({darkMode: true})
        };
    }

    darken = () => {
        // Border to border marker
        document.querySelectorAll('.borderMarker').forEach(e => e.classList.toggle('borderMarkerDark'));
        // Apply dark background color
        document.querySelectorAll('body, .textContainer').forEach(e => e.classList.toggle('darkBG'));
        // Off-shade footer BG
        document.querySelectorAll('footer, .tint, .projectContainer, .projectContainer div, .column').forEach(e => e.classList.toggle('darkBGLight'));
        // Strengthens orange colors on the page behind text
        document.querySelectorAll('.bannerText, .orangeBackground, .textHighlight, .text-highlight').forEach(e => e.classList.toggle('bannerTextDark'));
        // small project grid background
        document.querySelectorAll('.darkerBG').forEach(e => e.classList.toggle('darkmodeBGDark'));



        // All general text on the page
        document.querySelectorAll('p, a, span, label, strong, h3, .is-size-3, .is-size-4, .is-size-5, .is-size-6, .projectTitle').forEach(e => e.classList.toggle('darkText'));

        // WICKS logo
        document.querySelectorAll('.logoLight').forEach(e => e.classList.toggle('logoDark'));

        if(this.state.darkMode === true){
            this.setState({darkMode: false});
        } else {
            this.setState({darkMode: true});
        }

      }

}

export default Slider;