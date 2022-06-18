import styled from "styled-components";

const Container = styled.div`
    margin: 2px 0;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    img{
        margin: 0 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    :hover{
        background-color: lightgrey;
    }
`

export const SmallProfileCard = (props) => {

    return (
        <Container>
                <img src={props.profile.photo} alt={props.profile.photo_alt} />
                <p>{props.profile.name}</p>
        </Container>
    );
}
