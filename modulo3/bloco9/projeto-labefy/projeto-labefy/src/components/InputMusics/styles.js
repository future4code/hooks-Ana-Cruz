import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    input{
        color: gray;
        border: none;
        border-bottom: 2px solid coral;
        background-color: transparent;
        margin-right: 10px;
    }
    button{
        background-color: coral;
        border-radius: 20%;
    }
    button:hover{
        background-color: transparent;
        border: 2px solid coral;
        color: gray;
    }
`