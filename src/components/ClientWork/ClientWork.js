import React from 'react';
import ClientsProjects from '../../data/dataClientsProjects';
import ExternalLink from '../Misc/ExternalLink/ExternalLink';

const LargeClientsProjectList = ClientsProjects.map(item => {
    return(
        <div key={ item.title } className="roundedCorners">
            <div className="column myBox projectContainer dottedBG">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="link content-image">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
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
        </div>
    )
});

const ClientWork = () => {
    return(
        <section className="section">
            <div className="bannerTextContainer">
                <div className="bannerTextContainer container">
                    <h3 className="title is-size-2 helpingPaddingLeft sectionHeader">Client Work <span role="img" aria-label="Folder emoji">📁</span></h3>
                </div>
            </div>

            <div className="largeGridParent">
                <div className="projectsLargeGrid">
                    { LargeClientsProjectList }
                </div>
            </div>

        </section>
    )
}

export default ClientWork;