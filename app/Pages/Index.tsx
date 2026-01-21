import React from 'react'
import Hero from './Hero/Page'
import MarqueeSlider1 from './MarqueeSlider1/Page'
import About from './About/Page'
import WorkBanner from './Work-Banner/Page'
import Expertise from './Our-Expertise/Page'
import Testimonial from './Testimonial/Page'
import Faqs from './Faqs/Page'
import Contact from './Contact/Page'
import Gallery from './Gallerys/Page'

export default function Index() {
  return (
    <>
    <Hero/>
    <MarqueeSlider1/>
    <About/>
    <WorkBanner/>
    <Expertise/>
    <Testimonial/>
    <Faqs />
    <Contact/>
    <Gallery/>
    </>
  )
}
