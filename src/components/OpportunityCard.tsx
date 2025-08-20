import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, ExternalLink } from "lucide-react";
import { useState } from "react";
import { HowItWorksModal } from "./HowItWorksModal";

interface OpportunityCardProps {
  opportunity: {
    id: string;
    category: string;
    protocol: string;
    chain: string;
    assets: string[];
    action: string;
    risks: string[];
    description: string;
    links: {
      app?: string;
      docs?: string;
      learn?: string;
      pool?: string;
    };
    howTo?: string[];
  };
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const [showHowTo, setShowHowTo] = useState(false);

  // Category color mapping
  const categoryColors = {
    "Staking": "bg-staking/15 text-staking",
    "Liquid Staking": "bg-liquid-staking/15 text-liquid-staking",
    "Liquidity": "bg-liquidity/15 text-liquidity",
    "Lending": "bg-lending/15 text-lending",
    "Perps": "bg-perps/15 text-perps",
  } as const;

  const categoryStyle = categoryColors[opportunity.category as keyof typeof categoryColors] || "bg-muted/50 text-foreground";

  return (
    <>
      <Card className="group relative overflow-hidden rounded-2xl bg-surface border border-border/50 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.01] ring-1 ring-white/5">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${categoryStyle}`}>
              {opportunity.category}
            </span>
            <Badge variant="secondary" className="rounded-full text-xs">
              {opportunity.protocol}
            </Badge>
            <Badge variant="outline" className="rounded-full text-xs">
              {opportunity.chain}
            </Badge>
            <span className="ml-auto text-xs text-muted-foreground">Active</span>
          </div>
          <h3 className="text-lg font-semibold leading-tight text-foreground">{opportunity.action}</h3>
          <p className="text-sm text-muted-foreground">{opportunity.assets.join(" · ")}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {opportunity.description}
          </p>

          {/* Risk Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {opportunity.risks.map((risk) => (
              <RiskChip key={risk} label={risk} />
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4">
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Info className="h-3.5 w-3.5" />
            <span>Learn safely — read Risks</span>
          </div>
          <div className="flex items-center gap-2">
            {opportunity.links.docs && (
              <Button variant="secondary" size="sm" asChild>
                <a href={opportunity.links.docs} target="_blank" rel="noopener noreferrer">
                  Docs <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            )}
            {opportunity.links.app && (
              <Button size="sm" className="bg-accent hover:bg-accent-hover" asChild>
                <a href={opportunity.links.app} target="_blank" rel="noopener noreferrer">
                  Open App <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* How It Works Modal */}
      {opportunity.howTo && (
        <HowItWorksModal
          isOpen={showHowTo}
          onClose={() => setShowHowTo(false)}
          title={`How to use ${opportunity.protocol}`}
          steps={opportunity.howTo}
        />
      )}
    </>
  );
}

function RiskChip({ label }: { label: string }) {
  const riskStyles = {
    "Unbonding (≈21d)": "bg-risk-unbonding/15 text-risk-unbonding",
    "Slashing": "bg-risk-liquidation/15 text-risk-liquidation",
    "Smart‑contract": "bg-risk-contract/20 text-risk-contract",
    "Peg/Oracle": "bg-risk-oracle/15 text-risk-oracle",
    "Peg": "bg-risk-oracle/15 text-risk-oracle",
    "Impermanent Loss": "bg-risk-il/15 text-risk-il",
    "Liquidation": "bg-risk-liquidation/15 text-risk-liquidation",
    "Oracle": "bg-risk-oracle/15 text-risk-oracle",
    "Funding": "bg-risk-il/15 text-risk-il",
    "Leverage": "bg-risk-liquidation/15 text-risk-liquidation",
  } as const;

  const style = riskStyles[label as keyof typeof riskStyles] || "bg-muted/50 text-muted-foreground";
  
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${style} cursor-help`}>
      {label}
    </span>
  );
}