import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MultiAccountSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Multi-Account Support</h1>
          <p className="text-lg text-primary">
            Manage all your accounts in one place with automatic synchronization
          </p>
        </div>
        {/* Content will be added in future updates */}
      </main>
      <Footer />
    </div>
  );
};

export default MultiAccountSupport;