import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BillManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Bill Management</h1>
          <p className="text-lg text-primary">
            Never miss a payment with automated bill tracking and reminders
          </p>
        </div>
        {/* Content will be added in future updates */}
      </main>
      <Footer />
    </div>
  );
};

export default BillManagement;