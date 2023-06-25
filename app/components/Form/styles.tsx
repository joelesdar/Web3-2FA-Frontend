import styled from '@emotion/styled'

export const StyledForm = styled.div`
  border-radius: 16px;
  background: white;
  padding: 32px;
  margin: 16px auto;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */

  .form-title {
    font-weight: 700;
    font-size: 32px;
    color: #0E8388;
    text-align: center;
    font-weight: 700;
    line-height: 40px;
  }
  .form-container {
    margin-top: 32px;
  }

  .subtitle {
    color: #2C3333;
    text-align: center;
    margin-top: 24px;
  }

  p, input {
    color: #2C3333;
    margin-bottom: 8px;
    width: 100%;
  }

  .sign-up-button {
    margin-top: 16px;
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
    font-size: 16px;
    font-weight: 600;
  }

  .sign-up-button {
    font-size: 16px;
    font-weight: 400;
    a {
      font-weight: 600;
    }
  }

  .cancel-button {
    background: #fff;
    color: #0E8388;
    padding: 10px 0;
    border-radius: 50px;
    border: 1px solid #0E8388;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .back-button {
    width: 260px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 48px;
  }

  .wallet-text {
    margin-bottom: 48px;
  }

  .successfull-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  a {
    text-align: center;
    margin: 0 auto;
    color: #0E8388;
  }

  @media screen and (min-width: 744px) {
    border-radius: 24px;
    width: 680px;
    max-width: 680px;

    .form-container {
      /* width: 90%; */
      margin: 0 auto;

    }
  }

  /* @media screen and (min-width: 1440px) {
    border-radius: 24px;
    width: 1312px;

    .form-container {
      width: 90%;
      margin: 0 auto;
    }
  } */

`;