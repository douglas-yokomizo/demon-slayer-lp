import { styled } from 'styled-components'
import bgImg from '/src/images/Kimetsu-banner.jpg'

export const HeaderStlye = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;

  nav ul {
    display: flex;
    position: flex-end;
    gap: 32px;
    list-style: none;

    a {
      cursor: pointer;
      text-decoration: none;
      color: white;
      font-size: 24px;
      font-weight: 500;
      font-family: 'blood crow';
    }
  }
`
export const Description = styled.div`
  color: white;
  margin-left: 60%;
  margin-top: 10%;
  font-size: 24px;
  font-family: 'blood crow';
  font-weight: 300;
  letter-spacing: 1px;

  p {
    margin-top: 16px;
    font-weight: normal;
    font-family: 'Roboto';
  }
`
export const Background = styled.div`
  height: 100vh;
  position: relative;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    filter: brightness(0.6);
    background-size: cover;
    background-image: url(${bgImg});
    background-position: center;
  }
`
