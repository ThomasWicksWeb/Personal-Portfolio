import React from 'react';
import classnames from 'classnames'
import { personalProjectsLarge, personalProjectsSmall }  from './data';
import ExternalLink from '../Misc/ExternalLink';
import SectionHeader from '../Misc/SectionHeader';
import './PersonalProjects.scss';

// Mapping projects that appear as large (Web Dev Resources)
const PPListLarge = personalProjectsLarge.map(item => {
    return(
        <article key={ item.title } className="roundedCorners">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
                </a>
                <div className="textContainer dottedWhenDark">
                    <h2><strong>{ item.title }</strong></h2>
                    <p className="is-size-5">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className="is-size-6 ProjectLinkContainer">
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

// Mapping projects that appear as small (German Word A day, Tesla Tracker)
const PPListSmall = personalProjectsSmall.map(item => {
    return(
        <article key={ item.title } className="roundedCorners">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
                </a>
                <div className="textContainer dottedWhenDark">
                    <h2><strong>{ item.title }</strong></h2>
                    <p className="is-size-5">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className={ classnames("is-size-6 ProjectLinkContainer") }>
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
        <section className="section personalProjectsSection">
            <SectionHeader emoji="📂" label="Folder emoji" HeaderText="My Projects" />
            <div className="largeGridParent">
                <div className="projectsLargeGrid">
                    {/* Large projects */}
                    { PPListLarge }
                </div>
            </div>
            <div className="smallGridParent">
                <div className="projectsSmallGrid">
                    {/* Smaller projects */}
                    { PPListSmall }
                </div>
            </div>
        </section>
    )
}

export default PersonalProjects;