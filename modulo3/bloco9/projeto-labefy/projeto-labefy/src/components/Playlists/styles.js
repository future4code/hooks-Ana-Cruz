import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
        height: 45%;
    }
`

export const List = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 90%;
    }
`