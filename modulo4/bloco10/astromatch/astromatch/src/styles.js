import styled from 'styled-components';
import 'animate.css';


export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: silver;

    @media screen and (max-width: 425px) {
        background-color: gray;
    }
`

export const Container = styled.div`
    background-color: white;
    width: 390px;
    height: 600px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    @media screen and (max-width: 425px) {
        width: 95%;
        height: 85%;
    }
`