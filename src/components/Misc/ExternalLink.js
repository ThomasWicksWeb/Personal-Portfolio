import React from 'react';

const ExternalLink = ({text, icon, href}) => {
    return(
        <a href={ href }
            className="text-highlight hvr-sweep-to-right helpingMarginLR noWrap"
            target="_blank"
            rel="noopener noreferrer">
            <strong>{ text } <i className={ icon }></i></strong>
        </a>
    )
}

export default ExternalLink;