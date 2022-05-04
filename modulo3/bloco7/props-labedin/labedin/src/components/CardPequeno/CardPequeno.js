import React from "react";
import './CardPequeno.css'
import {SmallCardContainer, SmallCardImagem, SmallCardTitulo, SmallCardTexto} from '../../AppStyles';

function CardPequeno(props) {

    return (
        <SmallCardContainer>
        <SmallCardImagem src={ props.imagem } />
        <SmallCardTexto>
            <SmallCardTitulo>{ props.nome }</SmallCardTitulo>
            <p>{ props.descricao }</p>
        </SmallCardTexto>
    </SmallCardContainer>
    )
}

export default CardPequeno;