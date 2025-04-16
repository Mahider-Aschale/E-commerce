import HeroSection from "@/compont/HeroSection"
import BestSellers from "@/compont/BestSellers"
import PromoSection from "@/compont/PromoSection"
import Footer from "@/compont/Footer"
import CategoryGrid from "@/compont/CategoryGrid"
import Navbar from "@/compont/Navbar"
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <BestSellers />
      <PromoSection />
      <CategoryGrid />
      <Footer/>
    </div>
  )
}

export default HomePage
