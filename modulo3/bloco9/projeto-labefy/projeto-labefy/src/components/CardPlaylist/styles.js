import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    max-width: auto;
    height: 40px;
    
    &:hover{
        background-color: rgba(255, 127, 80, 0.7);
        color: black;
    }
}

img{
    max-width: 40%;
    height: auto;
    background-color: rgba(255, 127, 80, 0.8);
    border-radius: 30%;
    cursor: pointer;
}
`