import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';

// Comprehensive FAQ data organized by flooring type
const faqSections = [
  {
    title: "Vinyl Flooring Installation FAQs",
    faqs: [
      { question: "Will Chicago winter salt damage luxury vinyl plank flooring?", answer: "Luxury vinyl plank (LVP) flooring is built with a chemical-resistant wear layer, so Chicago's snow-melt salt won't stain or pit it. Mop up residue promptly and the surface stays clear." },
      { question: "Does luxury vinyl fade in sunny Chicago high-rises?", answer: "Top-tier LVP/LVT products carry UV-resistance warranties. Pair them with low-E window film and fading is virtually eliminated—perfect for those south-facing Lake-view condos." },
      { question: "Is luxury vinyl flooring approved by most Chicago HOAs?", answer: "Yes. We provide Impact Insulation Class (IIC) and Sound Transmission ratings that satisfy typical Chicago condo bylaws." },
      { question: "Can you install vinyl plank over a basement slab after flooding?", answer: "Once slab moisture tests below 3 lbs/1,000 sq ft/24 h we lay a 6-mil vapor barrier and float waterproof LVP—ideal for Chicago basements." },
      { question: "Is LVP safe for kids and pets?", answer: "We only install FloorScore® or GREENGUARD Gold vinyl that emits < 0.5 mg/m³ VOCs, making it child- and pet-friendly." }
    ]
  },
  {
    title: "Tile Flooring Installation FAQs", 
    faqs: [
      { question: "What porcelain tile stands up to Chicago freeze-thaw on patios?", answer: "Choose porcelain rated < 0.5% water absorption; it is frost-proof and won't crack during Chicagoland winters." },
      { question: "Can you tile over 100-year-old pine subfloors?", answer: "Yes—after stiffening with ½″ cement board or an uncoupling membrane to meet L/360 deflection codes." },
      { question: "Which grout color hides Chicago slush stains?", answer: "Mid-tone greys disguise salt residue and road grime while still looking modern." },
      { question: "Does large-format tile need a flatter floor?", answer: "Absolutely. We laser-level and use leveling clips; the payoff is fewer grout lines and a sleek look." },
      { question: "Are epoxy grouts worth it?", answer: "For Chicago kitchens and showers, epoxy grout is stain-proof and never needs sealing—ideal for busy homeowners." }
    ]
  },
  {
    title: "Hardwood Flooring Installation FAQs",
    faqs: [
      { question: "How long should hardwood acclimate in a Chicago home?", answer: "48–72 hours at 30–50% relative humidity; this minimizes seasonal gapping." },
      { question: "Do whole-home humidifiers prevent winter plank shrinkage?", answer: "Yes—keeping RH above 30% stops ⅛″ gaps from forming." },
      { question: "Can engineered hardwood go over radiant-heat concrete?", answer: "Engineered planks rated for radiant heat perform well; we glue-assist for added stability." },
      { question: "Will road salt damage polyurethane finishes?", answer: "Polyurethane resists salt, but entry mats and quick wipe-ups preserve gloss." },
      { question: "Are 8-inch wide planks stable in Chicago humidity?", answer: "Yes—if engineered; solid woods should stay at 5″ or narrower." }
    ]
  },
  {
    title: "Laminate Flooring Installation FAQs",
    faqs: [
      { question: "Does laminate need acclimation like hardwood?", answer: "Yes—48 hours in the space prevents peaked joints." },
      { question: "Will laminate buckle in Chicago's summer humidity?", answer: "Not with ⅜″ expansion gaps and T-molds at doorways." },
      { question: "Can laminate go in kitchens?", answer: "With water-resistant cores and sealed edges, it handles splashes—just wipe up puddles." },
      { question: "How scratch-resistant is laminate versus vinyl?", answer: "AC4/AC5 laminates shrug off chair legs better than typical 12-mil vinyl." },
      { question: "What underlayment reduces footfall noise in two-story homes?", answer: "3 mm cork or rubber pad drops airborne noise 18–20 dB." }
    ]
  },
  {
    title: "Carpet Installation FAQs", 
    faqs: [
      { question: "What carpet pad warms Chicago basements best?", answer: "An 8-lb, 7/16″ memory-foam pad insulates cold concrete and feels plush." },
      { question: "How does carpet handle winter salt at entryways?", answer: "Solution-dyed nylon resists staining; we apply a fiber-shield in high-traffic zones." },
      { question: "Which carpet style deadens noise in multi-unit buildings?", answer: "Dense Berber loops plus acoustic pad can cut footfall up to 30 dB." },
      { question: "Is recycled PET carpet durable?", answer: "Modern PET fibers resist crushing and keep plastic bottles out of landfills—a sustainable choice." },
      { question: "Can you fabricate custom-sized area rugs from broadloom?", answer: "Absolutely—we bind edges to create perfectly sized rugs for hardwood protection." }
    ]
  },
  {
    title: "Hardwood Refinishing FAQs",
    faqs: [
      { question: "What's the best season to refinish hardwood floors in Chicago?", answer: "Spring or fall offer stable humidity, minimizing post-refinish gaps." },
      { question: "Do I need to clear out every piece of furniture?", answer: "Yes—refinishers need a bare floor; we can arrange pods or movers if needed." },
      { question: "How long before pets can walk on newly finished floors?", answer: "24 h for water-based polyurethane; 48–72 h for oil-based." },
      { question: "Can you remove deep pet-urine stains?", answer: "Up to 90% via oxalic-acid bleach; severe spots may need board replacement." },
      { question: "What sheen is most popular in Chicago homes?", answer: "Satin—modern look, hides scratches better than semi-gloss." }
    ]
  }
];

// Flatten all FAQs for the main display
const faqs = faqSections.flatMap(section => section.faqs);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | SupplySide Flooring Chicago</title>
        <meta 
          name="description" 
          content="Get answers to common questions about flooring installation in Chicago. Learn about our process, pricing, timeline, and guarantees. Call 312-210-0606 for more info." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-medium-gray mb-8">
              Everything you need to know about our flooring services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#faq-list"
                className="bg-burnt-sienna text-crisp-white px-6 py-2.5 rounded-md font-inter font-medium text-base hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center"
              >
                Browse FAQs
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="border-2 border-burnt-sienna text-burnt-sienna px-6 py-2.5 rounded-md font-inter font-medium text-base hover:bg-burnt-sienna hover:text-crisp-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us: {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section id="faq-list" className="py-20 md:py-24 bg-crisp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-0 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 text-left flex justify-between items-center group hover:text-burnt-sienna transition-colors duration-200"
                  >
                    <h3 className="font-inter font-normal text-lg text-deep-charcoal group-hover:text-burnt-sienna pr-4 transition-colors">
                      {faq.question}
                    </h3>
                    <div
                      className={`transition-all duration-300 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-burnt-sienna" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-burnt-sienna transition-colors" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 pb-6'
                        : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 font-light leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-inter font-medium text-deep-charcoal mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
            Our team is here to help. Get personalized answers about your specific flooring project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#hero-form"
              className="bg-burnt-sienna text-crisp-white px-6 py-2.5 rounded-md font-inter font-medium text-base hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Estimate
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="border-2 border-burnt-sienna text-burnt-sienna px-6 py-2.5 rounded-md font-inter font-medium text-base hover:bg-burnt-sienna hover:text-crisp-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}