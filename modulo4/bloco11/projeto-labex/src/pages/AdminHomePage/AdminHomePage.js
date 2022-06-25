import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import RenderTrips from '../../components/RenderTrips';
import { Button, Container, ContainerButton } from './styleAdminHomePage';

const AdminHomePage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('tokenLabeX')

  useProtectedPage('/login')

  return (
    <Container>
      <ContainerButton>
        <Button onClick={() => navigate(-1)} >Back</Button>
        <Button onClick={() => navigate('/admin/trips/create')} >Create Trip</Button>
      </ContainerButton>
      <RenderTrips token={token} />
    </Container>
  );
}

export default AdminHomePage