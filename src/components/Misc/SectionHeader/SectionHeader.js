import React from 'react';
import Emoji from '../Emoji/Emoji';

const SectionHeader = ({HeaderText, emoji, label, classes}) => {
    return(
        <>
            <div className="bannerTextContainer">
                <div className="bannerTextContainer container">
                    <h3 className="title is-size-2 helpingPaddingLeft sectionHeader">{ HeaderText } <Emoji emoji={ emoji } label={ label } classes={ classes } /></h3>
                    
                </div>
            </div>
        </>
    )
}

export default SectionHeader;