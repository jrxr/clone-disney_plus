import Header from '../components/Header';
import SliderImages from '../components/SliderImages';
import Company from '../components/Company';
import Movies from '../components/Movies';

import { Main } from './styles';
import  Head  from 'next/head';

export default function Home() {
  return (
    <Main>
       <Head>
          <title>Clone Disney</title>
          <meta
            name="description"
            content="Projeto desenvolvido afins de estudo"
          />
          <meta
            property="og:description"
            content="Projeto desenvolvido afins de estudo"
          />
      </Head>
      <Header />
      <SliderImages />
      <Company />
      <Movies />
    </Main>
  );
}
