import React from 'react';
import { Lists } from '../Lists/Lists';
import { Container } from './styles';


export class MainContainer extends React.Component {
    
    render() {
        return (
            <Container>
                <h1>Labefy &#9835; </h1>
                <Lists />
            </Container>
        );
    }
}