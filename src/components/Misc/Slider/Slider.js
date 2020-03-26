import React, { Component } from 'react';
import styles from './Slider.module.scss';
import classnames from 'classnames';

class Slider extends Component {
    
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
        };
    }

    darken = () => {
        // Apply darkmode to text
        document.querySelectorAll('p, a, span, label, strong, h3, .certWrapper > *, .is-size-3, .is-size-4, .is-size-5, .is-size-6, .projectTitle').forEach(e => e
          .classList.toggle('darkText'));
        // Border to logo
        document.querySelectorAll('#logo').forEach(e => e.classList.toggle('logoDarkLrg'));
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
        // small project grid background
        document.querySelectorAll('.placeholderForDarkModeBG').forEach(e => e.classList.toggle('smallGridDarkBG'));
      }

}

export default Slider;