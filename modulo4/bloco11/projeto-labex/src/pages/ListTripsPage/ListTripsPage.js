import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { BASE_URL } from '../../constants';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';

const ListTripsPage = () => {
  const navigate = useNavigate()

  const [trips, setTrips] = useState([])
  const [applyTrip, setApplyTrip] = useState(false)
  const [idSelectedTrip, setIdSelectedTrip] = useState('')

  useEffect(() => { getTrips() }, [])

  const getTrips = () => {
    axios.get(`${BASE_URL}/trips`)
      .then(res => setTrips(res.data.trips))
      .catch(err => console.log(err.message))
  }

  const selectTrip = (id) => {
    setApplyTrip(true)
    setIdSelectedTrip(id)
  }


  const tripsComponent = trips.map(trip => {
    return <div key={trip.id} >
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>
      <p>Destino: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Data da viagem: {trip.date}</p>
      <button onClick={() => selectTrip(trip.id)} >Quero Essa Viagem!</button>
    </div>
  })

  return (
    <div>
      {!applyTrip
        ? <div>
          <button onClick={() => navigate(-1)} >Back</button>
          {tripsComponent}
        </div>
        : <div>
          <ApplicationFormPage idTrip={idSelectedTrip} />
        </div>}

    </div>
  );
}

export default ListTripsPage