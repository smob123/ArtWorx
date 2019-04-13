import React, { Component } from 'react';

export default class OurPartners extends Component {
    render() {
        return (
            <section className='our-partners-section dark-bg'>
                <h1>Our Partners</h1>
                <div className='logos'>
                    <div>
                        <img src={require('../../images/our-partners/img1.png')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-partners/img2.png')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-partners/img3.png')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-partners/img4.png')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-partners/img5.png')} />
                    </div>
                </div>
            </section>
        );
    }
}