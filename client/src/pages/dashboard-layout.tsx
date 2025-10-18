import { Link, useLocation } from 'wouter';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { path: '/dashboard/upload', label: 'Upload' },
    { path: '/dashboard/analysis', label: 'Analysis' },
    { path: '/dashboard/database', label: 'Database' },
    { path: '/dashboard/reports', label: 'Reports' },
    { path: '/dashboard/account', label: 'Account' },
    { path: '/dashboard/subscription', label: 'Subscription' },
    { path: '/dashboard/admin', label: 'Admin' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="text-xl font-bold text-slate-900">UAP Platform</a>
            </Link>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
