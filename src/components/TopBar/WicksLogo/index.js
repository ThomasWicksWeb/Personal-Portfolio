import React from 'react'
import styles from './WicksLogo.module.scss';
import classnames from 'classnames';

const WicksLogo = () => {
    return(
        <div id="LogoID" className={classnames("logoLight", styles.logoLight, styles.logo) }>
            <span>WI</span>
            <span className={ styles.negMargin }>CKS.</span>
        </div>
    );
}

export default WicksLogo;