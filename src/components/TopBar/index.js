import React from 'react';
import Slider from './Slider/Slider';
import ColorBar from './ColorBar/ColorBar';
import WicksLogo from './WicksLogo/WicksLogo';

const TopBar = (props) => {

    return(
        <div>
            <ColorBar />
            <WicksLogo />
            <Slider currentHourOfDay={ props.currentHourOfDay } />
        </div>
    )
}

export default TopBar;
