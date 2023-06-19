'use client'
import Header from './components/Header/page'
import Landing from './Landing/page'
import Link from 'next/link'

export default function Home() {


  return (
    <div className='Header'>
      <Header />
      <Landing />
    </div>
  )
}
