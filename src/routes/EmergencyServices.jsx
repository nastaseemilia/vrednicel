export default function EmergencyServices(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">24/7 Emergency Services</h1>
      <p className="text-text-secondary mb-8">Rapid response with certified emergency technicians.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card border-l-4 border-l-success"><div className="font-semibold mb-2">Average Response</div><div className="text-success text-2xl">&lt; 45 min</div></div>
        <div className="card border-l-4 border-l-warning"><div className="font-semibold mb-2">Availability</div><div className="text-warning text-2xl">24/7</div></div>
        <div className="card border-l-4 border-l-error"><div className="font-semibold mb-2">Fix Rate</div><div className="text-error text-2xl">98%</div></div>
      </div>
    </div>
  )
}

