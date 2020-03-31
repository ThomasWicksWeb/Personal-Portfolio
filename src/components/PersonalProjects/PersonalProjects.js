import React from 'react';
import classnames from 'classnames'
import { personalProjectsLarge, personalProjectsSmall }  from '../../data/dataPersonalProjects';
import ExternalLink from '../Misc/ExternalLink/ExternalLink';
import SectionHeader from '../Misc/SectionHeader/SectionHeader';
import styles from './PersonalProjects.module.scss';

const PPListLarge = personalProjectsLarge.map(item => {
    return(
        <article key={ item.title } className={ classnames("roundedCorners") }>
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
                </a>
                <div className={ classnames("", styles.textContainer) }>
                    <h2 className={ classnames("") }><strong>{ item.title }</strong></h2>
                    <p className="is-size-5">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className={ classnames("is-size-6") }>
                    <ExternalLink 
                        href={ item.live }
                        text={ "View Project" }
                        icon={ "fas fa-external-link-alt is-size-5" } 
                    />
                    <ExternalLink 
                        text={ "View on GitHub" }
                        icon={ "fab fa-github is-size-5" }
                        href={ item.github }
                    />
                    </p>
                </div>
        </article>
    )
});

const PPListSmall = personalProjectsSmall.map(item => {
    return(
        <article key={ item.title } className="roundedCorners">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
                </a>
                <div className={ styles.textContainer }>
                    <h2><strong>{ item.title }</strong></h2>
                    <p className="is-size-5">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className={ classnames("is-size-6") }>
                    <ExternalLink 
                        href={ item.live }
                        text={ "View Project" }
                        icon={ "fas fa-external-link-alt is-size-5" } 
                    />
                    <ExternalLink 
                        text={ "View on GitHub" }
                        icon={ "fab fa-github is-size-5" }
                        href={ item.github }
                    />
                    </p>
                </div>
        </article>
    )
})


const PersonalProjects = () => {
    return(
        <section className={ classnames("section", styles.personalProjectsSection) }>
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