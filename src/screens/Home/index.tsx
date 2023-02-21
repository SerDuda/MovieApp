import { HeroSlider, Popular } from '@/components';
import { useAppSelector } from '@/store/hooks';
import React, { FC } from 'react';
import './styles.scss'

const Home: FC = () => {

  const itemsSeries = useAppSelector(state => state.movies.data.series)
  // .filter((_, i) => i !== 0);
  return (
    <div className='home-page'>
      <div className="page-container">
        <HeroSlider item={itemsSeries[0]} classname={'home-page__slider'}/>
        <Popular items={itemsSeries.slice(1)} classname={"home-page__popular"} />
      </div>
    </div>
  );
};

export default Home;