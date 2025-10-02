import Navbar from '@/components/Navbar'
import Banner360 from '@/components/Banner360'
import Features360 from '@/components/Features360'
import HowItWorks360 from '@/components/HowItWorks360'
import Gallery360 from '@/components/Gallery360'
import Pricing360 from '@/components/Pricing360'
import FAQ360 from '@/components/FAQ360'
import Footer from '@/components/Footer'

export default function Walkthrough360Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner360 />
      <Features360 />
      <HowItWorks360 />
      <Gallery360 />
      <Pricing360 />
      <FAQ360 />
      <Footer />
    </main>
  )
}
