import React from 'react'
import Header from '../components/Header'
import CardPopular from '../components/CardPopular'
import RandomBg from '../components/RandomBg'
export default function MainPage() {

  return (
    <div>
      <Header />
      <RandomBg />
      <CardPopular/>
    </div>
  )
}
