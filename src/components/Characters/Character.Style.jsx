import { styled } from 'styled-components'

export const CharacterWrapper = styled.div`
  display: flex;
  padding: 24px 0;

  img {
    max-width: 420px;
    width: 100%;
    height: 400px;
    border-radius: 5%;
  }
`
export const DescriptionStyle = styled.div`
  margin-left: 48px;
  align-items: center;
  letter-spacing: 1px;

  h3 {
    color: white;
    font-family: 'blood crow';
    font-size: 32px;
    font-weight: normal;
  }

  p {
    margin-top: 24px;
    color: white;
    width: 100%;
    max-width: 80%;
    font-family: 'roboto';
  }
`
export const TitleStyle = styled.h2`
  font-family: 'blood crow';
  color: white;
  font-size: 40px;
  font-weight: normal;
  margin: 40px 0;
`
