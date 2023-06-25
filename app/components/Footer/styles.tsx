import styled from '@emotion/styled'

export const StyledFooter = styled.div`
  background: #100F0F;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 16px;
  border-top: 1px solid #2C3333;
  
  h2 {
    margin-top: 40px;
    font-weight: 700;
    font-size: 40px;
  }

  .menu {
    margin-top: 32px;
    font-size: 18px;
    line-height: 36px;
    a:hover {
      color: #0E8388;
    }
  }

  .desktop-menu {
    display: none;
  }

  .copyright {
    margin-top: 32px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 744px) {
    margin: 0 32px;

    h2 {
      font-size: 48px;
    }

    .mobile-menu {
      display: none;
    }

    .desktop-menu {
      display: block;
      font-size: 24px;
      p {
        display: inline;
      }
    }

    .copyright {
      font-size: 20px;
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 0 64px;

    h2 {
      font-size: 44px;
      margin-top: 56px;
    }

    .desktop-menu {
      font-size: 24px;
      margin-top: 40px;
    }

    .copyright {
      font-size: 18px;
      margin-top: 40px;
      margin-bottom: 56px;
    }
  }
`;