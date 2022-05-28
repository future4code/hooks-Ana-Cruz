import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: coral;
    width: 100%;
    height: 100%;
    h1{
        font-size: 1.7rem;
        margin: 15px 0;
    }

@media (max-width: 768px) {
    font-size: 0.7rem;
    h1{
        font-size: 1.5rem;
        margin: 3px 0;
    }
  }
`
