import React, { Component } from 'react';

export default class OurWork extends Component {
    render() {
        return (
            <section className='our-work-section dark-bg'>
                <h1>Our Recent Work</h1>

                <div>
                    <div>
                        <img src={require('../../images/our-work/img1.jpg')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-work/img2.jpg')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-work/img3.jpg')} />
                    </div>
                    <div>
                        <img src={require('../../images/our-work/img4.jpg')} />
                    </div>
                </div>
            </section>
        );
    }
}