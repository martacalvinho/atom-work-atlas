import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Waves, TrendingDown, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const Liquidity = () => {
  const liquidityOpportunities = opportunitiesData.filter(opp => opp.category === "Liquidity");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-surface-elevated to-warning-subtle">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-text-muted hover:text-electric mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-warning-subtle">
              <Waves className="w-8 h-8 text-warning" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Liquidity Provision</h1>
              <p className="text-text-secondary">Earn fees by providing liquidity to DEX pools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* How It Works */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How Liquidity Provision Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-text-secondary">
              Provide two assets to a pool to earn fees. <strong>Beware Impermanent Loss.</strong> 
              Your tokens enable trading while you earn a share of swap fees proportional to your pool share.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">How You Earn</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• <strong>Swap fees:</strong> Earn from every trade in the pool</li>
                  <li>• <strong>Liquidity incentives:</strong> Additional token rewards</li>
                  <li>• <strong>Bonding rewards:</strong> Higher APR for locking LP tokens</li>
                  <li>• <strong>Compounding:</strong> Reinvest fees to maximize returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Key Considerations</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• <strong>Pool type:</strong> Weighted vs stable pools</li>
                  <li>• <strong>Fee tiers:</strong> Higher fees = more earnings, less volume</li>
                  <li>• <strong>Asset correlation:</strong> Similar assets = less IL</li>
                  <li>• <strong>Volume patterns:</strong> High volume = more fee earnings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impermanent Loss Warning */}
        <Card className="mb-12 bg-error-subtle border-error">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-error mb-2">Understanding Impermanent Loss</h3>
                <p className="text-sm text-text-secondary mb-3">
                  When you provide liquidity, you're exposed to impermanent loss - the difference in value between 
                  holding tokens separately vs. in a pool when prices change.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">When IL is Higher:</h5>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Large price changes between assets</li>
                      <li>• Volatile vs stable asset pairs</li>
                      <li>• Long-term holdings during trends</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">When IL is Lower:</h5>
                    <ul className="text-text-secondary space-y-1">
                      <li>• Correlated asset pairs (ATOM/stATOM)</li>
                      <li>• Stable asset pairs (USDC/USDT)</li>
                      <li>• High fee earnings offsetting IL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Pools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Popular ATOM Liquidity Pools</h2>
          <div className="grid gap-6">
            {liquidityOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* Pool Types Explanation */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">Understanding Pool Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Weighted Pools (e.g., 50/50)</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Most common type. Assets maintain target weights through price adjustments.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Good for uncorrelated assets</li>
                  <li>• Higher IL potential</li>
                  <li>• Often have liquidity incentives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Stable/Correlated Pools</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Optimized for assets that should trade near parity (like ATOM/stATOM).
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Lower IL for similar assets</li>
                  <li>• Efficient price discovery</li>
                  <li>• Lower fees but higher volume</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="bg-electric-subtle border-electric">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-electric mb-2">Ready to Provide Liquidity?</h3>
                <p className="text-sm text-text-secondary">
                  Start with Osmosis - the primary DEX for ATOM and Cosmos assets.
                </p>
              </div>
              <Button className="bg-electric hover:bg-electric-bright text-white" asChild>
                <a href="https://app.osmosis.zone/" target="_blank" rel="noopener noreferrer">
                  Open Osmosis
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Liquidity;