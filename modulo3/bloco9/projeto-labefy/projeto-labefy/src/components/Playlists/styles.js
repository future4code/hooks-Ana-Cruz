import styled from 'styled-components'

export const Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    width: 40%;
    overflow-y: auto;
    h2{
        align-self: center;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 45%;
    }
`