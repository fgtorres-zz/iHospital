import React, { Component } from 'react';
import './Activities.css';
import data from '../../assets/icons/Collection/bigData.png';
import con from '../../assets/icons/Collection/con.png';
import fim from '../../assets/icons/Collection/final.png';

class Activities extends Component{
    render(){
        return(
            <section className="section-activities">
                <h2>O que fazemos</h2>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={data} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Análise de dados</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro sint reprehenderit corrupti voluptatibus.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={con} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Novas conexões</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro sint reprehenderit corrupti voluptatibus.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={fim} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Conclusões Embasadas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro sint reprehenderit corrupti voluptatibus.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Activities;