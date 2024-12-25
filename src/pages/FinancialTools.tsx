import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, Home, PiggyBank, LineChart, BarChart, Wallet, TrendingUp, Building, Percent, DollarSign as Currency } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const tools = [
  {
    title: "401k Retirement Calculator",
    description: "See how much your 401k balance and payout amount in retirement will work for you.",
    category: "Retirement",
    icon: Calculator,
    path: "/calculators/401k"
  },
  {
    title: "Exchange Rate Calculator",
    description: "Calculate currency exchange rates and view historical trends between different currencies.",
    category: "Other",
    icon: Currency,
    path: "/calculators/exchange-rate"
  },
  {
    title: "Inside Trading Tracker",
    description: "Monitor insider trading patterns to gain insights into how company executives and major shareholders are trading their stock positions.",
    category: "Investing",
    icon: LineChart,
    path: "/calculators/insider-trading"
  },
  {
    title: "Home Affordability Calculator",
    description: "See how much house you can afford based on your income, loan details, debt and more!",
    category: "Investing",
    icon: Home,
    path: "/calculators/home-affordability"
  },
  {
    title: "Compound Interest Calculator",
    description: "See how your investments grow over time by earning interest on interest and letting your money work for you.",
    category: "Savings",
    icon: PiggyBank,
    path: "/calculators/compound-interest"
  },
  {
    title: "Financial Freedom Calculator",
    description: "See how long your savings will last by accounting for your monthly expenses and savings growth rate.",
    category: "Retirement",
    icon: Wallet,
    path: "/calculators/financial-freedom"
  },
  {
    title: "ROI Calculator",
    description: "See how to calculate the return on your investments and evaluate the gain or loss.",
    category: "Investing",
    icon: TrendingUp,
    path: "/calculators/roi"
  },
  {
    title: "Loan Calculator",
    description: "See how to easily plan your loans and understand your repayment schedule.",
    category: "Debt",
    icon: Building,
    path: "/calculators/loan"
  },
  {
    title: "Bogleheads 3-Fund Portfolio Calculator",
    description: "See the performance of a Bogleheads three-fund portfolio based on the past 20 years.",
    category: "Investing",
    icon: BarChart,
    path: "/calculators/bogleheads"
  },
  {
    title: "Early Mortgage Payoff Calculator",
    description: "Calculate how much time and interest you can save by making additional payments on your mortgage or investing the difference.",
    category: "Debt",
    icon: Building,
    path: "/calculators/mortgage-payoff"
  },
  {
    title: "Inflation Calculator",
    description: "See how inflation is impacting an asset's future price and your future buying power.",
    category: "Other",
    icon: Percent,
    path: "/calculators/inflation"
  },
  {
    title: "Stock Portfolio Backtest",
    description: "See how a portfolio would have performed, just remember that past performance isn't indicative of future returns.",
    category: "Investing",
    icon: LineChart,
    path: "/calculators/portfolio-backtest"
  }
];

const categories = ["All", "Investing", "Retirement", "Savings", "Debt", "Other"];

export default function FinancialTools() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Try our free financial tools and calculators</h1>
          <p className="text-lg text-muted-foreground">
            All the interactive tools and calculators you need to visualize and navigate your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link to={tool.path} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <tool.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {tool.category}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}