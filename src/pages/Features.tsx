import React, { useState, useEffect } from "react";
import { Plus, DollarSign, ChartBar, PiggyBank, CreditCard, Wallet, Calculator, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { DollarSign, ChartBar, PiggyBank, CreditCard, Wallet, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [features] = useState([
  const navigate = useNavigate();
  
  const features = [
    {
      id: "budgeting",
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Smart Budgeting",
      description: "Create and manage budgets across multiple categories with real-time tracking and insights.",
      path: "/smart-budgeting"
      description: "Create and manage budgets across multiple categories with real-time tracking and insights.",
      path: "smart-budgeting"
    },
    {
      id: "analytics",
      icon: <ChartBar className="w-8 h-8 text-accent" />,
      icon: <ChartBar className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Visualize your financial data with interactive charts and comprehensive reporting tools.",
      path: "/analytics"
      description: "Visualize your financial data with interactive charts and comprehensive reporting tools.",
      path: "analytics"
    },
    {
      id: "savings",
      icon: <PiggyBank className="w-8 h-8 text-accent" />,
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Savings Goals",
      description: "Set and track savings goals with automated progress monitoring and milestone alerts.",
      path: "/savings"
      description: "Set and track savings goals with automated progress monitoring and milestone alerts.",
      path: "savings"
    },
    {
      id: "bills",
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Bill Management",
      description: "Never miss a payment with automated bill tracking and payment reminders.",
      path: "/bill-management"
      description: "Never miss a payment with automated bill tracking and payment reminders.",
      path: "bill-management"
    },
    {
      id: "accounts",
      icon: <Wallet className="w-8 h-8 text-accent" />,
      icon: <Wallet className="w-8 h-8" />,
      title: "Multi-Account Support",
      description: "Manage all accounts in one place with automatic synchronization and balance tracking.",
      path: "/multi-account-support"
      description: "Manage all your accounts in one place with automatic synchronization and balance tracking.",
      path: "multi-account"
    },
    {
      id: "planning",
      icon: <Calculator className="w-8 h-8 text-accent" />,
      icon: <Calculator className="w-8 h-8" />,
      title: "Financial Planning Tools",
      description: "Access retirement calculators, loan analyzers, and investment planning tools.",
      path: "/financial-planning"
    },
    {
      id: "security",
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Secure Data Storage",
      description: "Your financial data is protected with bank-level encryption and security measures.",
      path: "/security"
    }
  ]);

  const handleAddFeature = () => {
    toast({
      title: "Coming Soon",
      description: "This feature is currently under development.",
    });
  };

  const scrollToFeature = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    scrollToFeature();
  }, []);
      description: "Access retirement calculators, loan analyzers, and investment planning tools.",
      path: "planning-tools"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Features</h1>
            <p className="text-secondary text-lg">
              Discover the tools and capabilities that make managing your finances effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                id={feature.id}
                className="bg-surface p-8 rounded-lg shadow-sm border border-border hover:border-accent transition-colors"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary mb-4">{feature.description}</p>
                <Button 
                  onClick={() => navigate(feature.path)}
                  variant="outline"
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Button
        onClick={handleAddFeature}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-primary"
      >
        <Plus className="w-6 h-6" />
      </Button>

      <Footer />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Features Overview</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Button
            key={feature.path}
            variant="outline"
            className="h-auto p-6 flex flex-col items-start gap-4"
            onClick={() => navigate(feature.path)}
          >
            <div className="rounded-lg bg-primary/10 p-3">
              {feature.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Features;