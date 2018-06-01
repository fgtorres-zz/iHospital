import React, { Component } from 'react';
import './Products.css';
import app from '../../assets/iHospital.png';

class Products extends Component{
    render(){
        return(
            <section className="section-products" id="section-trabalhos">
                <h2>Nossos Trabalhos</h2>
                <div className="produtos-holder">
                    <div className="app-img-holder">
                        <img src={app} alt="iHospital logo"/>
                    </div>
                    <div className="app-img-sub">
                        <h4>iHospital</h4>
                        <p>Software de solução analítica de dados públicos da área de saúde brasileiros.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Products;