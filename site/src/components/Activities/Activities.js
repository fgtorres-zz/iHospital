import React, { Component } from 'react';
import './Activities.css';
import data from '../../assets/icons/Collection/bigData.png';
import con from '../../assets/icons/Collection/con1.png';
import fim from '../../assets/icons/Collection/final.png';
import statistics from '../../assets/icons/Collection/icons8-scatter-plot.png';
import dash from '../../assets/icons/Collection/icons8-profit-chart.png';

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
                        <p>Com uma ampla experiência em bases de dados e análises de dados médicos, nós conseguimos
                        extrair informações relevantes integrando dados. Informações essas que podem embassar 
                        decisões gerenciais ou auxiliar no entendimento da saúde nacional.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={con} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Bioinformática</h3>
                        <p>Atuamos com análises de dados biológicos e biomédicos. Análise de SNPs, montagem de 
                        genomas de sequenciamento NGS, análise de RNAseq, bancos de dados biológicos e 
                        desenvolvimento de ferramentas na área de bioinformática e computação aplicada a saúde.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={statistics} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Mineração de bases de dados</h3>
                        <p>Fundamentados em bases de dados proprietárias ou públicas, nós atuamos na exploração e 
                        mineração desses dados com técnicas e algoritmos avançados de computação para um propósito
                        específico.</p>
                    </div>
                </div>
                <div className="box-activities">
                    <div className="img-activ-holder">
                        <img src={dash} alt="big-data-icon"/>
                    </div>
                    <div className="activities-text">
                        <h3>Dashboards e painéis de dados</h3>
                        <p>Nós construímos dashboards e paineis de dados para visualização e análise de dados em
                        tempo real e de forma facilitada. Trazendo assim maior comodidade e facilidade para a 
                        tomada de decisão empresarial.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Activities;