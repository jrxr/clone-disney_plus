import { Container, LogoSerie, PosterSerie, SliderHeader } from "./styles"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Eradogelo from '../../assets/images/eradogelo-slider.jpeg';
import Logoeradogelo from '../../assets/images/logo-eradogelo.png';
import Mandalore from '../../assets/images/mandalore-slider.jpeg';
import Logomandalore from '../../assets/images/logo-mandalore.png';
import Encanto from '../../assets/images/encanto-slider.jpeg';
import Logoencanto from '../../assets/images/logo-encanto.png';

export default function SliderImages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <SliderHeader {...settings}>
      <Container>
        <a>
          <PosterSerie src={Eradogelo} alt="Era do gelo" />
          <LogoSerie src={Logoeradogelo} alt="logo era do gelo"/>
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src={Mandalore} alt="mandalore" />
          <LogoSerie src={Logomandalore} alt="logo mandalore"/>
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src={Encanto} alt="encanto" />
          <LogoSerie src={Logoencanto} alt="logo encanto"/>
        </a>
      </Container>
    </SliderHeader>
  )
}
