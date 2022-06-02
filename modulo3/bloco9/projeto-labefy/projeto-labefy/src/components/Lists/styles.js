import styled from 'styled-components'

export const Container = styled.div`
/* border: 1px solid green; */
margin: 20px 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 95%;
height: 100%;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    margin: 0px 0px;
}
`