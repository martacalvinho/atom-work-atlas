import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Droplet, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const LiquidStaking = () => {
  const liquidStakingOpportunities = opportunitiesData.filter(opp => opp.category === "Liquid Staking");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-liquid-staking/15">
              <Droplet className="w-8 h-8 text-liquid-staking" />
            </div>
            <div>
              <h1 className="text-display font-semibold text-foreground">Liquid Staking</h1>
              <p className="text-muted-foreground">Stake ATOM, receive liquid staking tokens</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Stake ATOM, receive an LST (stATOM/stkATOM/qATOM) that accrues rewards and remains usable in DeFi.
            No unbonding period, auto-compounding rewards.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        {/* LST Options */}
        <div className="mb-12">
          <h2 className="text-h2 font-semibold mb-6">Available Liquid Staking Tokens</h2>
          <div className="grid gap-6">
            {liquidStakingOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* What You Can Do Next */}
        <div className="mb-12">
          <h2 className="text-h2 font-semibold mb-6">What You Can Do With LSTs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/liquidity" className="group">
              <Card className="border-border/50 hover:border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.01] bg-surface">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">Provide Liquidity</h4>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use LSTs in liquidity pools (e.g., ATOM/stATOM) to earn additional fees
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/lending" className="group">
              <Card className="border-border/50 hover:border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.01] bg-surface">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">Lending & Borrowing</h4>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Supply LSTs to lending protocols or use as collateral for borrowing
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Risk Notice */}
        <Card className="bg-risk-oracle/10 border-risk-oracle/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-risk-oracle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-risk-oracle mb-2">Important LST Risks</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Smart contract risk:</strong> Protocol bugs could affect your tokens</li>
                  <li>• <strong>Peg risk:</strong> LSTs may trade below their underlying ATOM value</li>
                  <li>• <strong>Liquidity risk:</strong> May not always be able to swap LSTs instantly</li>
                  <li>• <strong>Validator risk:</strong> Slashing affects LST value</li>
                </ul>
                <Link to="/risks" className="inline-flex items-center text-risk-oracle hover:text-risk-oracle/80 mt-3 text-sm font-medium">
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