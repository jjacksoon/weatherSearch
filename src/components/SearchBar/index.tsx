import searchImg from '../../assets/search.png';
import { Container } from './styles';

export function SearchBar(){
  return(
      <Container>
        <button>
          <img src={searchImg} alt="Pesquisar" />
        </button>
        <input type="text" placeholder='Pesquisar local'/>
      </Container>
  );
}