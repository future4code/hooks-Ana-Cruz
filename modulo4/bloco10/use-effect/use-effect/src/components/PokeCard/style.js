import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 40vw;
    height: 70vh;
    border: 3px solid ${(props) => props.colorBorder};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`