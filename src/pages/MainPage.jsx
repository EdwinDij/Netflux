import React from 'react'
import Header from '../components/Header'
import CardPopular from '../components/CardPopular'
import RandomBg from '../components/RandomBg'
import CardUpcoming from '../components/CardUpcoming'
export default function MainPage() {

  return (
    <div>
      <Header />
      <RandomBg />
      <CardPopular/>
      <CardUpcoming />
    </div>
  )
}
