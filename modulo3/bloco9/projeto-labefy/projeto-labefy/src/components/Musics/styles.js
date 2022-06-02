import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 55%;
    max-height: 100%;
  
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
        height: 55%;
    }
`

export const List = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 90%;
        max-height: 55%;
    }
`

export const AudioPlayer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    div{
        width: 100%;
        cursor: pointer;
    &:hover{
        border: 1px solid coral;
        }
    }
    p{
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 90%;
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
    overflow-y: auto;
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