import { useNavigate } from 'react-router-dom';
import { Button, Container } from './styleHomePage';



const HomePage = () => {
  const navigate = useNavigate()
  
    return (
      <Container>
        <Button onClick={() => navigate('/admin')} >Admin</Button>
        <Button onClick={() => navigate('/trips/list')} >Lista de Viagens</Button>
      </Container>
    );
  }

  export default HomePage