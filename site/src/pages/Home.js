import React,{ Component } from 'react';
import Header from '../components/Header/Header.js';
import Hero from '../components/Hero/Hero.js';
import Activities from '../components/Activities/Activities.js';
import Products from '../components/Products/Products.js';
import Team from '../components/Team/Team.js';
import Footer from '../components/Footer/Footer.js';

class Home extends Component{
    render(){
        return(
            <main>
                <Header />
                <Hero />
                <Activities />
                <Products />
                <Team />
                <Footer />
            </main>
        )
    }
}

export default Home;