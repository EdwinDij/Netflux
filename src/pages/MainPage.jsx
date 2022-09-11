import React from 'react';
import Header from '../components/Header';
import CardPopular from '../components/CardPopular';
import RandomBg from '../components/RandomBg';
import CardUpcoming from '../components/CardUpcoming';
import CardTopSerie from '../components/CardTopSerie';
import CardPopularSerie from "../components/CardPopularSerie"
export default function MainPage() {

  return (
    <div>
      <Header />
      <RandomBg />
      <CardPopular/>
      <CardUpcoming />
      <CardTopSerie />
      <CardPopularSerie />
    </div>
  )
}
