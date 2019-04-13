import React, { Component } from 'react';

export default class OurBlog extends Component {
    render() {
        return (
            <section className='our-blog-section'>
                <div className='txt-container'>
                    <h1>Our Blog</h1>
                    <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                        Semantics, a large language ocean.
                    </span>
                </div>

                <div className='blogs'>
                    <div className='blog'>
                        <img src={require('../../images/our-blog/img1.jpg')} />
                        <h1>Latest Design Trends</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                            </span>
                    </div>
                    <div className='blog'>
                        <img src={require('../../images/our-blog/img2.jpg')} />
                        <h1>2019 Sales</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                            </span>
                    </div>
                    <div className='blog'>
                        <img src={require('../../images/our-blog/img3.jpg')} />
                        <h1>Download Our New Mobile App</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                            </span>
                    </div>
                </div>
            </section>
        );
    }
}