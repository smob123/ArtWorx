import React, { Component } from 'react';
import '../styles/index.css';
import Header from '../components/portfolio/header';
import About from '../components/portfolio/about-us';
import OurWork from '../components/home/our-work';
import Clients from '../components/portfolio/clients';
import Footer from '../components/home/footer';

export default class Portfolio extends Component {
    render() {
        return (
            <div className='main-container'>
                <div>
                    <Header />
                </div>

                <div>
                    <About />
                </div>

                <div>
                    <OurWork />
                </div>

                <div>
                    <Clients />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}