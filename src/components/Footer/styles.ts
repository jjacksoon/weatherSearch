import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 30px;
 
  a{
    color: inherit
  }

  a + a {
    padding: 15px;
  }
  
  .icon-props{
    width: 40px;
    height: 40px;
    color: var(--text);
  }

  h3{
    color: var(--text);
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;