import About from './components/About/about'
import HeroCarousel from './components/carousel/hero-carousel'
import ContactSection from './components/contact/contact'
import Footer from './components/footer/footer'
import GallerySection from './components/our-works/our-works'
import ServicesCarousel from './components/services/service-2'
import Services from './components/services/services'
import Navbar from './components/shared/navbar/navbar'
import TopNavbar from './components/shared/top-navbar'

function App() {
	return (
		<div className='bg-costumColor'>
			<TopNavbar />
			<Navbar />
			<HeroCarousel />
			<Services />
			<About />
			<ServicesCarousel />
			<GallerySection />
			<ContactSection />
			<Footer />
		</div>
	)
}

export default App
