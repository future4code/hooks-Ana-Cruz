import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/index';
import { useListTrips } from '../hooks/useRequestData';
import { Carrossel, Button, CardContainerList } from './styles';
import CircleLoader from 'react-spinners/CircleLoader';

const RenderTrips = () => {
  const navigate = useNavigate()

  const [trips, isLoading, error] = useListTrips(`${BASE_URL}/trips`)

  const renderTrips = trips?.map(trip => {
    return <CardContainerList key={trip.id} >
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
      <p>Destino: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Data da viagem: {trip.date}</p>
      <Button onClick={() => navigate(`/trips/application/${trip.id}`)} >Quero Essa Viagem!</Button>
    </CardContainerList>
  })

    return (
    <Carrossel>
      <h2>Trips</h2>
      {isLoading && <CircleLoader color={'#BF7CFD'} isLoading={isLoading} size={350} />}
      {!isLoading && error && <h2>Erro 404!!</h2>}
      {!isLoading && trips?.length && renderTrips}
      {!isLoading && !trips?.length && <p>Não há nenhuma viagem!</p>}
    </Carrossel>
  );
}

export default RenderTrips