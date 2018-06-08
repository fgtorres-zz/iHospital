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
        // Setting active color on menu
        const home       = document.getElementById("section-hero").getBoundingClientRect().y;
        const activities = document.getElementById("section-activities").getBoundingClientRect().y;
        const products   = document.getElementById("section-trabalhos").getBoundingClientRect().y;
        const team       = document.getElementById("section-team").getBoundingClientRect().y;
        const homeItem   = document.getElementById("home-item").classList;
        const actItem    = document.getElementById("act-item").classList;
        const workItem   = document.getElementById("work-item").classList;
        const teamItem   = document.getElementById("team-item").classList;
        const activeArray = document.querySelectorAll('.nav-header-item.active')[0];;
        if (home <= 0 && home > -617) {
            activeArray && activeArray.length > 0 ? activeArray.classList.remove('active') : false;
            homeItem.add('active');
        } else if(activities <=0 && activities > -665) {
            activeArray && activeArray.length > 0 ? activeArray.classList.remove('active') : false;
            actItem.add('active');
        } else if(products <=0 && products > -477) {
            activeArray && activeArray.length > 0 ? activeArray.classList.remove('active') : false;
            workItem.add('active');
        } else if(team <=0 && team > -665) {
            activeArray && activeArray.length > 0 ? activeArray.classList.remove('active') : false;
            teamItem.add('active');
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
        if (element.style.width === '0px' || element.style.width === '') {
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
                            <li className="nav-header-item" id="home-item">
                                <a href="/" onClick={this.handleHome}>Home</a>
                            </li>
                            <li className="nav-header-item" id="act-item">
                                <a href="/" onClick={this.handleDoit}>O Que Fazemos</a>
                            </li>
                            <li className="nav-header-item" id="work-item">
                                <a href="/" onClick={this.handleProd}>Produtos</a>
                            </li>
                            <li className="nav-header-item" id="team-item">
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