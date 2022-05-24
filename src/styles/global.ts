import {createGlobalStyle} from 'styled-components';
import bgImg from '../assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
  :root{
    --text: #FFFFFF;
    --background-component:rgba(0,0,0,0.6);
    --background-component-light:rgba(255,255,255,0.5);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1080px){   //Tablets
      font-size: 93.75%;      
    }
    @media (max-width: 720px){   //Smartphones
      font-size: 93.75%;
    }

  }
  
  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea{
    font-family: 'Poppins', sans-serif;
  }
`;