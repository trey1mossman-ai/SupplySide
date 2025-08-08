import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';
import ContactForm from '../components/common/ContactForm';
import GoogleMap from '../components/common/GoogleMap';
import EstimateModal from '../components/common/EstimateModal';
import { localBusinessSchema } from '../data/company';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>SupplySide Flooring Chicago | Most Reliable Flooring Installation</title>
        <meta 
          name="description" 
          content="Chicago's most reliable flooring installation company. 80+ years experience installing tile, hardwood, luxury vinyl, and more. Licensed & insured. Free quotes: 312-210-0606" 
        />
        <meta property="og:title" content="SupplySide Flooring Chicago | Professional Installation" />
        <meta property="og:description" content="Chicago's most reliable flooring installation. 80+ years experience. Free quotes." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <TrustBar />
      <Testimonials />
      <CTASection onOpenModal={() => setIsModalOpen(true)} />
      <Services onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <FAQ />
      <ContactForm />
      <GoogleMap />
      
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}