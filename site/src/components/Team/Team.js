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
                    <p>Felipe Torres</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={joao} alt=""/>
                    </div>
                    <p>João Pedro Villas-Boas</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={jocta} alt=""/>
                    </div>
                    <p>Jocta Argôlo</p>
                </div>
                <div className="team-holder">
                    <div className="team-img-holder">
                        <img src={rafael} alt=""/>
                    </div>
                    <p>Rafael Melo</p>
                </div>
            </section>
        )
    }
}

export default Team;