import React, { Component } from 'react';
import Header from '../components/pricing/header';
import img1 from '../images/pricing/details/img1.jpg';
import img2 from '../images/pricing/details/img2.jpg';
import img3 from '../images/pricing/details/img3.jpg';
import PricePlan from '../components/pricing/pricePlan';
import PricingDetails from '../components/pricing/pricing-details';
import Footer from '../components/home/footer';

export default class Pricing extends Component {
    render() {
        return (
            <div className='main-container pricing dark-bg'>
                <div>
                    <Header />
                </div>

                <div>
                    <PricePlan image={img1} heading='Starter Plan' />
                </div>

                <div>
                    <PricePlan image={img2} heading='Enterprise Plan' />
                </div>

                <div>
                    <PricePlan image={img3} heading='Unlimited Plan' />
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