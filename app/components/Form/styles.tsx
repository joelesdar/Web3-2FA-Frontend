import styled from '@emotion/styled'

export const StyledForm = styled.div`
  border-radius: 16px;
  background: white;
  padding: 32px;
  width: fit-content;
  margin: 16px auto;

  h1 {
    color: #0E8388;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 700;
  }

  .subtitle {
    color: #2C3333;
    text-align: center;
;
  }

  p, input {
    color: #2C3333;
    margin-bottom: 8px;
    max-width: 300px;
  }

  .sign-up-button {
    margin-top: 32px;
  }
  
  input {
    width: 100%;
    border: 1px solid #2C3333;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 10px;
  }

  .register-input {
    border-radius: 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #2C3333;
    padding: 0px;
  }

  .submit-button {
    background: #0E8388;
    color: #fff;
    padding: 10px 0;
    border-radius: 50px;
    border: none;
  }

  .cancel-button {
    background: #fff;
    color: #0E8388;
    padding: 10px 0;
    border-radius: 50px;
    border: 1px solid #0E8388;
    margin-bottom: 16px;
  }

  .wallet-text {
    margin-bottom: 48px;
  }
  
  a {
    text-align: center;
    margin: 0 auto;
    color: #0E8388;
  }

`;