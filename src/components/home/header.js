import React, { Component } from 'react';

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
            if (window.pageYOffset > 500) {
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
            <div className='header'>
                <div className='top-bar'>
                    <div className='title-container'>
                        <span>ArtWorx</span>
                    </div>

                    <div className='nav-container'>
                        <div className='phone-nav' onClick={() => this.displayNav()}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='main-nav'>
                            <span>Home</span>
                            <span>Blog</span>
                            <span>Portfolio</span>
                            <span>Features</span>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <span>Creative Design</span>
                    <span>Far far away, behind the word mountains. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
                </div>
            </div>
        );
    }
}