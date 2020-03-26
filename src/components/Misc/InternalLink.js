import React from 'react';

const InternalLink = ({text, href, emoji}) => {
    return(
        <a target="_blank" 
            rel="noopener noreferrer"
            href={ href }
            className="linkContactme noWrap">
                <span className="borderMarker"><strong>{ text }</strong> { emoji }</span></a>
    )
}

export default InternalLink;