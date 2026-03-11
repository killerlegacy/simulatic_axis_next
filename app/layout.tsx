import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simulatic Axis — Simulation & Digital Transformation',
  description: 'Expert simulation and digital transformation services across manufacturing, healthcare, logistics and more. 50+ projects delivered across Pakistan, USA and Canada.',
  keywords: 'simulation, digital transformation, Simio, FlexSim, Arena, manufacturing, healthcare, warehouse, Industry 4.0',
  openGraph: {
    title: 'Simulatic Axis — Simulation & Digital Transformation',
    description: 'Expert simulation and digital transformation services. 50+ projects delivered globally.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
