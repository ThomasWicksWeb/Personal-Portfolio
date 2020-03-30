import React from 'react';
import Slider from '../Misc/Slider/Slider';
import ColorBar from '../Misc/ColorBar/ColorBar';
import WicksLogo from '../Misc/WicksLogo/WicksLogo';

const TopBar = (props) => {

    return(
        <div>
            <ColorBar />
            <WicksLogo />
            {/* <Slider currentHourOfDay={ props.currentHourOfDay } /> */}
        </div>
    )
}

export default TopBar;
