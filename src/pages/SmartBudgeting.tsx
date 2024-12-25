import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { containerStyles, pageHeadingStyles, contentStyles } from '@/styles/shared';
import { cn } from '@/lib/utils';

const BudgetCategory: React.FC<{ category: string; spent: number; limit: number }> = ({ category, spent, limit }) => (
  <Card className="h-full">
    <CardHeader className="space-y-1">
      <CardTitle className="text-base md:text-lg">{category}</CardTitle>
      <p className="text-sm text-muted-foreground">${spent} / ${limit}</p>
    </CardHeader>
    <CardContent>
      <Progress 
        value={(spent / limit) * 100} 
        className="h-2 md:h-3"
      />
    </CardContent>
  </Card>
);

const SmartBudgeting: React.FC = () => {
  return (
    <div className={cn(containerStyles, contentStyles)}>
      <div className="space-y-2">
        <h1 className={pageHeadingStyles}>Smart Budgeting</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Create and manage budgets across multiple categories with real-time tracking and insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BudgetCategory category="Groceries" spent={250} limit={400} />
        <BudgetCategory category="Entertainment" spent={150} limit={200} />
        <BudgetCategory category="Transportation" spent={80} limit={150} />
        <BudgetCategory category="Utilities" spent={120} limit={200} />
      </div>
      
      <div className="flex justify-center sm:justify-start">
        <Button size="lg" className="w-full sm:w-auto">
          Add New Category
        </Button>
      </div>
    </div>
  );
};

export default SmartBudgeting;
