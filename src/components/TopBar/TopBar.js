import React from 'react';
import Slider from '../Misc/Slider';
import ColorBar from '../Misc/ColorBar';
import WicksLogo from '../Misc/WicksLogo';

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
