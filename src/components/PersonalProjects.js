import React from 'react';
import { personalProjectsLarge, personalProjectsSmall }  from '../data/dataPersonalProjects';



const PPListLarge = personalProjectsLarge.map(item => {
    return(
        <div key={ item.title } className="tint">
            <div className="column myBox projectContainer dottedBG tint">
                <a href={item.live} target="_blank" rel="noopener" className="link content-image">
                    <img src={ item.img } alt={ item.imgAlt } />
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

const PPListSmall = personalProjectsSmall.map(item => {
    return(
        <article key={ item.title }
                    className="column myBox dottedBG placeholderForDarkModeBG">
            <a href={ item.live } target="_blank" rel="noopener">
                <img src={ item.img } alt={ item.imgAlt } />
            </a>
            <h1 className="projectTitle">{ item.title }</h1>
            <p className="is-size-5">{ item.desc }</p>
            <p className="is-size-6">Technologies Used: <strong>{ item.techUsed }</strong></p>
            <p className="is-size-6 projectIconRow footerIcons">
                <a href={ item.live } className="text-highlight hvr-sweep-to-right helpingMarginLR noWrap"
                    target="_blank" rel="noopener">
                    <strong>View Project <i className="fas fa-external-link-alt is-size-5"></i></strong>
                </a>
                <a href={ item.github } className="text-highlight hvr-sweep-to-right helpingMarginLR noWrap"
                    target="_blank" rel="noopener">
                    <strong>View on GitHub <i className="fab fa-github is-size-5"></i></strong>
                </a>
            </p>
        </article>
    )
})


const PersonalProjects = () => {
    return(
        <div>
            <div className="bannerTextContainer section">
                <div className="bannerTextContainer container">
                    <h3 className="title is-size-2 helpingPaddingLeft sectionHeader">My Projects 📂</h3>
                </div>
            </div>
            <div className="largeGridParent">
                <div className="projectsLargeGrid section columns is-vcentered">
                    { PPListLarge }
                </div>
            </div>
            <div class="smallGridParent">
                <div class="section projectsSmallGrid columns is-vcentered">
                    { PPListSmall }
                </div>
            </div>
        </div>
    )
}

export default PersonalProjects;