import React from 'react';
import './ImagemButton.css'
import {ImagemButtonContainer, ImagemButtonImagem} from '../../AppStyles';


function ImagemButton(props) {
    return (
        <ImagemButtonContainer>
            <ImagemButtonImagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtonContainer>

    )
}

export default ImagemButton;