import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let mainNav, topBar;
let displayed = true;

export default class Header extends Component {

    componentDidMount() {
        mainNav = document.querySelector('.main-nav');
        topBar = document.querySelector('.top-bar');

        this.stickyNav();
        this.getDeviceWidth();
    }

    stickyNav() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= window.innerHeight * 0.9) {
                topBar.classList.add('fixed');
            } else {
                topBar.classList.remove('fixed');
            }
        });
    }

    getDeviceWidth() {
        if (window.innerWidth < 600) {
            this.displayNav();
        }

        this.windowResize();
    }

    windowResize() {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 600 && !displayed) {
                this.displayNav();
            }
        });
    }

    displayNav() {
        if (!displayed) {
            mainNav.classList.remove('hidden');
        } else {
            mainNav.classList.add('hidden');
        }

        displayed = !displayed;
    }

    render() {
        return (
            <div className='header portfolio'>
                <div className='top-bar'>
                    <div className='title-container'>
                        <Link to='/'>
                            <span>ArtWorx</span>
                        </Link>
                    </div>

                    <div className='nav-container'>
                        <div className='phone-nav' onClick={() => this.displayNav()}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='main-nav'>

                            <span>
                                <Link to='/'>
                                    Home
                                </Link>
                            </span>
                            <span className='active'>
                                <Link to='/portfolio'>
                                    Portfolio
                                </Link>
                            </span>
                            <span>
                                <Link to='/pricing'>
                                    Pricing
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <span>Our Portfolio</span>
                </div>
            </div>
        );
    }
}