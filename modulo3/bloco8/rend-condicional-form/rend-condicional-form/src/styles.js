import styled from 'styled-components'

export const AppDad = styled.div`
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    max-width: 600px;
    height: max-content;
    text-align: center;
    padding-bottom: 30px;
    background-color: aqua;

    button{
        margin-top: 50px;
        border-radius: 10px;
    }
`