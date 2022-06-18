import styled from "styled-components";
import { FaListUl } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    h2{
        position: relative; //é necessário deixar algo relativo
    }
`

const Buttons = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: green;
    position: absolute; //para deixar o item que for Absoluto em referencia ao Relative
    //se for translate(0, 0) fica no centro do H1 RELATIVE
    transform: ${props => props.teste === 'ListMatch' ? 'translate(-152px, 5px)' : 'translate(152px, 5px)'};

    @media screen and (max-width: 425px) {
        transform: ${props => props.teste === 'ListMatch' ? 'translate(-40vw, 5px)' : 'translate(40vw, 5px)'};
    }
`

export const Header = (props) => {
    return (
        <Container>
            <h2>Astromatch</h2>
            {props.currentPage === 'ListMatch'
                ? <Buttons teste={props.currentPage}
                    onClick={() => props.changePage('ChoiceMatch')}  ><CgProfile /></Buttons>
                : <Buttons teste={props.currentPage}
                    onClick={() => props.changePage('ListMatch')} ><FaListUl /></Buttons>}
        </Container>
    );
}
