import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { Button, CardTrip, Container, ContainerButton } from './styleAdminHomePage';
import { BASE_URL } from '../../constants';
import { useListTrips } from '../../hooks/useRequestData';
import CircleLoader from 'react-spinners/CircleLoader';

const AdminHomePage = () => {
  const navigate = useNavigate()

  useProtectedPage('/login')

  const [trips, isLoading, error] = useListTrips(`${BASE_URL}/trips`)

  const renderTripsNames = trips?.map(trip => {
    return <CardTrip onClick={() => navigate(`/admin/trips/${trip.id}`)} key={trip.id} >{trip.name}</CardTrip>
  })

  return (
    <Container>
      <ContainerButton>
        <Button onClick={() => navigate(-1)} >Back</Button>
        <Button onClick={() => navigate('/admin/trips/create')} >Create Trip</Button>
      </ContainerButton>
      <h2>Trips</h2>
      {isLoading && <CircleLoader color={'#BF7CFD'} isLoading={isLoading} size={200} />}
      {!isLoading && error && <h2>Erro 404!!</h2>}
      {!isLoading && trips?.length && renderTripsNames}
      {!isLoading && !trips?.length && <p>Não há nenhuma viagem!</p>}
    </Container>
  );
}

export default AdminHomePage