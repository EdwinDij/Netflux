import React from 'react'
import Header from '../components/Header'
import CardMovie from '../components/CardMovie'
import RandomBg from '../components/RandomBg'
export default function MainPage() {

  return (
    <div>
      <Header />
      <RandomBg />
      <CardMovie/>
    </div>
  )
}
