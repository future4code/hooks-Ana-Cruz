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

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: green;
    position: absolute; //para deixar o item que for Absoluto em referencia ao Relative
    //se for translate(0, 0) fica no centro do H1 RELATIVE
    transform: ${props => props.teste === 'ListMatch' ? 'translate(-170px, 5px)' : 'translate(170px, 5px)'};
`

export const Header = (props) => {
    console.log(props.currentPage)
    return (
        <Container>
            <h2>Astromatch</h2>
            {props.currentPage === 'ListMatch'
                ? <Button teste={props.currentPage}
                    onClick={() => props.changePage('ChoiceMatch')}  ><CgProfile /></Button>
                : <Button teste={props.currentPage}
                    onClick={() => props.changePage('ListMatch')} ><FaListUl /></Button>}
        </Container>
    );
}
