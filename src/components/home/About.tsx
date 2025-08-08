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
                alt="SupplySide Flooring family team - Family-owned Chicago flooring installation company with Matt, Don, and their families dedicated to quality craftsmanship"
                title="SupplySide Flooring Family - Chicago's Trusted Flooring Installers"
                loading="lazy"
                className="w-full rounded-xl shadow-lg mb-8 object-cover"
                style={{ maxHeight: '400px' }}
              />
              <h3 className="text-lg font-inter font-medium text-crisp-white mb-6">
                Experienced, Family-Operated Flooring Installers
              </h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                With 80+ years of combined installation experience, SupplySide is Chicago's most experienced and dependable flooring installation team. 
                Don Henke, our Chief Installer, has nearly 50 years of installation experience, updating and beautifying thousands of homes and businesses 
                across the Chicago metro area.
              </p>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                SupplySide is trusted by Chicago's most discerning residents, property managers, and general contractors due to our pledge to treat each 
                customer as if they are part of our own family - by providing top-notch craftsmanship, with white-glove customer service. We look forward 
                to the opportunity to treat your family or business like our own!
              </p>
              <div className="mt-8 p-4 bg-crisp-white/10 rounded-lg border border-crisp-white/20">
                <p className="text-crisp-white font-medium text-lg">Don Henke</p>
                <p className="text-gray-300">Chief Installer</p>
                <p className="text-sm text-gray-400 mt-2">Nearly 50 years experience • Family-owned • Licensed & Insured</p>
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