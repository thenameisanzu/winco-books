import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Journey from '@/components/Journey';
import Why from '@/components/Why';
import About from '@/components/About';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Books from '@/components/Books';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Journey />
        <Why />
        <About />
        <Services />
        <Packages />
        <Books />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
