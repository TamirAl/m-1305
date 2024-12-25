import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const BillItem: React.FC<{ name: string; amount: number; dueDate: string }> = ({ name, amount, dueDate }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="flex justify-between">
        <span>{name}</span>
        <span>${amount}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex justify-between items-center">
      <p>Due: {dueDate}</p>
      <Checkbox id={`paid-${name}`} />
    </CardContent>
  </Card>
);

const BillManagement: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Bill Management</h1>
      <p className="mb-6">Never miss a payment with automated bill tracking and payment reminders.</p>

      <div className="mb-6">
        <BillItem name="Electricity" amount={120} dueDate="2024-01-15" />
        <BillItem name="Internet" amount={80} dueDate="2024-01-20" />
        <BillItem name="Rent" amount={1500} dueDate="2024-02-01" />
        <BillItem name="Phone" amount={50} dueDate="2024-02-05" />
      </div>

      <Button>Add New Bill</Button>
    </div>
  );
};

export default BillManagement;
