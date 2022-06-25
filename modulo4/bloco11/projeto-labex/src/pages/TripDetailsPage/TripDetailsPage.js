import { BASE_URL, headers } from "../../constants";
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useTripDetails } from '../../hooks/useTripDetails';
import { Container, Carrossel, CardContainer } from './styleTripDetailsPage'

const TripDetailsPage = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  useProtectedPage('/login')


  const data = useTripDetails(`${BASE_URL}/trip/${id}`, headers)

  // console.log('details', data, '\nlocalStorage', headers)


  return (
    <Container>
      <button onClick={() => navigate(-1)} >Back</button>
      <h2>Detalhes</h2>
      {data && <>
      <h3>Viagem: {data.trip.name}</h3>
      <p>{data.trip.description}</p>
      <p>Destino: {data.trip.planet}</p>
      <p>Duração: {data.trip.durationInDays} dias</p>
      <p>Data da viagem: {data.trip.date}</p></> }
      
      <h2>Candidatos</h2>
      <Carrossel>
        {/* { array?.map() }   esse ? é a mesma coisa que colocar { array && array.map } */}
        {data?.trip.candidates.map(candidate => {
          return <CardContainer key={candidate.id}>
            <h2>Name: {candidate.name}</h2>
            <p>Age: {candidate.age}<br />
              Country: {candidate.country}<br />
              Profession: {candidate.profession}<br />
              Description: {candidate.applicationText}</p>
          </CardContainer>
        })}
      </Carrossel>
    </Container>
  );
}

export default TripDetailsPage