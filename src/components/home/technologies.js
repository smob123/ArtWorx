import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPencilRuler, faLayerGroup, faCogs } from '@fortawesome/free-solid-svg-icons';

export default class Technologies extends Component {
    render() {
        return (
            <section className='technologies-section'>
                <div className='content'>
                    <div>
                        <FontAwesomeIcon icon={faGlobe} size='4x' />
                        <span>WordPress</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faPencilRuler} size='4x' />
                        <span>Design/Graphics</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faLayerGroup} size='4x' />
                        <span>HTML/CSS/JQuery</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCogs} size='4x' />
                        <span>Support/Updates</span>
                    </div>
                </div>
            </section>
        );
    }
}