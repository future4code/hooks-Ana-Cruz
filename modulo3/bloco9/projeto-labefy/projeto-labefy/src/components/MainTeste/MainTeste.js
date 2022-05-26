import axios from 'axios';
import React from 'react';
import { MainContainer } from '../MainContainer/MainContainer';
import { ImgBackground, Transparency } from './styles';


export class MainTeste extends React.Component {
    render() {
        return (
            <ImgBackground>
                <Transparency>
                    <MainContainer />
                </Transparency>
            </ImgBackground>
        );
    }
}