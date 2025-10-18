import { Link } from 'wouter';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">UAP Analysis Platform</h1>
          <p className="text-xl text-slate-600 mb-8">
            Advanced analysis and reporting for UAP data
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign In
              </a>
            </Link>
            <Link href="/register">
              <a className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition">
                Get Started
              </a>
            </Link>
          </div>
        </header>
        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Upload & Process</h3>
            <p className="text-slate-600">
              Upload your UAP data files for automated processing and analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Advanced Analysis</h3>
            <p className="text-slate-600">
              Run sophisticated analysis algorithms on your UAP datasets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reports & Insights</h3>
            <p className="text-slate-600">
              Generate comprehensive reports and visualizations of findings.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
