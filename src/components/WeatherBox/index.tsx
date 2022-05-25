import { Container,  HeaderContent, WeatherContent } from "./styles";
import {FaThermometerHalf, FaWind, FaRegSnowflake} from 'react-icons/fa'
import sunImg from '../../assets/sun.png';

export function WeatherBox(){
  return(
    <Container>
      <HeaderContent>
        <img src={sunImg} alt="Icone" />
        <h2>São Luís, MA</h2>
      </HeaderContent>

        <h1>25ºC</h1>

      <WeatherContent>
        <div>
          <FaThermometerHalf className="icon-props"/>
          <h3>Minima</h3>
        </div>
        <div>
          <FaRegSnowflake className="icon-props"/>
          <h3>Umidade</h3>
        </div>
        <div>
          <FaWind className="icon-props"/>
          <h3>Ventos</h3>
        </div>
      </WeatherContent>
    </Container>
  );
}