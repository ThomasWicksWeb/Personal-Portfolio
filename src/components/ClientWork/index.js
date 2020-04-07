import React from 'react';
import ClientsProjects from '../../data/dataClientsProjects';
import ExternalLink from '../Misc/ExternalLink';
import SectionHeader from '../Misc/SectionHeader';

import classnames from 'classnames';
import styles from './ClientWork.module.scss';

const LargeClientsProjectList = ClientsProjects.map(item => {
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

const ClientWork = () => {
    return(
        <section className="section">
            <SectionHeader emoji="📁" label="Folder emoji" HeaderText="Client Work" />

            <div className={ styles.largeGridParent }>
                <div className={ styles.projectsLargeGrid }>
                    { LargeClientsProjectList }
                </div>
            </div>

        </section>
    )
}

export default ClientWork;