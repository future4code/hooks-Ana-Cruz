import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigator = useNavigate()
  
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={() => navigator('/AdminHomePage')} >Admin</button>
        <button onClick={() => navigator('/ListTripsPage')} >Lista de Viagens</button>
      </div>
    );
  }

  export default HomePage