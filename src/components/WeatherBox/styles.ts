import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 420px;
  border-radius: 25px;
  background: var( --background-component);
  
  h1{
    font-size: 90px;
    font-weight: 400;
    color: var(--text);
  }
`;


export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 20px;
  
  h2{
    color: var(--text);
    font-size: 24px;
    margin-left: 5px;
  }
`;

export const WeatherContent = styled.div`
  h3{
    color: var(--text);
    font-size: 18px;
    font-weight: 300;
  }

  div{
    display: flex;
    margin: 10px auto;
    align-items: center;

  }

  .icon-props{
    width: 22px;
    height: 22px;
    color: var(--text);
    margin-right: 10px;
  }
`;