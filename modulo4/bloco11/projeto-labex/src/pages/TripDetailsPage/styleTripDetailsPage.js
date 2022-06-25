import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid red;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

export const Carrossel = styled.div`
    /* border: 1px solid blue; */
    outline: 1px solid blue;
    width: 100%;
    height: 40%;
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
`