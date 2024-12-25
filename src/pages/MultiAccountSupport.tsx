import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountCard: React.FC<{ name: string; balance: number; type: string }> = ({ name, balance, type }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">${balance.toLocaleString()}</p>
      <p className="text-sm text-gray-500">{type}</p>
    </CardContent>
  </Card>
);

const MultiAccountSupport: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Multi-Account Support</h1>
      <p className="mb-6">Manage all your accounts in one place with automatic synchronization and balance tracking.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <AccountCard name="Main Checking" balance={5432.10} type="Checking" />
        <AccountCard name="Savings" balance={10000} type="Savings" />
        <AccountCard name="Investment" balance={25000} type="Investment" />
        <AccountCard name="Credit Card" balance={-1500} type="Credit" />
      </div>
      
      <Button>Link New Account</Button>
    </div>
  );
};

export default MultiAccountSupport;
