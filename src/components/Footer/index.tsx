import { FaLinkedinIn,FaGithub } from 'react-icons/fa';
import { Container } from './styles';
export function Footer(){
  const linkedin = '#';
  const github = '#';
  return(
    <Container>
      <h3>Feito por Jackson Nascimento</h3>
      <a target="_blank" href={linkedin} rel="noopener noreferrer">
        <FaLinkedinIn className='icon-props'/>
      </a>
      <a target="_blank" href={github} rel="noopener noreferrer">
        <FaGithub className='icon-props'/>
      </a>
    </Container>
  );
}