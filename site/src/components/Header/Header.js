import React, { Component } from 'react';
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
    render(){
        return (
            <header className="header-container">
                <div className="header-fixed" id="header">
                    <div className="logo-header-holder">
                        {/* <img src="" alt="logo"/> */}
                        <i class="fal fa-chess-king-alt"></i>
                        Overdata Lab
                    </div>
                    <nav className="nav-header">
                        <ul>
                            <li className="nav-header-item">
                                <a href="">Home</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="#section-activities">O Que Fazemos</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="">Portfólio</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="#section-team">Equipe</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;