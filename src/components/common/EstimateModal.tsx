import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { services } from '../../data/services';
import { submitFormToWebhook } from '../../utils/submitForm';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    serviceType: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await submitFormToWebhook(formData, 'modal-form');
    
    if (success) {
      alert('Thank you! We\'ll contact you within 24 hours with your free quote.');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        serviceType: ''
      });
      onClose();
    } else {
      alert('There was an error submitting your request. Please try again or call us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Modal content */}
          <div className="p-8">
            <h2 className="text-2xl font-inter font-bold text-deep-charcoal mb-2 text-center">
              Get Your Free Estimate
            </h2>
            <p className="text-sm text-medium-gray text-center mb-6">
              No obligations. No surprises. Just honest pricing.
            </p>
            
            {/* Call option */}
            <div className="bg-light-gray rounded-lg p-4 mb-6">
              <p className="text-sm text-medium-gray mb-2 text-center">Prefer to talk? Call us now:</p>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 text-burnt-sienna font-semibold text-lg hover:text-terracotta transition-colors"
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-burnt-sienna/20 focus:border-burnt-sienna font-inter bg-gray-50 hover:bg-white transition-all duration-200"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-burnt-sienna/20 focus:border-burnt-sienna font-inter bg-gray-50 hover:bg-white transition-all duration-200"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-burnt-sienna/20 focus:border-burnt-sienna font-inter bg-gray-50 hover:bg-white transition-all duration-200"
              />
              
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code *"
                required
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-burnt-sienna/20 focus:border-burnt-sienna font-inter bg-gray-50 hover:bg-white transition-all duration-200"
              />
              
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-burnt-sienna/20 focus:border-burnt-sienna font-inter bg-gray-50 hover:bg-white transition-all duration-200 text-deep-charcoal"
              >
                <option value="">Select Service Type</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              
              <button
                type="submit"
                className="w-full bg-burnt-sienna text-crisp-white py-3 rounded-md font-inter font-medium text-base hover:bg-opacity-90 transition-all duration-300"
              >
                Get Free Estimate
              </button>
            </form>
            
            <p className="text-xs text-medium-gray text-center mt-4">
              We'll call within 2 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
}