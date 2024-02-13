import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import NavBar from 'src/components/NavBar'
import HeroTitle from 'src/components/HeroTitle'
import Features from 'src/components/Features'
import WebAppsDev from 'src/components/WebAppsDev'
import CookiesBanner from 'src/components/CookiesBanner'

import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';



const HomePage = () => {
  const icon = <IconInfoCircle />;

  return (
    <>
        <NavBar/>
        <HeroTitle/>
        <Features/>
	<WebAppsDev/>

        <CookiesBanner/>





    </>
  )
}

export default HomePage
