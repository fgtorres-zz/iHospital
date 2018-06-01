import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="section-footer" id="section-footer">
                <div className="first-footer">
                    <h2>Descubra o que os dados podem te dizer</h2>
                    <p>Entre em contato em <strong>felipe@overdatalab.com</strong></p>
                </div>
                <div className="second-footer">
                    <ul className="footer-ul">
                        <li><strong>Sobre</strong></li>
                        <li>Somos uma empresa com foco em resultado e desenvolvimento de soluções para dados da
                        área de saúde. Transformamos os dados e extraimos deles informações que podem auxiliar,
                        nas pesquisas acadêmicas ou decisões empresariais.</li>
                    </ul>
                    <ul className="footer-ul">
                        <li><strong>Site</strong></li>
                        <li><a href="http://www.overdatalab.com">Home</a></li>
                        <li><a href="#section-activities">O que fazemos</a></li>
                        <li><a href="#section-trabalhos">Trabalhos</a></li>
                        <li><a href="#section-team">Equipe</a></li>
                    </ul>
                    <ul className="footer-ul">
                        <li><strong>Contato</strong></li>
                        <li><i className="fal fa-envelope"></i> felipe@overdatalab.com</li>
                    </ul>
                    <ul className="footer-ul">
                        <li className="logo-footer"><i className="fal fa-chess-king-alt"></i> Overdata Lab</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;