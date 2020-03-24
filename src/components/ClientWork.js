import React from 'react';
import ClientsProjects from '../data/dataClientsProjects';

const LargeClientsProjectList = ClientsProjects.map(item => {
    return(
        <div key={ item.title } className="tint">
            <div className="column myBox projectContainer dottedBG tint">
                <a href={item.live} target="_blank" rel="noopener" className="link content-image">
                    <img src={ item.img } alt={ item.imgAlt }
                        title="Drip on the Wall WIP Thumbnail" />
                </a>
                <div className="text-container dottedBG">
                    <h2 className="projectTitle"><strong>{ item.title }</strong></h2>
                    <p className="is-size-6">{ item.desc }</p>
                    <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
                    <p className="is-size-6 projectIconRow footerIcons">
                        <a href={ item.live }
                            className="text-highlight hvr-sweep-to-right helpingMarginLR noWrap" target="_blank"
                            rel="noopener">
                            <strong>View Project <i className="fas fa-external-link-alt is-size-5"></i></strong>
                        </a>
                        <a href={ item.github }
                            className="text-highlight hvr-sweep-to-right helpingMarginLR noWrap" target="_blank"
                            rel="noopener">
                            <strong>View on GitHub <i className="fab fa-github is-size-5"></i></strong>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
});

const ClientWork = () => {
    return(
        <div>
            <div className="bannerTextContainer section">
                <div className="bannerTextContainer container">
                    <h3 className="title is-size-2 helpingPaddingLeft sectionHeader">Client Work 📁</h3>
                </div>
            </div>

            <div className="largeGridParent">
                <div className="projectsLargeGrid section columns is-vcentered">
                    { LargeClientsProjectList }
                </div>
            </div>

        </div>
    )
}

export default ClientWork;