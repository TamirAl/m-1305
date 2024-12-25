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
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex -mb-px overflow-x-auto scrollbar-none">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex-none py-4 px-3 md:px-4 text-sm font-medium transition-colors hover:text-primary",
                "border-b-2 whitespace-nowrap",
                location.pathname === item.path
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

const FeaturesLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FeatureNav />
      <main className="flex-grow py-4 md:py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default FeaturesLayout; 