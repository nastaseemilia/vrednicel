export default function KnowledgeHub(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Expert Knowledge Hub</h1>
      <p className="text-text-secondary mb-8">Guides, tips and troubleshooting resources from certified professionals.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <div className="text-sm text-accent mb-2">Maintenance</div>
          <div className="font-bold text-primary">Refrigerator Maintenance Guide</div>
          <p className="text-text-secondary text-sm mt-2">Keep your refrigerator efficient and extend its lifespan.</p>
        </div>
        <div className="card">
          <div className="text-sm text-error mb-2">Troubleshooting</div>
          <div className="font-bold text-primary">Washer Won't Drain?</div>
          <p className="text-text-secondary text-sm mt-2">Steps to diagnose and resolve common drainage issues.</p>
        </div>
      </div>
    </div>
  )
}

