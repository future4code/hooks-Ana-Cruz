import { useNavigate } from 'react-router-dom';

const ListTripsPage = () => {
  const navigator = useNavigate()
  
    return (
      <div>
        <button onClick={() => navigator(-1)} >Voltar</button>
        <h1>Lista de Viagens</h1>
      </div>
    );
  }

  export default ListTripsPage