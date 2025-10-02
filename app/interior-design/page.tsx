import Navbar from '@/components/Navbar'
import BannerInterior from '@/components/BannerInterior'
import ActionCards from '@/components/ActionCards'
import Footer from '@/components/Footer'

export default function InteriorDesignPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BannerInterior />
      <ActionCards />
      <Footer />
    </main>
  )
}
