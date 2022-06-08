import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 85%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
    }
`
const ImgBlurr = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    img{
        width: 100%;
        max-height: 100%;
    }
`

const Text = styled.div`
    position: absolute;
    left: 10px;
    bottom: 2px;
    color: white;
    text-shadow: 2px 2px 3px black; //x y blur color
    h2, h3{
        display: inline;
    }
`

export const ProfileCard = (props) => {

    return (
        <Container>
            <ImgBlurr blurImg={props.profile.photo}>
                <img src={props.profile.photo} alt={props.profile.photo_alt} />
            </ImgBlurr>
            <Text>
                <h2>{props.profile.name},</h2>
                <h3>{props.profile.age}</h3>
                <p>{props.profile.bio}</p>
            </Text>
        </Container>
    );
}
