import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Banknote, AlertTriangle, ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const Lending = () => {
  const lendingOpportunities = opportunitiesData.filter(opp => opp.category === "Lending");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-surface-elevated to-error-subtle">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-text-muted hover:text-electric mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-error-subtle">
              <Banknote className="w-8 h-8 text-error" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Lending & Borrowing</h1>
              <p className="text-text-secondary">Supply ATOM to earn interest or borrow against collateral</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* How It Works */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How DeFi Lending Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              Supply ATOM (or LST) to earn variable interest; borrow against collateral. <strong>Liquidation risk applies.</strong>
              All loans are over-collateralized to protect lenders and maintain protocol solvency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <h4 className="font-semibold text-text-primary">Supply (Lending)</h4>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Deposit ATOM/LSTs to earn variable APY</li>
                  <li>• Interest compounds automatically</li>
                  <li>• Withdraw anytime (subject to utilization)</li>
                  <li>• No liquidation risk for suppliers</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-warning" />
                  <h4 className="font-semibold text-text-primary">Borrow</h4>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Use ATOM/LSTs as collateral</li>
                  <li>• Borrow other assets (USDC, OSMO, etc.)</li>
                  <li>• Pay variable interest on borrowed amount</li>
                  <li>• <strong>Risk of liquidation</strong> if LTV too high</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liquidation Warning */}
        <Card className="mb-12 bg-error-subtle border-error">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-error mb-2">Understanding Liquidation Risk</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Your collateral can be sold automatically if its value falls below required levels (Loan-to-Value ratio).
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">How to Avoid Liquidation:</h5>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Keep LTV well below max (e.g., 50% if max is 75%)</li>
                      <li>• Monitor positions during volatility</li>
                      <li>• Add collateral or repay debt if needed</li>
                      <li>• Set up price alerts for your assets</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">Liquidation Process:</h5>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Automatic when LTV exceeds threshold</li>
                      <li>• Liquidation penalty (typically 5-10%)</li>
                      <li>• Remaining collateral returned to you</li>
                      <li>• No personal liability beyond collateral</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">ATOM Lending Platforms</h2>
          <div className="grid gap-6">
            {lendingOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* Interest Rate Explanation */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How Interest Rates Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-text-secondary text-sm">
                Interest rates in DeFi lending are determined by supply and demand dynamics. Higher utilization = higher borrow rates = higher supply rates.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-success mb-2">Low Utilization (0-80%)</h4>
                  <p className="text-sm text-text-secondary">
                    Low borrow rates, gradually increasing. Good for borrowers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-warning mb-2">High Utilization (80-95%)</h4>
                  <p className="text-sm text-text-secondary">
                    Rates increase more rapidly. Balance between supply and demand.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-error mb-2">Critical (95%+)</h4>
                  <p className="text-sm text-text-secondary">
                    Very high rates to incentivize repayment. May limit withdrawals.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="bg-electric-subtle border-electric">
          <CardHeader>
            <CardTitle className="text-electric">Common Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">For Suppliers</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Earn yield on ATOM holdings</li>
                  <li>• Better than CEX lending rates</li>
                  <li>• Maintain custody of assets</li>
                  <li>• Flexible withdrawal terms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">For Borrowers</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Leverage positions (borrow to buy more)</li>
                  <li>• Access liquidity without selling ATOM</li>
                  <li>• Arbitrage opportunities</li>
                  <li>• Tax-efficient strategies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lending;