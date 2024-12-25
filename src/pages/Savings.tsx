import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const SavingsGoal: React.FC<{ name: string; current: number; target: number }> = ({ name, current, target }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <Progress value={(current / target) * 100} className="mb-2" />
      <p>${current} / ${target}</p>
    </CardContent>
  </Card>
);

const SavingsGoals: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Savings Goals</h1>
      <p className="mb-6">Set and track savings goals with automated progress monitoring and milestone alerts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <SavingsGoal name="Emergency Fund" current={5000} target={10000} />
        <SavingsGoal name="Vacation" current={1500} target={3000} />
        <SavingsGoal name="New Car" current={7000} target={20000} />
        <SavingsGoal name="Home Down Payment" current={15000} target={50000} />
      </div>
      
      <Button>Add New Goal</Button>
    </div>
  );
};

export default SavingsGoals;
