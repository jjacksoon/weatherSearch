import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 70px;
  background-color: var(--background-component);
  border-radius: 48px;
  /* margin-top: 200px;
  margin-left: 267px; */
  
  button{
    border: none;
    border-radius: 48px;
    width: 40px;
    height: 40px;
    background-color: var(--background-component-light);
    margin: 10px;
    cursor: pointer;
    
    img{
      width: 20px;
      height: 20px;
    }
  }

  input{
      flex: 0.9;
      height: 40px;
      border: none;
      outline: none;
      font-size: 18px;
      background-color: transparent;
      /* font-size: 24px; */
      color: var(--text);

      ::placeholder{
        color: var(--text);
        opacity: 0.3;
        padding-left: 10px;
        font-weight: 400;
        font-size: 18px;
      }
    }
`;