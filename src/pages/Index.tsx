import { ArrowRight, ChevronDown, DollarSign, PiggyBank, Shield, ChartBar, Tags, Globe, Wallet, FileText } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-accent" />,
      title: "Budgeting & Expense Tracking",
      description: "Create and manage budgets across multiple categories with detailed transaction tracking and tagging."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-accent" />,
      title: "Advanced Reporting",
      description: "Generate comprehensive financial reports with customizable charts and detailed breakdowns."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Multi-Currency Support",
      description: "Handle multiple currencies seamlessly with automatic conversion and tracking."
    }
  ];

  const detailedFeatures = [
    {
      question: "How does the budgeting system work?",
      answer: "Our budgeting system allows you to create custom categories, set spending limits, and track expenses in real-time. Tag transactions for detailed analysis and get insights into your spending patterns."
    },
    {
      question: "What kind of reports are available?",
      answer: "Access weekly, monthly, and yearly expense breakdowns, detailed account auditing views, and customizable charts for visualizing your financial data."
    },
    {
      question: "Can I integrate with other financial tools?",
      answer: "Yes! Our platform offers a comprehensive REST API for seamless integration with other financial tools and systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Smart financial management
              <br />
              <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
                for your future
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              Track your finances, manage budgets, and plan for retirement with our comprehensive financial management platform.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Comprehensive Financial Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-white">
          <div className="mx-auto max-w-7xl text-center">
            <div className="flex justify-center mb-8">
              <Shield className="w-16 h-16" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Bank-Grade Security</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Your financial data is protected with industry-leading encryption and security measures.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Learn About Our Security
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {detailedFeatures.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Ready to take control?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their wealth with our platform.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;