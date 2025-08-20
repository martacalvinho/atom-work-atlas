import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Droplet, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const LiquidStaking = () => {
  const liquidStakingOpportunities = opportunitiesData.filter(opp => opp.category === "Liquid Staking");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-surface-elevated to-success-subtle">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-text-muted hover:text-electric mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-success-subtle">
              <Droplet className="w-8 h-8 text-success" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Liquid Staking</h1>
              <p className="text-text-secondary">Stake ATOM, receive liquid staking tokens</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* How It Works */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How Liquid Staking Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-text-secondary">
              Stake ATOM, receive an LST (stATOM/stkATOM/qATOM) that accrues rewards and remains usable in DeFi.
              Liquid staking tokens represent your staked ATOM and can be traded, used as collateral, or provided as liquidity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Benefits over Native Staking</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• <strong>No unbonding period</strong> - trade LSTs anytime</li>
                  <li>• <strong>DeFi composability</strong> - use in lending, LPs</li>
                  <li>• <strong>Auto-compounding</strong> - rewards automatically reinvested</li>
                  <li>• <strong>Professional delegation</strong> - optimized validator selection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-4">How LSTs Work</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center text-success font-semibold text-xs">1</div>
                    <span className="text-text-secondary">Deposit ATOM → receive LST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center text-success font-semibold text-xs">2</div>
                    <span className="text-text-secondary">LST value increases with staking rewards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center text-success font-semibold text-xs">3</div>
                    <span className="text-text-secondary">Redeem LST → get ATOM + rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LST Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Available Liquid Staking Tokens</h2>
          <div className="grid gap-6">
            {liquidStakingOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* What You Can Do Next */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">What You Can Do With LSTs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/liquidity" className="group">
                <div className="p-4 border border-border-subtle rounded-lg hover:border-electric-dim transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-text-primary group-hover:text-electric transition-colors">Provide Liquidity</h4>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-electric transition-colors" />
                  </div>
                  <p className="text-sm text-text-secondary">
                    Use LSTs in liquidity pools (e.g., ATOM/stATOM) to earn additional fees
                  </p>
                </div>
              </Link>
              
              <Link to="/lending" className="group">
                <div className="p-4 border border-border-subtle rounded-lg hover:border-electric-dim transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-text-primary group-hover:text-electric transition-colors">Lending & Borrowing</h4>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-electric transition-colors" />
                  </div>
                  <p className="text-sm text-text-secondary">
                    Supply LSTs to lending protocols or use as collateral for borrowing
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Risk Notice */}
        <Card className="bg-warning-subtle border-warning-subtle">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-warning mb-2">Important LST Risks</h3>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• <strong>Smart contract risk:</strong> Protocol bugs could affect your tokens</li>
                  <li>• <strong>Peg risk:</strong> LSTs may trade below their underlying ATOM value</li>
                  <li>• <strong>Liquidity risk:</strong> May not always be able to swap LSTs instantly</li>
                  <li>• <strong>Validator risk:</strong> Slashing affects LST value</li>
                </ul>
                <Link to="/risks" className="inline-flex items-center text-warning hover:text-warning-subtle mt-3 text-sm font-medium">
                  Learn more about risks <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiquidStaking;