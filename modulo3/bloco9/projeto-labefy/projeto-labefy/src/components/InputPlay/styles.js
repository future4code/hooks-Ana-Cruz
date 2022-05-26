import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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