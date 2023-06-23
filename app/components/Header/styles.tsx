import styled from '@emotion/styled'

export const StyledHeader = styled.div`
  background: #2C3333;
  width: 100%;
  margin: 0;
  height: max-content;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-icon {
    a {
      width: 20px;
      display: block;
      img {
        margin: 0 auto;
      }
    }
  }
  
  .menu {
    position: absolute;
    right: 16px;
    top: 75px;
    background: #2C3333;
    padding: 16px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    a:hover {
      color: #0E8388;
    } 
  }
  
  .navbar {
    display: none;
  }

  @media screen and (min-width: 744px) {
    padding: 20px 32px;
    font-size: 24px;

    .menu {
      display: none;
    }

    .menu-icon {
      display: none;
    }

    .navbar {
      display: block;
      font-size: 20px;
      font-weight: 500;
      a {
        margin-left: 16px;
        :hover {
          color: #0E8388;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 28px 64px;
    font-size: 32px;

    .navbar {
      font-size: 24px;
      a {
        margin-left: 40px;
      }
    }
  } 
`;