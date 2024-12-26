import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Advanced Analytics</h1>
          <p className="text-lg text-primary">
            Visualize your financial data with interactive charts and comprehensive reporting
          </p>
        </div>
        {/* Content will be added in future updates */}
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;