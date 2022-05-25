import { Footer } from '../../components/Footer';
import { SearchBar } from '../../components/SearchBar';
import { WeatherBox } from '../../components/WeatherBox';
import { Container, Content } from './styles';
export function Home(){
  return(
      <>
        <Container>
          <SearchBar/>
          <Content>
            <WeatherBox/>
            <Footer/>      
          </Content>
        </Container>
      </>
  )
}
