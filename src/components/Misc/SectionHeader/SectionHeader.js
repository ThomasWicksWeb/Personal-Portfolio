import React from 'react';
import Emoji from '../Emoji/Emoji';
import classnames from 'classnames';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({HeaderText, emoji, label, classes}) => {
    return(
        <>
            {/* <div className="bannerTextContainer container"> */}
            <div className={classnames("container", styles.bannerTextContainer)}>
                <h3 className={ classnames("is-size-2", styles.sectionHeader) }>{ HeaderText } <Emoji emoji={ emoji } label={ label } classes={ classes } /></h3>
            </div>
        </>
    )
}

export default SectionHeader;