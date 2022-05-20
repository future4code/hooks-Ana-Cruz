import styled from 'styled-components'

export const AppDad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerMain = styled.div`
    border: 2px solid purple;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
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
        margin-bottom: 30px;
        color: purple;
    }
    p{
        color: purple;
    }
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

export const CardUser = styled.div`
    /* border: 1px solid green; */
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div{
        /* border: 1px solid green; */
        cursor: pointer;
    }
    p{
        color: purple;
    }
    button{
        width: 20%;
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