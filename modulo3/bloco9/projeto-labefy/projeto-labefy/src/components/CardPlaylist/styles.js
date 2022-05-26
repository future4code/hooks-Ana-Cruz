import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

div{
    width: 250px;
    max-width: auto;
    height: 40px;
}
div:hover{
    background-color: rgba(255, 127, 80, 0.7);
    color: black;
}
img{
    max-width: 40%;
    height: auto;
    background-color: rgba(255, 127, 80, 0.8);
    border-radius: 30%;
    cursor: pointer;
}
`