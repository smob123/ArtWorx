import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section className='about-section flex-col light-bg'>
                <div className='content flex-col'>
                    <div className='img-container flex-col'>
                        <img src={require('../../images/portfolio/about-us/img1.jpg')} alt='about-us' />
                    </div>

                    <div className='txt-container'>
                        <h1>About Us</h1>
                        <span>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live
                            in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies
                            it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful
                            Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.
                    </span>
                    </div>
                </div>
            </section>
        );
    }
}