import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const FeatureNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/features/smart-budgeting', label: 'Smart Budgeting' },
    { path: '/features/analytics', label: 'Analytics' },
    { path: '/features/savings', label: 'Savings' },
    { path: '/features/bill-management', label: 'Bill Management' },
    { path: '/features/multi-account', label: 'Multi-Account' },
    { path: '/features/planning-tools', label: 'Planning Tools' },
  ];

  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "py-4 px-2 text-sm font-medium border-b-2 whitespace-nowrap",
                location.pathname === item.path
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const FeaturesLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <FeatureNav />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default FeaturesLayout; 