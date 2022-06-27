import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, headers } from '../constants/index';
import { useApproveCandidate } from '../hooks/useRequestData';
import { CardContainer, ContainerCandidates, CardButton, Section1 } from './styles';

const RenderCandidates = (props) => {
    const navigate = useNavigate()

    const [error, putFuncion] = useApproveCandidate()

    const decideCandidate = (choice, candidateId) => {
        putFuncion(`${BASE_URL}/trips/${props.trip.id}/candidates/${candidateId}/decide`,
            { approve: choice }, headers, props.trip.id)
        props.getFunction(`${BASE_URL}/trip/${props.trip.id}`, headers)
    }



    const renderCandidates = props.trip?.candidates.map(candidate => {
        return <CardContainer key={candidate.id}>
            <p>{candidate.name}</p>
            <CardButton>
                <button onClick={() => decideCandidate(true, candidate.id)} >ok</button>
                <button onClick={() => decideCandidate(false, candidate.id)} >X</button>
            </CardButton>
            {/* <p>Age: {candidate.age}<br />
        Country: {candidate.country}<br />
        Profession: {candidate.profession}<br />
        Description: {candidate.applicationText}</p> */}
        </CardContainer>
    })

    const renderApprovedCandidates = props.trip?.approved.map(candidate => {
        return <CardContainer key={candidate.id}>
            <p>{candidate.name}</p>
            {/* <p>Age: {candidate.age}<br />
        Country: {candidate.country}<br />
        Profession: {candidate.profession}<br />
        Description: {candidate.applicationText}</p> */}
        </CardContainer>
    })

    return (
        <ContainerCandidates>
            <Section1>
                <h4>Candidatos</h4>
                {props.trip && renderCandidates}
            </Section1>
            <Section1>
                <h4>Candidatos Aprovados</h4>
                {props.trip.approved && renderApprovedCandidates}
            </Section1>
            {/* {isLoading && <CircleLoader color={'#BF7CFD'} isLoading={isLoading} size={350} />}
      {!isLoading && error && <h2>Erro 404!!</h2>}
      {!isLoading && trips?.length && renderTrips}
      {!isLoading && !trips?.length && <p>Não há nenhuma viagem!</p>} */}
        </ContainerCandidates>
    );
}

export default RenderCandidates