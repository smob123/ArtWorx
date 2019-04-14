import React, { Component } from 'react';

export default class PricingDetails extends Component {
    render() {
        return (
            <section className='prices-section dark-bg'>
                <h1>Our Pricing</h1>

                <div className='pricing-cards'>
                    <div className='card'>
                        <div className='top-container'>
                            <h3>Personal Plan</h3>
                            <h1>$19.99</h1>
                            <span>Per month</span>
                        </div>

                        <div className='bottom-container'>
                            <span>1GB free space</span>
                            <span>Real-time sync</span>
                            <span>Unlimited Attatchments</span>
                            <strike>Customize Themes</strike>
                            <strike>Priority email support</strike>
                            <button>Start Now</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top-container'>
                            <h3>Enterprise Plan</h3>
                            <h1>$49.99</h1>
                            <span>Per month</span>
                        </div>

                        <div className='bottom-container'>
                            <span>1GB free space</span>
                            <span>Real-time sync</span>
                            <span>Unlimited Attatchments</span>
                            <span>Customize Themes</span>
                            <strike>Priority email support</strike>
                            <button>Start Now</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top-container'>
                            <h3>Unlimited Plan</h3>
                            <h1>$89.99</h1>
                            <span>Per month</span>
                        </div>

                        <div className='bottom-container'>
                            <span>1GB free space</span>
                            <span>Real-time sync</span>
                            <span>Unlimited Attatchments</span>
                            <span>Customize Themes</span>
                            <span>Priority email support</span>
                            <button>Start Now</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}