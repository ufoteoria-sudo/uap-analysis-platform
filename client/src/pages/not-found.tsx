import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <Link href="/">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}
