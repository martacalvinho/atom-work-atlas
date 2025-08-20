import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiskChips } from "./RiskChips";
import { DocLinks } from "./DocLinks";
import { getCategoryIcon } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
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
  const CategoryIcon = getCategoryIcon(opportunity.category);

  return (
    <>
      <Card className="group relative bg-surface border-border-subtle hover:border-electric-dim hover:shadow-md transition-all duration-200 hover:-translate-y-1">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-electric-subtle">
                <CategoryIcon className="w-5 h-5 text-electric" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{opportunity.protocol}</h3>
                <p className="text-sm text-text-muted">{opportunity.chain}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              {opportunity.category}
            </Badge>
          </div>

          {/* Assets */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-text-secondary">Assets:</span>
            <div className="flex gap-1">
              {opportunity.assets.map((asset) => (
                <Badge key={asset} variant="secondary" className="text-xs px-2 py-1">
                  {asset}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary mb-4 line-clamp-2">
            {opportunity.description}
          </p>

          {/* Risk Chips */}
          <div className="mb-4">
            <RiskChips risks={opportunity.risks} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {opportunity.links.app && (
                <Button 
                  size="sm" 
                  className="bg-electric hover:bg-electric-bright text-white"
                  asChild
                >
                  <a href={opportunity.links.app} target="_blank" rel="noopener noreferrer">
                    {opportunity.action}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              )}
              
              {opportunity.howTo && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setShowHowTo(true)}
                >
                  How it works
                </Button>
              )}
            </div>

            {/* Doc Links */}
            <DocLinks links={opportunity.links} />
          </div>
        </CardContent>
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