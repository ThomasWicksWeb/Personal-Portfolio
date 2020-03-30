import React from 'react';
import classnames from 'classnames';
import styles from './InternalLink.module.scss';

const InternalLink = ({text, href, emoji}) => {
    return(
        <a target="_blank" 
            rel="noopener noreferrer"
            href={ href }
            className="linkContactme noWrap">
                <span className={ classnames("borderMarker", styles.borderMarker) }><strong>{ text }</strong> { emoji }</span></a>
    )
}

export default InternalLink;