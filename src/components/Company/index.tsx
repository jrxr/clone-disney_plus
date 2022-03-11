import { Container, ImageCompany, ItemCompany } from "./styles"

import Viewdisney from '../../assets/images/viewers-disney.png';
import Viewpixar from '../../assets/images/viewers-pixar.png'
import Viewmarvel from '../../assets/images/viewers-marvel.png'
import Viewstar from '../../assets/images/viewers-starwars.png'
import Viewnational from '../../assets/images/viewers-national.png'

export default function Company() {
  return (
    <Container>
      <ItemCompany>
        <ImageCompany src={Viewdisney} />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src={Viewpixar} />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src={Viewmarvel} />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src={Viewstar} />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src={Viewnational} />
      </ItemCompany>
    </Container>
  )
}
