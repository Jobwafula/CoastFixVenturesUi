import React from 'react'
import Navbar from '../mainlayout/Navbar'
import Hero from '../home/Hero'
import WhatsAppButton from '../shared/WhatsappButton'
import FeaturedTours from '../home/FeaturedTours'
import Footer from '../mainlayout/Footer'
import NewsletterSubscription from '../home/NewletterSubscription'
import TopBar from '../home/TopBar'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <FeaturedTours />
      <NewsletterSubscription />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}