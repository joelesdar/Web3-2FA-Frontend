import styled from '@emotion/styled'

export const StyledLanding = styled.div`
  background: #100F0F;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 56px;

  img {
    /* width: 60%; */
    margin: 0 auto;
    width: 200px;
  }

  h1 {
    font-size: 56px;
    font-weight: 700;
    margin-top: 32px;
  }

  p {
    font-weight: 400;
    margin: 0 16px;
  }
  
  .subtitle {
    font-size: 24px;
    margin-top: 32px;
  }

  .description {
    font-size: 18px;
    margin-top: 80px;
  }

  button {
    border: 1px solid #CBE4DE;
    color: #CBE4DE;
    border-radius: 8px;
    margin-top: 32px;
    padding: 13px 22px;
  }
`;