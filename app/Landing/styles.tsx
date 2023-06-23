import styled from '@emotion/styled'

export const StyledLanding = styled.div`
  background: #100F0F;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 56px;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  img {
    /* width: 60%; */
    margin: 0 auto;
    width: 200px;
  }

  h1 {
    font-size: 56px;
    font-weight: 700;
    margin-top: 32px;
    color: #CBE4DE;
    text-shadow: 0 0 10px #CBE4DE;
  }

  p {
    font-weight: 400;
    margin: 0 16px;
    line-height: 36px;
  }

  span {
    color: #0E8388;
  }

  iframe {
    width: 100%;
    height: 360px;
    background: #2C3333;
    border-radius: 16px;
  }
  
  .section {
    padding-top: 64px;
    ol {
      text-align: start;
    }
  }

  .section-title {
    color: #CBE4DE;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 32px;
  }
  
  .subtitle {
    font-size: 24px;
    margin-top: 32px;
  }

  .description {
    font-size: 18px;
    margin-top: 80px;
  }

  .docs {
    font-weight: 200;
    font-size: 16px;
    margin-top: 40px;
    padding-bottom: 80px;
  }

  button {
    border: 1px solid #CBE4DE;
    color: #CBE4DE;
    border-radius: 8px;
    margin-top: 32px;
    padding: 13px 22px;
  }
`;