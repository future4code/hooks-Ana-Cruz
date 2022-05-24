import styled from 'styled-components'

export const AppDad = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerMain = styled.div`
    border: 2px solid purple;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 315px;
    height: 90vh;
`

export const ContainerHome = styled.div`
    /* border: 1px solid red; */
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 100px;
        margin-bottom: 20px;
    }
    h1{
        margin-bottom: 2px;
        color: purple;
    }
    p{
        margin-bottom: 20px;
        color: purple;
    }
    button{
        width: 80%;
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        background-color: purple;
        color: white;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: purple;
        border: 2px solid purple;
    }
`

export const PageUsersList = styled.div`
    /* border: 1px solid red; */
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    button{
        width: 50%;
        padding: 8px;
        margin: 15px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        background-color: purple;
        color: white;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: purple;
        border: 2px solid purple;
    }
`

export const CardUserList = styled.div`
    /* border: 1px solid green; */
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div{
        border: 1px solid purple;
        min-width: 50%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: purple;
        text-align: center;
        cursor: pointer;
    }
    div:hover{
        background-color: purple;
        color: white;
    }

`

export const CardUser = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div{
        border: 1px solid purple;
        padding: 15px 0;
        width: 70%;
        border-radius: 10px;
        color: purple;
        text-align: center;
    }
    button{
        width: 30%;
        height: 60%;
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        background-color: purple;
        color: white;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: purple;
        border: 2px solid purple;
    }
`
export const ContainerInput=styled.section`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 80%;
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        border: 2px solid purple;
    }
    button{
        width: 80%;
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        background-color: purple;
        color: white;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: purple;
        border: 2px solid purple;
    }
`

export const InputStyled=styled.input`
        width: 80%;
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 10px;
        border: 2px solid purple;
`