import React from 'react';
import { personalProjectsLarge, personalProjectsSmall }  from '../../data/dataPersonalProjects';
import ExternalLink from '../Misc/ExternalLink';



const PPListLarge = personalProjectsLarge.map(item => {
    return(
        <article key={ item.title } className="tint roundedCorners">
            <div className="myBox projectContainer">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link content-image">
                    <img src={ item.img } alt={ item.imgAlt } />
                </a>
                <div className="project-text-container dottedBG">
                    <h2 className="projectTitle"><strong>{ item.title }</strong></h2>
                    <p className="is-size-6">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className="is-size-6 projectIconRow footerIcons">
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
            </div>
        </article>
    )
});

const PPListSmall = personalProjectsSmall.map(item => {
    return(
        <article key={ item.title } className="column myBox dottedBG tint">
            <a href={ item.live } target="_blank" rel="noopener noreferrer">
                <img src={ item.img } alt={ item.imgAlt } />
            </a>
            <h1 className="projectTitle">{ item.title }</h1>
            <p className="is-size-5">{ item.desc }</p>
            <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
            <p className="is-size-6 projectIconRow footerIcons">
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
            <div>
                <div className="container">
                    <h3 className="sectionHeader is-size-2 helpingPaddingLeft">My Projects <span role="img" aria-label="Folder emoji">📂</span></h3>
                </div>
            </div>
            <div className="largeGridParent">
                <div className="projectsLargeGrid section">
                    { PPListLarge }
                </div>
            </div>
            <div className="smallGridParent">
                <div className="section projectsSmallGrid">
                    { PPListSmall }
                </div>
            </div>
        </section>
    )
}

export default PersonalProjects;