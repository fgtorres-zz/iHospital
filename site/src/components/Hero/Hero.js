import React, { Component } from 'react';
import './Hero.css';
import numbers from '../../assets/numbers.gif';

const style = {
    backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url('+numbers+')',
}

class Hero extends Component{
    render(){
        return(
            <section className="section-hero" id="section-hero">
                <div className="hero-img-holder" style={style}>
                    <div className='hero-text-holder'>
                        {/* <h1>Inteligência em Análise de Dados</h1> */}
                        <h1>Overdata Lab</h1>
                        {/* <h5>Descubra o que os dados podem te dizer</h5> */}
                        <h5>Inteligência em Análise de Dados</h5>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;