import React from "react";
import "../../styles/header.css"





const Header = () => {
    return (
        <>
            <header class="clearfix">
                <div class="container">
                    <div class="header-left">
                        <h1>Your company</h1>
                    </div>
                    <div class="header-right">
                        <label for="open">
                            <span class="hidden-desktop"></span>
                        </label>
                        <input type="checkbox" name="" id="open" />
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Inspiration</a>
                            <a href="#">Articles</a>
                            <a href="#">Works</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
            <section class="clearfix">
                <div class="container">
                    <div class="section-left">
                        <h1 class="section-title">Lorem ipsum dolor sit amet.</h1>
                        <h5 class="section-tagline">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                    <div class="section-right">
                        <button class="learn-more">Learn more</button>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Header;
