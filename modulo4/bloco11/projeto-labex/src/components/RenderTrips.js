import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/index';
import { useRequestData } from '../hooks/useRequestData';
import { CardContainer, Carrossel } from './styles';


const RenderTrips = (props) => {
  const navigate = useNavigate()

  // const [trips, setTrips] = useState([])
  const data = useRequestData(`${BASE_URL}/trips`)

    return (
    <Carrossel>
      {data?.trips.map(trip => {
        return <CardContainer key={trip.id} >
          <h2>{trip.name}</h2>
          <p>{trip.description}</p>
          <p>Destino: {trip.planet}</p>
          <p>Duração: {trip.durationInDays} dias</p>
          <p>Data da viagem: {trip.date}</p>
          <button onClick={() => navigate(`/trips/application/${trip.id}`)} >Quero Essa Viagem!</button>
          {props.token && <button onClick={() => navigate(`/admin/trips/${trip.id}`)} >Ver Detalhes!</button>}
        </CardContainer>
      })}
    </Carrossel>
  );
}

export default RenderTrips