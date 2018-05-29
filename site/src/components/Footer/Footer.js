import React, { Component } from 'react';
import './Footer.css';
import expand from '../../assets/expand.gif';

class Footer extends Component{
    render(){
        return(
            <footer className="section-footer">
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
                        <li><a href="">Home</a></li>
                        <li><a href="">O que fazemos</a></li>
                        <li><a href="">Portfólio</a></li>
                        <li><a href="">Equipe</a></li>
                    </ul>
                    <ul className="footer-ul">
                        <li><strong>Contato</strong></li>
                        <li><i class="fal fa-envelope"></i>felipe@overdatalab.com</li>
                    </ul>
                    <ul className="footer-ul">
                        <li className="logo-footer"><i class="fal fa-chess-king-alt"></i> Overdata Lab</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;