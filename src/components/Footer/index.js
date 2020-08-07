import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/imagens/logo.png'

function Footer() {
  return (
    <FooterBase>
        <img src={Logo} alt="Logo GioFlix" />
      <p>
        Orgulhosamente criado durante a {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
