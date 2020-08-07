import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
import Logo from '../../assets/imagens/logo.png'
import Button from '../Button'
function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="K2Flix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;