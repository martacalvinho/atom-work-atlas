import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Clock, Zap, TrendingDown, AlertTriangle, DollarSign, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const riskSections = [
  {
    title: "Staking Risks",
    icon: Shield,
    color: "electric",
    risks: [
      {
        name: "Unbonding Period",
        icon: Clock,
        description: "ATOM has a 21-day unbonding period where your tokens are locked and don't earn rewards. During this time, you cannot trade or use your tokens.",
        mitigation: "Plan ahead and only unstake when necessary. Consider liquid staking for flexibility."
      },
      {
        name: "Slashing Risk", 
        icon: Zap,
        description: "Validators can be penalized for downtime or misbehavior, reducing your staked tokens. Penalties range from 0.01% to 5%.",
        mitigation: "Research validators carefully, diversify across multiple validators, monitor validator performance."
      }
    ]
  },
  {
    title: "Smart Contract Risks",
    icon: Shield,
    color: "warning",
    risks: [
      {
        name: "Code Bugs",
        icon: AlertTriangle,
        description: "Smart contracts may contain bugs that could result in loss of funds. Even audited protocols can have undiscovered vulnerabilities.",
        mitigation: "Use established protocols with good track records. Start with small amounts. Monitor protocol updates."
      },
      {
        name: "Upgrade Risks",
        icon: Shield,
        description: "Protocol upgrades might introduce new bugs or change functionality in unexpected ways.",
        mitigation: "Stay informed about protocol changes. Be cautious during major upgrades."
      }
    ]
  },
  {
    title: "Market Risks",
    icon: TrendingDown,
    color: "error",
    risks: [
      {
        name: "Impermanent Loss",
        icon: TrendingDown,
        description: "When providing liquidity, price changes between assets can result in less value than holding tokens separately. Loss becomes permanent when you withdraw.",
        mitigation: "Use correlated asset pairs (ATOM/stATOM). Monitor IL calculators. Consider fee earnings vs IL."
      },
      {
        name: "Peg Risk",
        icon: TrendingDown,
        description: "Liquid staking tokens may trade below their underlying value due to market conditions, liquidity constraints, or loss of confidence.",
        mitigation: "Understand redemption mechanisms. Monitor peg health. Have exit strategies ready."
      }
    ]
  },
  {
    title: "Liquidation Risks",
    icon: AlertTriangle,
    color: "error",
    risks: [
      {
        name: "Margin Liquidation",
        icon: AlertTriangle,
        description: "In lending and perpetual trading, your collateral can be automatically sold if its value falls below required levels.",
        mitigation: "Maintain conservative LTV ratios. Set up price alerts. Monitor positions actively."
      },
      {
        name: "Oracle Failures",
        icon: Shield,
        description: "Price feeds used for liquidations may fail, be manipulated, or provide incorrect data, leading to unfair liquidations.",
        mitigation: "Use protocols with robust oracle systems. Understand how price feeds work."
      }
    ]
  },
  {
    title: "Trading Risks", 
    icon: Activity,
    color: "electric",
    risks: [
      {
        name: "Funding Costs",
        icon: DollarSign,
        description: "Perpetual positions pay/receive funding based on market conditions. Costs can accumulate over time, especially for popular positions.",
        mitigation: "Monitor funding rates. Consider funding costs in your strategy. Close positions during high funding periods."
      },
      {
        name: "Leverage Risk",
        icon: Zap,
        description: "Borrowed positions amplify both gains and losses. Small price movements can result in significant losses or liquidation.",
        mitigation: "Start with low leverage. Use stop losses. Size positions appropriately."
      }
    ]
  }
];

const Risks = () => {
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
              <AlertTriangle className="w-8 h-8 text-error" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Risk Guide</h1>
              <p className="text-text-secondary">Understand the risks before putting your ATOM to work</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <Card className="mb-12 bg-surface border-border-subtle">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Risk Assessment is Critical</h2>
            <p className="text-text-secondary mb-4">
              Every DeFi opportunity involves risk. Understanding these risks is essential for making informed decisions
              about your ATOM holdings. This guide explains common risk types and mitigation strategies.
            </p>
            <div className="bg-warning-subtle border border-warning rounded-lg p-4">
              <p className="text-sm text-text-secondary">
                <strong>Important:</strong> This is educational content only. Crypto involves risk of loss.
                Never invest more than you can afford to lose. Always verify information on official protocols.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Risk Categories */}
        <div className="space-y-8">
          {riskSections.map((section, index) => {
            const SectionIcon = section.icon;
            return (
              <Card key={index} className="bg-surface border-border-subtle">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${section.color}-subtle`}>
                      <SectionIcon className={`w-6 h-6 text-${section.color}`} />
                    </div>
                    <CardTitle className="text-text-primary">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {section.risks.map((risk, riskIndex) => {
                      const RiskIcon = risk.icon;
                      return (
                        <div key={riskIndex} className="border-l-2 border-border-subtle pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <RiskIcon className="w-4 h-4 text-text-muted" />
                            <h4 className="font-semibold text-text-primary">{risk.name}</h4>
                          </div>
                          <p className="text-sm text-text-secondary mb-3">
                            {risk.description}
                          </p>
                          <div className="bg-success-subtle rounded-lg p-3">
                            <p className="text-sm text-text-secondary">
                              <strong className="text-success">Mitigation:</strong> {risk.mitigation}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* General Risk Management */}
        <Card className="mt-12 bg-electric-subtle border-electric">
          <CardHeader>
            <CardTitle className="text-electric">General Risk Management Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Portfolio Management</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Diversify across different protocols and strategies</li>
                  <li>• Start with small amounts to test platforms</li>
                  <li>• Don't put all your ATOM in one opportunity</li>
                  <li>• Keep some ATOM liquid for opportunities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Research & Monitoring</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Read protocol documentation and audits</li>
                  <li>• Follow protocol communities and updates</li>
                  <li>• Monitor your positions regularly</li>
                  <li>• Have exit strategies prepared</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Disclaimer */}
        <Card className="mt-12 bg-error-subtle border-error">
          <CardContent className="p-6">
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-error mx-auto mb-3" />
              <h3 className="font-semibold text-error mb-2">Important Disclaimer</h3>
              <p className="text-sm text-text-secondary">
                This site is educational only. Cryptocurrency involves risk, including total loss of principal. 
                Past performance does not guarantee future results. Always verify links and parameters on official apps.
                No APYs are guaranteed. Consult with a financial advisor if needed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Risks;