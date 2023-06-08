import Image from 'next/image'
import Header from './components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='Header'>
      <Link href="/Demo">Demo</Link>
    </div>
  )
}
