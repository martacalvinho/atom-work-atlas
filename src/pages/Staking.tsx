import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Shield, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import opportunitiesData from "@/data/opportunities.json";

const Staking = () => {
  const stakingOpportunities = opportunitiesData.filter(opp => opp.category === "Staking");

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
            <div className="p-3 rounded-xl bg-staking/15">
              <Shield className="w-8 h-8 text-staking" />
            </div>
            <div>
              <h1 className="text-display font-semibold text-foreground">ATOM Staking</h1>
              <p className="text-muted-foreground">Secure Cosmos Hub by delegating your ATOM</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Secure Cosmos Hub by delegating ATOM to validators. <strong>Unbonding ≈21 days</strong>. 
            Rewards vary by validator commission and network conditions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        {/* Quick Start Wallets */}
        <div className="mb-12">
          <h2 className="text-h2 font-semibold mb-6">Start Staking</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button size="lg" className="h-auto p-6 bg-staking hover:bg-staking/90 text-white" asChild>
              <a href="https://www.keplr.app/" target="_blank" rel="noopener noreferrer" className="block text-center">
                <div>
                  <h4 className="font-semibold mb-2">Keplr Wallet</h4>
                  <p className="text-sm opacity-90">Most popular Cosmos wallet</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
            
            <Button size="lg" className="h-auto p-6 bg-liquid-staking hover:bg-liquid-staking/90 text-white" asChild>
              <a href="https://www.leapwallet.io/" target="_blank" rel="noopener noreferrer" className="block text-center">
                <div>
                  <h4 className="font-semibold mb-2">Leap Wallet</h4>
                  <p className="text-sm opacity-90">Modern mobile-first experience</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
            
            <Button size="lg" className="h-auto p-6 bg-lending hover:bg-lending/90 text-black" asChild>
              <a href="https://wallet.cosmostation.io/" target="_blank" rel="noopener noreferrer" className="block text-center">
                <div>
                  <h4 className="font-semibold mb-2">Cosmostation</h4>
                  <p className="text-sm opacity-90">Comprehensive staking features</p>
                  <ExternalLink className="w-4 h-4 mx-auto mt-2" />
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Available Opportunities */}
        <div className="mb-12">
          <h2 className="text-h2 font-semibold mb-6">Staking Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakingOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>

        {/* Learn More */}
        <Card className="bg-staking/10 border-staking/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-staking mb-2">Learn About Validator Selection</h3>
                <p className="text-sm text-muted-foreground">
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