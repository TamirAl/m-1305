import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToolCard: React.FC<{ name: string; description: string }> = ({ name, description }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
      <Button className="mt-4">Use Tool</Button>
    </CardContent>
  </Card>
);

const FinancialPlanningTools: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname); // Debug line to verify routing

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Financial Planning Tools</h1>
      <p className="mb-6">Access retirement calculators, loan analyzers, and investment planning tools to make informed decisions about your long-term financial goals.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToolCard 
          name="Retirement Calculator" 
          description="Plan for your retirement by estimating your savings and future expenses."
        />
        <ToolCard 
          name="Loan Analyzer" 
          description="Compare different loan options and understand the total cost of borrowing."
        />
        <ToolCard 
          name="Investment Planner" 
          description="Create a diversified investment portfolio based on your risk tolerance and goals."
        />
        <ToolCard 
          name="Tax Estimator" 
          description="Estimate your tax liability and plan for future tax seasons."
        />
      </div>
    </div>
  );
};

export default FinancialPlanningTools;
