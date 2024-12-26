import { useState } from "react";
import { Plus, DollarSign, ChartBar, PiggyBank, CreditCard, Wallet, Calculator, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [features] = useState([
    {
      id: "budgeting",
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "Smart Budgeting",
      description: "Create and manage budgets across multiple categories with real-time tracking and insights."
    },
    {
      id: "analytics",
      icon: <ChartBar className="w-8 h-8 text-accent" />,
      title: "Advanced Analytics",
      description: "Visualize your financial data with interactive charts and comprehensive reporting tools."
    },
    {
      id: "savings",
      icon: <PiggyBank className="w-8 h-8 text-accent" />,
      title: "Savings Goals",
      description: "Set and track savings goals with automated progress monitoring and milestone alerts."
    },
    {
      id: "bills",
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      title: "Bill Management",
      description: "Never miss a payment with automated bill tracking and payment reminders."
    },
    {
      id: "accounts",
      icon: <Wallet className="w-8 h-8 text-accent" />,
      title: "Multi-Account Support",
      description: "Manage all accounts in one place with automatic synchronization and balance tracking."
    },
    {
      id: "planning",
      icon: <Calculator className="w-8 h-8 text-accent" />,
      title: "Financial Planning Tools",
      description: "Access retirement calculators, loan analyzers, and investment planning tools."
    },
    {
      id: "security",
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Secure Data Storage",
      description: "Your financial data is protected with bank-level encryption and security measures."
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

  React.useEffect(() => {
    scrollToFeature();
  }, []);

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
                  onClick={() => navigate(`/features#${feature.id}`)}
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
    </div>
  );
};

export default Features;