import type { NextPage } from 'next'
import WithLayout from '../components/HOC/withLayout'
import AboutUs from '../components/MainComponents/AboutUs/AboutUs'

const Home: NextPage = () => {
  return <AboutUs/>
}

export default WithLayout(Home, 'About Us')
