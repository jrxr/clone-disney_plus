import Image from 'next/image';

import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar
} from 'react-icons/ai';
import { FiFilm } from 'react-icons/fi';
import { RiComputerFill } from 'react-icons/ri';

import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile.png';

import {
  Container,
  Avatar,
  ContainerIcons,
  Wrapper,
  ItemIcon,
  TextIcon,
  ContainerUser,
  TextName
} from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src={Logo} width={80} height={48} />

        <ContainerIcons>
          <ItemIcon>
            <AiFillHome />
            <TextIcon>Início</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlineSearch />
            <TextIcon>Pesquisa</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlinePlus />
            <TextIcon>Minha lista</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiFillStar />
            <TextIcon>Originais</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <FiFilm />
            <TextIcon>Filmes</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <RiComputerFill />
            <TextIcon>Series</TextIcon>
          </ItemIcon>
        </ContainerIcons>
      </Wrapper>
      <ContainerUser>
        <TextName>Junior</TextName>
        <Avatar src={Profile} width={48} height={48} />
      </ContainerUser>
    </Container>
  );
}
