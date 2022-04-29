import styled from "styled-components"


export const AppDad = styled.main`
    display: flex;
    justify-content: center;
`

//fex 1 1 0%
//1- como só existe ele em relação ao AppDad, então ele ocuparia todo o espaço do container(width)
//1- permite que tenha seu tamanho reduzido (mesmo definido pelo width ou flex-basis)
//0%- tamanho inicial antes da distribuição do espaço
export const AppContainer = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100vh;
    max-width: 600px;
    background-color: #E5DDD5;
`


// CHAT - 
export const ChatContainer = styled.div`
    flex: 1 1 0%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const CardMensagem = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    word-break: break-all;
    box-shadow: 5px;
    
`

export const CardH4 = styled.h4`
    margin: 0;
    font-size: 0.8em;
    font-weight: 600;
    color: #95b57b;
    margin-bottom: 2px;
`

export const CardP = styled.p`
    margin: 0;
`

export const ChatContainerDivEu = styled.div`
    display: flex;
    align-self: flex-end;
    box-shadow: 0px 3px 3px 1px grey;
    border-radius: 10px;
    background-color: #DCF8C6;
    width: max-content;
    max-width: 60%;
    padding: 8px;
    font-size: medium;
    margin: 5px;
    box-shadow: 5px;
`

export const DivNeutra = styled.div`
    background-color: #E5DDD5;
`

export const ChatContainerDivOutro = styled.div`
    display: flex;
    align-self: flex-start;
    box-shadow: 0px 3px 3px 1px grey;
    border-radius: 10px;
    background-color: white;
    width: max-content;
    max-width: 60%;
    padding: 8px;
    font-size: medium;
    margin: 5px;
`


// ENTER - Inputs e Button
export const EnterContainer = styled.div`
    height: 50px;
    display: grid;
    grid-template-columns: 100px 1fr 75px;
    gap: 10px;
    padding: 10px;
`

// export const Input = styled.div`
//     background-color: red
// `

