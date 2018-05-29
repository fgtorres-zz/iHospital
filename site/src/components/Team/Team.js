import React, { Component } from 'react';
import './Team.css';
import felipe from '../../assets/felipe.jpg';
import joao from '../../assets/joao.jpg';
import jocta from '../../assets/jocta.jpeg';
import rafael from '../../assets/rafael.jpg';

class Team extends Component{
    render(){
        return(
            <section className="section-team">
                <h2>Quem somos</h2>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={felipe} alt=""/>
                    </div>
                    <h4>Felipe Torres</h4>
                    <p class="subtitle">CEO e Cientista de dados</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={joao} alt=""/>
                    </div>
                    <h4>João Pedro Villas-Boas</h4>
                    <p class="subtitle">Analista de Backend</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={jocta} alt=""/>
                    </div>
                    <h4>Jocta Torres</h4>
                    <p class="subtitle">Cientista de dados</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={rafael} alt=""/>
                    </div>
                    <h4>Rafael Melo</h4>
                    <p class="subtitle">Analista de Frontend</p>
                </div>
            </section>
        )
    }
}

export default Team;