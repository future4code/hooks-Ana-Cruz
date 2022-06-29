import styled from 'styled-components';

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

export const Carrossel = styled.div`
    /* border: 1px solid blue; */
    /* outline: 1px solid blue; */
    width: 100%;
    height: 40%;
    overflow: hidden;
    /* overflow-x: scroll; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const CardContainer = styled.div`
    /* border: 1px solid white; */
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const CardTrip = styled.div`
    /* border: 1px solid green; */
    /* width: 70%;
    height: 80%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
    }
`

export const Button = styled.button`
  margin: 15px 0;
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    animation: myanim .5s infinite;
    transform: translate3d(0, 12px, 0);

    @keyframes myanim {
    0% {box-shadow: rgba(255,255,255, .8) -3px 11px 40px 5px;}
    25% {box-shadow: rgba(255,255,255, .8) -1px 10px 45px 8px;}
    50% {box-shadow: rgba(255,255,255, .8) 0px 10px 40px 5px;}
    75% {box-shadow: rgba(255,255,255, .8) 1px 10px 45px 8px;}
    100% {box-shadow: rgba(255,255,255, .8) 3px 11px 40px 5px;}
    }
  }
  :focus {
  box-shadow: rgba(255,255,255, .8) 2px 8px 4px -6px;
 
  }
`