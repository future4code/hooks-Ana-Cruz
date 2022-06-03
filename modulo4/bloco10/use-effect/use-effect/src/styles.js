import styled from 'styled-components';
import imgCenario from './img/cenario12.jpeg'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${imgCenario});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100vh;
    width: 100vw;
    h2{
        color: white;
        text-shadow: 1px 1px black;
    }
`
export const Select = styled.select`
    /* display: none; */
    width: 120px;
    height: 30px;
    background-color: white;
    border: 2px solid silver;
    option{
        background-color: silver;
    }
`
