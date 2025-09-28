import Header from './components/Header'
import Hero from './components/Hero'
import MainSection from './components/MainSection'
import Solutions from './components/Solutions';
import BookDemo from './components/BookDemo';
import OurService from './components/OurService';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Services from './components/services/Services';
import Faqs from './components/faqs/Faqs';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <div style={{
          background: '#F3F9F9',
        }}>
      <Hero />
      <MainSection />
      <Solutions />
      <BookDemo />
      <Services />
      <OurService />
      <Faqs/>
      <Blog />
      <ContactUs />
      </div>
      
    </div>
  )
}

export default App
