import { BASE_URL, headers } from "../../constants";
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useDeleteTrip, useTripDetails } from '../../hooks/useRequestData';
import { Container, Carrossel, CardContainer, CardTrip, Button } from './styleTripDetailsPage';
import CircleLoader from 'react-spinners/CircleLoader';
import deleteButton from '../../img/delete-icon.png';
import RenderCandidates from "../../components/RenderCandidates";
import { useEffect } from "react";

const TripDetailsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  useProtectedPage('/login')

  const [trip, isLoading, error, getFunction] = useTripDetails()

  const { del } = useDeleteTrip()

  useEffect(() => {
    getFunction(`${BASE_URL}/trip/${id}`, headers)
  }, [])


  const detailsTrip = () => {
    return <>
      {trip && <CardTrip>
        <h3>Viagem: {trip.name}</h3>
        <p>{trip.description}</p>
        <p>Destino: {trip.planet}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Data da viagem: {trip.date}</p>
        <Button onClick={() => del(`${BASE_URL}/trips/${id}`, headers)} > <img src={deleteButton} 
        alt='icone de lixo' /></Button>
      </CardTrip>}
    </>
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)} >Back</Button>
      {isLoading && <CircleLoader color={'#BF7CFD'} isLoading={isLoading} size={350} />}
      {!isLoading && error && <h2>Erro 404!!</h2>}
      {!isLoading && trip?.candidates.length &&
        (<>
          <h2>Trip Details</h2>
          {detailsTrip()}
          <h2>Candidates</h2>
          <Carrossel>
            <RenderCandidates trip={trip} getFunction={getFunction} />
          </Carrossel>
        </>)}
      {!isLoading && !trip?.candidates.length &&
        (<>
          <h2>Trip Details</h2>
          {detailsTrip()}
          <h2>Candidates</h2>
          <Carrossel>
            <p>Não há nenhum candidato!</p>
          </Carrossel>
        </>)}
    </Container>
  );
}

export default TripDetailsPage