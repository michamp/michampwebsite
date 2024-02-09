import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import NavBar from 'src/components/NavBar'
import HeroTitle from 'src/components/HeroTitle'
import Features from 'src/components/Features'

const HomePage = () => {
  return (
    <>
      <NavBar/>
    	<HeroTitle/>
      <Features/>
    </>
  )
}

export default HomePage
