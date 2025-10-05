export default function HomePage(){
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Expert Care for Your <span className="text-gradient">Home Investments</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Certified professionals you can trust. Seamless service from booking to completion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/instant-booking" className="btn-primary text-center">Book Service Now</a>
              <a href="/emergency-services" className="bg-error text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:bg-error-600 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2 text-center">Emergency Repair</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img alt="hero" src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

