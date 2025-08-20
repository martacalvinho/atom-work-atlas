import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Activity, AlertTriangle, ArrowLeft, DollarSign, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const Perps = () => {
  const perpOpportunities = opportunitiesData.filter(opp => opp.category === "Perps");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-surface-elevated to-electric-subtle">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-text-muted hover:text-electric mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-electric-subtle">
              <Activity className="w-8 h-8 text-electric" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Perpetual Trading</h1>
              <p className="text-text-secondary">Trade ATOM with leverage on decentralized platforms</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* How It Works */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How Perpetual Futures Work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-text-secondary">
              Trade ATOM with leverage on decentralized orderbooks/AMMs. <strong>Funding & liquidation risk.</strong>
              Perpetuals track spot prices through funding rates and allow leveraged long/short positions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Key Features</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• <strong>No expiry:</strong> Hold positions indefinitely</li>
                  <li>• <strong>Leverage:</strong> Amplify exposure (typically 2-20x)</li>
                  <li>• <strong>Long/Short:</strong> Profit from price moves in either direction</li>
                  <li>• <strong>Funding mechanism:</strong> Keeps price close to spot</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Trading Mechanics</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• <strong>Margin:</strong> Collateral required to open position</li>
                  <li>• <strong>Mark price:</strong> Fair price for liquidation calculations</li>
                  <li>• <strong>Funding rate:</strong> Payment between longs and shorts</li>
                  <li>• <strong>Liquidation:</strong> Position closed if margin insufficient</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Warnings */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-error-subtle border-error">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-error mb-2">Liquidation Risk</h3>
                  <p className="text-sm text-text-secondary mb-2">
                    Your position can be automatically closed if losses approach your margin balance.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Higher leverage = higher liquidation risk</li>
                    <li>• Volatile markets increase risk</li>
                    <li>• Use stop losses to manage risk</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-warning-subtle border-warning">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-warning mb-2">Funding Payments</h3>
                  <p className="text-sm text-text-secondary mb-2">
                    Regular payments between long and short positions to keep perp price close to spot.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Paid every 1-8 hours depending on platform</li>
                    <li>• Can be positive or negative</li>
                    <li>• Reduces returns for popular side</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">ATOM Perpetual Platforms</h2>
          <div className="grid gap-6">
            {perpOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* Platform Comparison */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">Platform Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Orderbook Models</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Traditional order matching with limit/market orders (dYdX, Injective).
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Better price discovery for large orders</li>
                  <li>• Professional trading features</li>
                  <li>• May have lower liquidity for some pairs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">AMM/Pool Models</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Trade against liquidity pools with algorithmic pricing (Levana).
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Always available liquidity</li>
                  <li>• Simpler user experience</li>
                  <li>• May have higher spreads for large trades</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Management */}
        <Card className="mb-12 bg-electric-subtle border-electric">
          <CardHeader>
            <CardTitle className="text-electric">Risk Management Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Position Sizing</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Never risk more than you can afford to lose</li>
                  <li>• Start with small positions to learn</li>
                  <li>• Use only 1-3x leverage initially</li>
                  <li>• Size positions based on volatility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Trade Management</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Always set stop-loss orders</li>
                  <li>• Take profits at predefined levels</li>
                  <li>• Monitor funding rates</li>
                  <li>• Keep extra margin for volatility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Footer */}
        <Card className="bg-error-subtle border-error">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-error mb-2">High-Risk Trading</h3>
                <p className="text-sm text-text-secondary">
                  Perpetual futures are high-risk, high-reward instruments suitable only for experienced traders. 
                  Most retail traders lose money with leveraged products. Never trade with funds you can't afford to lose.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Perps;