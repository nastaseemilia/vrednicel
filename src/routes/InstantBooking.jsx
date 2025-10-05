export default function InstantBooking(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Book Your Service Instantly</h1>
      <p className="text-text-secondary mb-8">Connect with certified technicians and schedule your service with confidence.</p>
      <div className="card-elevated">
        <div className="grid md:grid-cols-2 gap-4">
          <select className="input-field"><option>Select Appliance</option><option>Refrigerator</option><option>Washer</option></select>
          <select className="input-field"><option>Select Service</option><option>Installation</option><option>Repair</option></select>
          <select className="input-field"><option>Select Urgency</option><option>Emergency</option><option>Standard</option></select>
          <input className="input-field" placeholder="City" />
        </div>
        <div className="text-center mt-6">
          <button className="btn-primary">Find Available Technicians</button>
        </div>
      </div>
    </div>
  )
}

