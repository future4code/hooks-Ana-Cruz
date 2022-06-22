import { useNavigate } from 'react-router-dom';
import { Container } from './styleHomePage';


const HomePage = () => {
  const navigate = useNavigate()
  
    return (
      <Container>
        <button onClick={() => navigate('/admin')} >Admin</button>
        <button onClick={() => navigate('/trips/list')} >Lista de Viagens</button>
      </Container>
    );
  }

  export default HomePage