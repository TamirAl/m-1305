import { ArrowRight, ChevronDown, DollarSign, PiggyBank, Shield, ChartBar } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Take control of your
              <br />
              <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
                financial future
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              Track your net worth, manage investments, and plan for retirement - all in one secure platform.
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

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Financial Dashboard Preview"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Comprehensive Financial Management</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
                <div className="mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Net Worth Tracking</h3>
                <p className="text-secondary">Track all your assets and liabilities in one place with automatic syncing.</p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
                <div className="mb-4">
                  <ChartBar className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Investment Portfolio</h3>
                <p className="text-secondary">Monitor and analyze your investments with real-time tracking and insights.</p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
                <div className="mb-4">
                  <PiggyBank className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Retirement Planning</h3>
                <p className="text-secondary">Plan your future with powerful retirement calculators and forecasting tools.</p>
              </div>
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
              {[
                {
                  question: "How secure is my financial data?",
                  answer: "We use bank-level encryption and security measures to protect your sensitive financial information.",
                },
                {
                  question: "Can I connect all my financial accounts?",
                  answer: "Yes, Maybe supports connections with thousands of financial institutions for automatic account syncing.",
                },
                {
                  question: "How do I get started?",
                  answer: "Simply create an account and follow our guided setup process to connect your accounts and start tracking your finances.",
                },
              ].map((faq, index) => (
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
              Join thousands of users who are already managing their wealth with Maybe.
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