import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (featureId: string) => {
    navigate(`/features#${featureId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          BankApp
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem 
                      onClick={() => handleFeatureClick('budgeting')} 
                      title="Smart Budgeting"
                    >
                      Create and manage budgets with real-time tracking
                    </ListItem>
                    <ListItem 
                      onClick={() => handleFeatureClick('analytics')} 
                      title="Advanced Analytics"
                    >
                      Interactive charts and comprehensive reporting
                    </ListItem>
                    <ListItem 
                      onClick={() => handleFeatureClick('savings')} 
                      title="Savings Goals"
                    >
                      Set and track savings goals with automated monitoring
                    </ListItem>
                    <ListItem 
                      onClick={() => handleFeatureClick('bills')} 
                      title="Bill Management"
                    >
                      Automated bill tracking and payment reminders
                    </ListItem>
                    <ListItem 
                      onClick={() => handleFeatureClick('accounts')} 
                      title="Multi-Account Support"
                    >
                      Manage all accounts in one place
                    </ListItem>
                    <ListItem 
                      onClick={() => handleFeatureClick('planning')} 
                      title="Financial Planning"
                    >
                      Access retirement calculators and loan analyzers
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/financial-tools" className="text-secondary hover:text-primary transition-colors">
            Financial Tools
          </Link>
          <Link to="/pricing" className="text-secondary hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-secondary hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;