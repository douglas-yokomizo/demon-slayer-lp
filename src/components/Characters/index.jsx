import { Container } from '../Container'
import {
  CharacterWrapper,
  DescriptionStyle,
  TitleStyle
} from './Character.Style'
import tanjiro from '/src/images/Tanjiro.jpg'
import lua from '/src/images/lua-inferior.jpg'
import rengoku from '/src/images/rengoku.jpg'
import zenitsu from '/src/images/zenitsu.jpg'
import nezuko from '/src/images/nezuko.jpg'
import inosuke from '/src/images/inosuke.png'
import akaza from '/src/images/Akaza.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import { useState } from 'react'

const Characters = () => {
  const characters = [
    {
      name: 'Kamado Tanjiro',
      img: tanjiro,
      description:
        ' O protagonista da série. Ele é um jovem bondoso e gentil que se torna um caçador de demônios após sua família ser assassinada por um demônio e sua irmã Nezuko se transformar em um. Conhece outros caçadores em suas aventuras e desenvolve uma sincera amizade com Zenitsu e Inosuke. Sabe coordenar as forças de seus amigos com maestria para conseguir vantagem em combate. Seu traço mais marcante é sua generosidade, que aflora até mesmo contra os demônios mais hostis. Consegue ter empatia com todos que encontra'
    },
    {
      name: 'Lua Inferior 1 - Enmu',
      img: lua,
      description:
        'Ele é o último Lua Inferior, poupado por Muzan do massacre por curiosidade, por conta de seu jeito excêntrico. Ele é o Demônio dos Sonhos e seu grande plano é consumir todos os humanos a bordo do trem em que Kyojuro, Tanjiro e seu grupo embarcam.'
    },
    {
      name: 'Rengoku Kyojuro',
      img: rengoku,
      description:
        'Kyojuro Rengoku é a Hashira de Respiração das Chamas. Ele é empolgado em tudo o que faz, como um labrador humano. Tudo que faz é com uma imensa animação e defende a crença de que os mais fortes tem o dever de proteger os mais fracos. Ele tem um papel crucial no filme Demon Slayer: Mugen Train.'
    },
    {
      name: 'Agatsuma Zenitsu',
      img: zenitsu,
      description:
        'Zenitsu Agatsuma é um Caçador de Demônios que usa a Respiração do Trovão. Treinado pelo ex-hashira Jigoro Kuwajima, nunca confiou nas próprias habilidades, mas seu mestre viu seu potencial. Naturalmente covarde e mulherengo, está sempre fugindo de batalhas, buscando o caminho mais fácil e dando em cima de garotas.'
    },
    {
      name: 'Kamado Nezuko',
      img: nezuko,
      description:
        'Era apenas um pouco mais nova que Tanjiro quando sua família foi morta pelo misterioso Muzan Kibutsuji, que a transformou em um demônio. A força bruta de Nezuko Kamado foi amplificada com a transformação, que também trouxe um surto de agilidade, resistência e uma sede insaciável por sangue humano.'
    },
    {
      name: 'Hashibira Inosuke',
      img: inosuke,
      description:
        'Inosuke Hashibira é um Caçador de Recompensas usuário da Respiração da Besta. Ele cresceu isolado em uma montanha, entre os javalis selvagens e sozinho criou a sua própria Técnica de Respiração, derivada da Respiração do Vento. Por esse motivo, não sabe interagir socialmente e está sempre chamando todo mundo para brigar.'
    },
    {
      name: 'Lua Superior 3 - Akaza',
      img: akaza,
      description:
        'Tendo sido transformado em oni por Muzan em pessoa, Akaza é teimoso e sanguinário, tendo um profundo desejo de lutar contra adversários fortes ao mesmo tempo em que desdenha e tortura os fracos. Nem mesmo seus companheiros Kizuki estão à salvo, já que ele vê a todos como rivais.'
    }
  ]
  const [Grabbing, setGrabbing] = useState(false)

  return (
    <>
      <Container>
        <TitleStyle>Personagens</TitleStyle>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
        >
          {characters.map((characters) => (
            <SwiperSlide
              style={{ cursor: Grabbing ? 'grabbing' : 'grab' }}
              onMouseDown={() => setGrabbing(true)}
              onMouseUp={() => setGrabbing(false)}
              key={characters.name}
            >
              <CharacterWrapper>
                <img src={characters.img} alt={characters.name} />
                <DescriptionStyle>
                  <h3>{characters.name}</h3>
                  <p>{characters.description}</p>
                </DescriptionStyle>
              </CharacterWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export default Characters
