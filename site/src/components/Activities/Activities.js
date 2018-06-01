import React, { Component } from 'react';
import './Activities.css';
import data from '../../assets/bigData.png';
import con from '../../assets/con.png';
import statistics from '../../assets/scatter.png';
import dash from '../../assets/chart.png';

class Activities extends Component{
    render(){
        return(
            <section className="section-activities" id="section-activities">
                <h2>O que fazemos</h2>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={data} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Análise de dados</h3>
                        <p>Realizamos análises integradas de dados de múltiplas fontes para extração, mineração e descoberta
                        de informações.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={con} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Bioinformática</h3>
                        <p>Atuamos com gerenciamento de bancos de dados clínicos e desenvolvimento de ferramentas na área de bioinformática e computação aplicada a saúde.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={statistics} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Mineração de bases de dados</h3>
                        <p>Trabalhamos com exploração e mineração de dados com técnicas e algoritmos
                         avançados de computação e estatística.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={dash} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Dashboards e painéis de dados</h3>
                        <p>Desenvolvemos dashboards e paineis de dados para visualização e análise de dados em
                        tempo real e de forma facilitada.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Activities;