import React from 'react';
import classnames from 'classnames'
import { personalProjectsLarge, personalProjectsSmall }  from '../../data/dataPersonalProjects';
import ExternalLink from '../Misc/ExternalLink/ExternalLink';
import SectionHeader from '../Misc/SectionHeader/SectionHeader';
import styles from './PersonalProjects.module.scss';

const PPListLarge = personalProjectsLarge.map(item => {
    return(
        // <article key={ item.title } className={ classnames("", styles.dottedBG, styles.tint, styles.roundedCorners) }>
        //     <div className={ classnames("myBox", styles.myBox, styles.projectContainer) }>
        //         <a href={item.live} target="_blank" rel="noopener noreferrer">
        //             <img src={ item.img } alt={ item.imgAlt } />
        //         </a>
        //         <div className={ classnames("textContainer", styles.projectTextContainer, styles.dottedBG) }>
        //             <h2 className={ classnames("", styles.projectTitle) }><strong>{ item.title }</strong></h2>
        //             <p className="is-size-6">{ item.desc }</p>
        //             <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
        //             <p className={ classnames("is-size-6", styles.projectIconRow, styles.footerIcons) }>
        //                 <ExternalLink 
        //                     href={ item.live }
        //                     text={ "View Project" }
        //                     icon={ "fas fa-external-link-alt is-size-5" } 
        //                 />
        //                 <ExternalLink 
        //                     text={ "View on GitHub" }
        //                     icon={ "fab fa-github is-size-5" }
        //                     href={ item.github }
        //                 />
        //             </p>
        //         </div>
        //     </div>
        // </article>
        <article key={ item.title } className={ classnames("tint myBox", styles.myBox, styles.dottedBG, styles.tint) }>
            <a href={ item.live } target="_blank" rel="noopener noreferrer">
                <img src={ item.img } alt={ item.imgAlt } />
            </a>
            <h1 className={ classnames("projectTitle", styles.projectTitle) }>{ item.title }</h1>
            <p className="is-size-5">{ item.desc }</p>
            <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
            <p className={ classnames("is-size-6", styles.projectIconRow, styles.footerIcons) }>
                <ExternalLink
                    text={ "View Project" }
                    href={ item.live }
                    icon={ "fas fa-external-link-alt is-size-5" }
                />
                <ExternalLink 
                    text={ "View on GitHub" }
                    icon={ "fab fa-github is-size-5" }
                    href={ item.github }
                />
            </p>
        </article>
    )
});

const PPListSmall = personalProjectsSmall.map(item => {
    return(
        <article key={ item.title } className={ classnames("tint myBox", styles.myBox, styles.dottedBG, styles.tint) }>
            <a href={ item.live } target="_blank" rel="noopener noreferrer">
                <img src={ item.img } alt={ item.imgAlt } />
            </a>
            <h1 className={ classnames("projectTitle", styles.projectTitle) }>{ item.title }</h1>
            <p className="is-size-5">{ item.desc }</p>
            <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
            <p className={ classnames("is-size-6", styles.projectIconRow, styles.footerIcons) }>
                <ExternalLink
                    text={ "View Project" }
                    href={ item.live }
                    icon={ "fas fa-external-link-alt is-size-5" }
                />
                <ExternalLink 
                    text={ "View on GitHub" }
                    icon={ "fab fa-github is-size-5" }
                    href={ item.github }
                />
            </p>
        </article>
    )
})


const PersonalProjects = () => {
    return(
        <section className="section">
            <SectionHeader emoji="📂" label="Folder emoji" HeaderText="My Projects" />
            <div className={ styles.largeGridParent }>
                <div className={ styles.projectsLargeGrid }>
                    { PPListLarge }
                </div>
            </div>
            <div className={ styles.smallGridParent }>
                <div className={ styles.projectsSmallGrid }>
                    { PPListSmall }
                </div>
            </div>
        </section>
    )
}

export default PersonalProjects;