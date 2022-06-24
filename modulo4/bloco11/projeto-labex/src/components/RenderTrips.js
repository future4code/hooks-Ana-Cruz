import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/index';


const RenderTrips = (props) => {
    const navigate = useNavigate()

    const [trips, setTrips] = useState([])

    useEffect(() => { getTrips() }, [])

    const getTrips = () => {
      axios.get(`${BASE_URL}/trips`)
        .then(res => setTrips(res.data.trips))
        .catch(err => console.log(err.message))
    }

  const tripsComponent = trips.map(trip => {
    return <div key={trip.id} >
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>
      <p>Destino: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Data da viagem: {trip.date}</p>
      <button onClick={() => navigate(`/trips/application/${trip.id}`)} >Quero Essa Viagem!</button>
      {props.token && <button onClick={() => navigate(`/admin/trips/${trip.id}`)} >Ver Detalhes!</button>}
    </div>
  })

    return (
        <div>
            {tripsComponent}
        </div>
    );
}

export default RenderTrips