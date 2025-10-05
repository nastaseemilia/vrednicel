import { Outlet, NavLink } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <header className="bg-white shadow-subtle sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-primary font-bold">Appliance Services Hub</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-sm">
                <NavLink to="/" className={({isActive})=> isActive? 'text-primary font-semibold border-b-2 border-secondary px-3 py-2':'text-text-secondary hover:text-primary px-3 py-2'}>Home</NavLink>
                <NavLink to="/instant-booking" className="text-text-secondary hover:text-primary px-3 py-2">Book Service</NavLink>
                <NavLink to="/emergency-services" className="text-error hover:text-error-700 px-3 py-2 font-medium">Emergency</NavLink>
                <NavLink to="/knowledge-hub" className="text-text-secondary hover:text-primary px-3 py-2">Knowledge Hub</NavLink>
                <NavLink to="/dashboard" className="text-text-secondary hover:text-primary px-3 py-2">Dashboard</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-primary text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-primary-200 text-sm">© 2025 Appliance Services Hub. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}

