import React, { Component } from 'react';
import Header from '../components/pricing/header';
import PricingDetails from '../components/pricing/pricing-details';
import Footer from '../components/home/footer';

export default class Pricing extends Component {
    render() {
        return (
            <div className='main-container'>
                <div>
                    <Header />
                </div>

                <div>
                    <PricingDetails />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}