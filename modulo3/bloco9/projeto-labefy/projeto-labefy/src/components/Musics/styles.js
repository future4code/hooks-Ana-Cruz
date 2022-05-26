import styled from 'styled-components'

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 55%;
    overflow-y: auto;
    h2{
        align-self: center;
    }
    p{
        margin: 2px;
    }
    img{
        margin-top: 10px;
        max-width: 10%;
        height: auto;
        background-color: rgba(255, 127, 80, 0.8);
        border-radius: 50%;
        align-self: center;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 45%;
    }
`

export const AudioPlayer = styled.div`
    div{
        cursor: pointer;
    }
    :hover{
        border: 1px solid coral;
    }
`

export const DivPlayer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`
    
export const Player = styled.div`
    align-self: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        margin-top: 10px;
        background-color: coral;
        border-radius: 20%;
    }
    button:hover{
        background-color: transparent;
        border: 2px solid coral;
        color: gray;
    }
`