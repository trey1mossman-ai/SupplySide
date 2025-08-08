import { Shield, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-deep-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-inter font-medium text-center mb-16 text-crisp-white">
            About SupplySide Flooring
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="/images/about/IMG_0096.webp"
                alt="SupplySide Flooring entire family team - Multi-generational family-owned Chicago flooring installation company including Matt, Don, and their families dedicated to quality craftsmanship"
                title="The SupplySide Flooring Family - Three Generations of Chicago's Trusted Flooring Installers"
                loading="lazy"
                className="w-full rounded-xl shadow-lg mb-8 object-cover"
                style={{ maxHeight: '400px' }}
              />
              <h3 className="text-lg font-inter font-medium text-crisp-white mb-6">
                Chicago's Most Reliable Flooring Installers
              </h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                With 80+ years combined experience, our entire family team has been transforming Chicago homes and businesses 
                with quality flooring installations. Don brings 48 years as lead installer, with Matt and the next generation 
                continuing our legacy. As a multi-generational family-owned business, we treat every project like it's our own home.
              </p>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                We've built our reputation on three simple principles: show up on time, do what we say 
                we'll do, and deliver exceptional results. It's why property managers, contractors, and 
                homeowners consistently choose SupplySide for their flooring needs.
              </p>
              <div className="mt-8 p-4 bg-crisp-white/10 rounded-lg border border-crisp-white/20">
                <p className="text-crisp-white font-medium text-lg">The SupplySide Family</p>
                <p className="text-gray-300">Three Generations of Master Installers</p>
                <p className="text-sm text-gray-400 mt-2">Multi-generational family business • Licensed & Insured • Serving Chicago Since 1976</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-crisp-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <Users className="w-12 h-12 text-burnt-sienna mx-auto mb-3" />
                <h4 className="font-inter font-medium text-deep-charcoal mb-2">Family Owned & Operated</h4>
                <p className="text-medium-gray text-sm">Treating your home like our own</p>
              </div>
              <div className="bg-crisp-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <Clock className="w-12 h-12 text-burnt-sienna mx-auto mb-3" />
                <h4 className="font-inter font-medium text-deep-charcoal mb-2">80+ Years</h4>
                <p className="text-medium-gray text-sm">Combined experience</p>
              </div>
              <div className="bg-crisp-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <Shield className="w-12 h-12 text-burnt-sienna mx-auto mb-3" />
                <h4 className="font-semibold text-deep-charcoal mb-2">Trustworthy</h4>
                <p className="text-medium-gray text-sm">Licensed, insured & reliable</p>
              </div>
              <div className="bg-crisp-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <Award className="w-12 h-12 text-burnt-sienna mx-auto mb-3" />
                <h4 className="font-semibold text-deep-charcoal mb-2">Excellence</h4>
                <p className="text-medium-gray text-sm">Consistent 5-star reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}