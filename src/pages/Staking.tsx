import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Shield, Clock, Zap, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const Staking = () => {
  const stakingOpportunities = opportunitiesData.filter(opp => opp.category === "Staking");

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
              <Shield className="w-8 h-8 text-electric" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">ATOM Staking</h1>
              <p className="text-text-secondary">Secure Cosmos Hub by delegating your ATOM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* How It Works */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">How ATOM Staking Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-text-secondary">
              Secure Cosmos Hub by delegating ATOM to validators. <strong>Unbonding ≈21 days</strong>. 
              Rewards vary by validator commission and network conditions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Earn staking rewards (typically 10-20% APR)</li>
                  <li>• Help secure the Cosmos Hub network</li>
                  <li>• Participate in governance voting</li>
                  <li>• Compound rewards by restaking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Important Risks</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-warning" />
                    <span className="text-text-secondary"><strong>21-day unbonding:</strong> No rewards during exit</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-error" />
                    <span className="text-text-secondary"><strong>Slashing risk:</strong> Validator misbehavior penalties</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You'll Need */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle className="text-text-primary">What You'll Need</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-electric-subtle rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-electric" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Cosmos Wallet</h4>
                <p className="text-sm text-text-secondary">Keplr, Leap, or Cosmostation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success-subtle rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Badge className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">ATOM Tokens</h4>
                <p className="text-sm text-text-secondary">On Cosmos Hub (IBC if needed)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning-subtle rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ExternalLink className="w-6 h-6 text-warning" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Validator Research</h4>
                <p className="text-sm text-text-secondary">Check commission & uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Start Staking</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button className="h-auto p-6 bg-electric hover:bg-electric-bright text-white" asChild>
              <a href="https://www.keplr.app/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Keplr Wallet</h4>
                  <p className="text-sm opacity-90">Most popular Cosmos wallet</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
            
            <Button className="h-auto p-6 bg-success hover:bg-success text-white" asChild>
              <a href="https://www.leapwallet.io/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Leap Wallet</h4>
                  <p className="text-sm opacity-90">Modern mobile-first experience</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
            
            <Button className="h-auto p-6 bg-warning hover:bg-warning text-white" asChild>
              <a href="https://wallet.cosmostation.io/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Cosmostation</h4>
                  <p className="text-sm opacity-90">Comprehensive staking features</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Available Opportunities */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Staking Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakingOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* Learn More */}
        <Card className="mt-12 bg-electric-subtle border-electric-subtle">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-electric mb-2">Learn About Validator Selection</h3>
                <p className="text-sm text-text-secondary">
                  Read the official Cosmos Hub delegator FAQ for best practices on choosing validators.
                </p>
              </div>
              <Button variant="outline" asChild>
                <a href="https://hub.cosmos.network/main/delegators/" target="_blank" rel="noopener noreferrer">
                  Read Guide
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

export default Staking;