export default function CustomerDashboard(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Customer Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-elevated"><div className="text-sm text-text-secondary">Active Services</div><div className="text-2xl font-bold text-primary">2</div></div>
        <div className="card-elevated"><div className="text-sm text-text-secondary">Loyalty Points</div><div className="text-2xl font-bold text-primary">1,250</div></div>
        <div className="card-elevated"><div className="text-sm text-text-secondary">Warranties</div><div className="text-2xl font-bold text-primary">5</div></div>
        <div className="card-elevated"><div className="text-sm text-text-secondary">Maintenance Due</div><div className="text-2xl font-bold text-primary">3</div></div>
      </div>
    </div>
  )
}

