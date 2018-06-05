import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';
import './Header.css';

class Header extends Component{
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=()=>{
        const element = document.getElementById("header");
        const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (window.pageYOffset > 70 && viewW >=600) {
            element.classList.add("active");
        }
        else{
            element.classList.remove("active");            
        }
    }
    hideMenu = ()=>{
        const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewPortWidth < 600) {
            const element = document.querySelector('.nav-header')
            element.style.width = "0";    
        }
    }
    handleBurger = ()=>{
        const element = document.querySelector('.nav-header');
        console.log("element.style.width", element.style.width);
        if (element.style.width === '0px') {
            element.style.width = "100%";            
        } else {
            element.style.width = "0px";                        
        }
    }
    handleHome = (e)=>{
        e.preventDefault()
        this.hideMenu();
        const redirect = document.querySelector('#section-hero');
        smoothScroll(redirect);
    }
    handleDoit = (e)=>{
        e.preventDefault()
        this.hideMenu();
        const redirect = document.querySelector('#section-activities');
        smoothScroll(redirect);
    }
    handleProd = (e)=>{
        e.preventDefault()
        this.hideMenu();
        const redirect = document.querySelector('#section-trabalhos');
        smoothScroll(redirect);
    }
    handleTeam = (e)=>{
        e.preventDefault()
        this.hideMenu();
        const redirect = document.querySelector('#section-team');
        smoothScroll(redirect);
    }
    render(){
        return (
            <header className="header-container">
                <div className="header-fixed" id="header">
                    <div className="logo-header-holder">
                        {/* <img src="" alt="logo"/> */}
                        <i className="fal fa-chess-king-alt"></i>
                        Overdata Lab
                    </div>
                    <div className="menu-btn-holder">
                        <button className="menu-btn" onClick={this.handleBurger}>
                            <i className="fal fa-bars"></i>
                        </button>
                    </div>
                    <nav className="nav-header">
                        <ul>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleHome}>Home</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleDoit}>O Que Fazemos</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleProd}>Produtos</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleTeam}>Equipe</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;