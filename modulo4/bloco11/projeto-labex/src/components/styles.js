import styled from 'styled-components';

export const Carrossel = styled.div`
    /* border: 1px solid blue; */
    outline: 1px solid blue;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* overflow-x: scroll; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const CardContainer = styled.div`
    border: 1px solid white;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: pink;
`