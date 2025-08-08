export default function GoogleMap() {
  return (
    <section className="py-16 bg-crisp-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mb-6 text-center">
            Service Area
          </h2>
          <p className="text-lg text-medium-gray text-center mb-8">
            Proudly serving Chicago including the following areas
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858294147!2d-87.87204703418557!3d41.83390367061417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1704240000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SupplySide Flooring Service Area - Chicago"
            />
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {[
                { name: 'Evanston', url: 'https://www.google.com/maps/search/Evanston,+IL' },
                { name: 'Skokie', url: 'https://www.google.com/maps/search/Skokie,+IL' },
                { name: 'Rogers Park', url: 'https://www.google.com/maps/search/Rogers+Park,+Chicago,+IL' },
                { name: 'Edgewater', url: 'https://www.google.com/maps/search/Edgewater,+Chicago,+IL' },
                { name: 'Uptown', url: 'https://www.google.com/maps/search/Uptown,+Chicago,+IL' },
                { name: 'Lincoln Square', url: 'https://www.google.com/maps/search/Lincoln+Square,+Chicago,+IL' },
                { name: 'Forest Glen', url: 'https://www.google.com/maps/search/Forest+Glen,+Chicago,+IL' },
                { name: 'Niles', url: 'https://www.google.com/maps/search/Niles,+IL' },
                { name: 'Lincoln Park', url: 'https://www.google.com/maps/search/Lincoln+Park,+Chicago,+IL' },
                { name: 'Bucktown', url: 'https://www.google.com/maps/search/Bucktown,+Chicago,+IL' },
                { name: 'Logan Square', url: 'https://www.google.com/maps/search/Logan+Square,+Chicago,+IL' },
                { name: 'Wicker Park', url: 'https://www.google.com/maps/search/Wicker+Park,+Chicago,+IL' },
                { name: 'Belmont Cragin', url: 'https://www.google.com/maps/search/Belmont+Cragin,+Chicago,+IL' },
                { name: 'Albany Park', url: 'https://www.google.com/maps/search/Albany+Park,+Chicago,+IL' },
                { name: 'Park Ridge', url: 'https://www.google.com/maps/search/Park+Ridge,+IL' },
                { name: 'Norridge', url: 'https://www.google.com/maps/search/Norridge,+IL' },
                { name: 'Oak Park', url: 'https://www.google.com/maps/search/Oak+Park,+IL' },
                { name: 'Cicero', url: 'https://www.google.com/maps/search/Cicero,+IL' },
                { name: 'West Town', url: 'https://www.google.com/maps/search/West+Town,+Chicago,+IL' },
                { name: 'West Loop', url: 'https://www.google.com/maps/search/West+Loop,+Chicago,+IL' },
                { name: 'The Loop', url: 'https://www.google.com/maps/search/The+Loop,+Chicago,+IL' },
                { name: 'South Loop', url: 'https://www.google.com/maps/search/South+Loop,+Chicago,+IL' },
                { name: 'Portage Park', url: 'https://www.google.com/maps/search/Portage+Park,+Chicago,+IL' },
                { name: 'Dunning', url: 'https://www.google.com/maps/search/Dunning,+Chicago,+IL' },
                { name: 'Morton Grove', url: 'https://www.google.com/maps/search/Morton+Grove,+IL' },
                { name: 'River Grove', url: 'https://www.google.com/maps/search/River+Grove,+IL' },
                { name: 'Pilsen', url: 'https://www.google.com/maps/search/Pilsen,+Chicago,+IL' },
                { name: 'Bridgeport', url: 'https://www.google.com/maps/search/Bridgeport,+Chicago,+IL' },
                { name: 'Elmwood Park', url: 'https://www.google.com/maps/search/Elmwood+Park,+IL' },
                { name: 'Edison Park', url: 'https://www.google.com/maps/search/Edison+Park,+Chicago,+IL' },
                { name: 'Franklin Park', url: 'https://www.google.com/maps/search/Franklin+Park,+IL' },
                { name: 'Maywood', url: 'https://www.google.com/maps/search/Maywood,+IL' },
                { name: 'Forest Park', url: 'https://www.google.com/maps/search/Forest+Park,+IL' },
                { name: 'Oriole Park', url: 'https://www.google.com/maps/search/Oriole+Park,+Chicago,+IL' },
                { name: 'Des Plaines', url: 'https://www.google.com/maps/search/Des+Plaines,+IL' },
                { name: 'Berkeley', url: 'https://www.google.com/maps/search/Berkeley,+IL' },
                { name: 'Bellwood', url: 'https://www.google.com/maps/search/Bellwood,+IL' },
                { name: 'Northwood', url: 'https://www.google.com/maps/search/Northwood,+Chicago,+IL' },
                { name: 'Lombard', url: 'https://www.google.com/maps/search/Lombard,+IL' },
                { name: 'Downers Grove', url: 'https://www.google.com/maps/search/Downers+Grove,+IL' },
                { name: 'Bridgeview', url: 'https://www.google.com/maps/search/Bridgeview,+IL' }
              ].map((area) => (
                <a
                  key={area.name}
                  href={area.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-gray hover:text-burnt-sienna transition-colors duration-200 text-sm"
                >
                  • {area.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}