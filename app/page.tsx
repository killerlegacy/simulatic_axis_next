import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { About, Services, Tools, Process, Contact, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
