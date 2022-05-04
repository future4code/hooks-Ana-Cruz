import styled from "styled-components";


// App

export const AppContainer = styled.div`  //Class=App
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`
export const SectionContainer = styled.div`
width: 40vw;
margin: 10px 0;
`
export const TextoTitulo = styled.h2 `
display: flex;
justify-content: center;
margin-bottom: 20px;
`

// CardGrande

export const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

export const BigCardImagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

export const BigCardTitulo = styled.h4`
    margin-bottom: 15px;
`

export const BigCardTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

// CardPequeno

export const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

export const SmallCardImagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

export const SmallCardTitulo = styled.h4`
    margin-bottom: 15px;
`

export const SmallCardTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

// ImagemButton

export const ImagemButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

export const ImagemButtonImagem = styled.img`
    width: 30px;
    margin-right: 10px;
`