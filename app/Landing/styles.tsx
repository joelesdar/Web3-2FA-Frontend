import styled from '@emotion/styled'

export const StyledLanding = styled.div`
  background: #100F0F;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 56px 16px 80px;

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
    font-size: 18px;
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

  button {
    border: 1px solid #CBE4DE;
    color: #CBE4DE;
    border-radius: 8px;
    margin-top: 32px;
    padding: 12px 22px;
    font-size: 20px;
    box-shadow: 0px 4px 4px 0px rgba(14, 131, 136, 1);
  }
  
  .section {
    padding-top: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;
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

  .steps {
    text-align: start;
  }

  .docs {
    font-weight: 200;
    font-size: 16px;
    margin-top: 40px;
    text-align: start;
  }

  @media screen and (min-width: 744px) {
    padding: 56px 30px 96px;

    h1 {
      font-size: 68px;
    }

    p, .description, li{
      font-size: 24px;
      line-height: 44px;
    }

    button {
      font-size: 24px;
    }

    iframe {
      width: 530px;
    }
    
    .cover {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;

      img {
        flex-grow: 0;
        width: 45%;
        max-width: 400px;
        height: fit-content;
      }
      .subtitle {
        font-size: 28px;
        line-height: 48px;
      }
      .get-started {
        width: 55%;
      }
      .description {
        margin-top: 64px;
      }
    }

    .section {
      padding-top: 88px;
    }
    
    .section-title {
      font-size: 32px;
    }

    .docs {
      font-size: 20px;
    }

  }

  @media screen and (min-width: 1440px) {
    padding: 104px 64px 176px;

    h1 {
      font-size: 120px;
    }

    p, .description, li{
      font-size: 40px;
      line-height: 80px;
    }

    button {
      font-size: 40px;
      padding: 26px 44px;
      border-radius: 16px;
    }

    iframe {
      width: 1090px;
    }
    
    .cover {
      width: 1440px;
      margin: 0 auto;

      img {
        flex-grow: 0;
        width: 45%;
        max-width: 600px;
        height: fit-content;
      }
      .subtitle {
        font-size: 44px;
        line-height: 72px;
      }
      .get-started {
        width: 55%;
      }
      .description {
        margin-top: 104px;
      }
    }

    .section {
      width: 1440px;
      margin: 0 auto;
      padding-top: 152px;

    }
    
    .section-title {
      font-size: 52px;
    }

    .docs {
      font-size: 36px;
      line-height: 72px;
    }
  } 
`;