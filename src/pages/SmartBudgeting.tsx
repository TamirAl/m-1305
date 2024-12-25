import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

const BudgetCategory: React.FC<{ category: string; spent: number; limit: number }> = ({ category, spent, limit }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{category}</CardTitle>
      <CardDescription>${spent} / ${limit}</CardDescription>
    </CardHeader>
    <CardContent>
      <Progress value={(spent / limit) * 100} className="w-full" />
    </CardContent>
  </Card>
);

const SmartBudgeting: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname); // Debug line to verify routing

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Smart Budgeting</h1>
      <p className="mb-6">Create and manage budgets across multiple categories with real-time tracking and insights.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <BudgetCategory category="Groceries" spent={250} limit={400} />
        <BudgetCategory category="Entertainment" spent={150} limit={200} />
        <BudgetCategory category="Transportation" spent={80} limit={150} />
        <BudgetCategory category="Utilities" spent={120} limit={200} />
      </div>
      
      <Button>Add New Category</Button>
    </div>
  );
};

export default SmartBudgeting;
