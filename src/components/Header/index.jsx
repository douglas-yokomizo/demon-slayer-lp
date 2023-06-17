import { HeaderStlye, Background, Description } from './Header.style'
import { Container } from '../Container'

const Header = () => {
  return (
    <Background>
      <Container>
        <HeaderStlye>
          <span></span>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </HeaderStlye>
        <Description>
          <h1>Kimetsu no Yaiba — Mugen Train</h1>
          <p>
            Filme que dá sequencia a primeira temporada do anime de Kimetsu no
            Yaiba, é essencial para que você continue acompanhando o anime. O
            filme faz uma importante ligação entre as duas temporadas e você não
            pode perder esse arco muito bem adaptado em 2 horas. Já disponível
            na Funimation e Crunchyroll!
          </p>
        </Description>
      </Container>
    </Background>
  )
}

export default Header
