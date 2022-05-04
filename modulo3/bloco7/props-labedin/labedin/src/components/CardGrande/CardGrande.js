import React from 'react';
// import './CardGrande.css'
import {BigCardContainer, BigCardImagem, BigCardTitulo, BigCardTexto} from '../../AppStyles';

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardImagem src={ props.imagem } />
            <BigCardTexto>
                <BigCardTitulo>{ props.nome }</BigCardTitulo>
                <p>{ props.descricao }</p>
            </BigCardTexto>
        </BigCardContainer>
    )
}

export default CardGrande;