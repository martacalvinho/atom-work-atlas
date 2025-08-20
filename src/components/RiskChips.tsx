import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertTriangle, Clock, Zap, TrendingDown, Shield, DollarSign } from "lucide-react";

interface RiskChipsProps {
  risks: string[];
}

const RISK_INFO = {
  "Unbonding (≈21d)": {
    icon: Clock,
    description: "ATOM has a 21-day unbonding period. Your tokens are locked and don't earn rewards during this time.",
    severity: "medium"
  },
  "Slashing": {
    icon: Zap,
    description: "Validators can be penalized for downtime or misbehavior, reducing your staked tokens.",
    severity: "high"
  },
  "Smart‑contract": {
    icon: Shield,
    description: "Smart contract bugs or exploits could result in loss of funds.",
    severity: "high"
  },
  "Peg/Oracle": {
    icon: TrendingDown,
    description: "Liquid staking tokens may trade below their underlying value due to market conditions.",
    severity: "medium"
  },
  "Peg": {
    icon: TrendingDown,
    description: "Token may trade at a discount or premium to its underlying value.",
    severity: "medium"
  },
  "Impermanent Loss": {
    icon: TrendingDown,
    description: "Providing liquidity can result in less value than holding tokens separately due to price changes.",
    severity: "high"
  },
  "Liquidation": {
    icon: AlertTriangle,
    description: "Your collateral can be sold automatically if its value falls below required levels.",
    severity: "high"
  },
  "Oracle": {
    icon: Shield,
    description: "Price feeds may be manipulated or fail, affecting liquidations and borrowing rates.",
    severity: "medium"
  },
  "Funding": {
    icon: DollarSign,
    description: "Perpetual positions pay/receive funding based on market conditions and position size.",
    severity: "medium"
  },
  "Leverage": {
    icon: AlertTriangle,
    description: "Borrowed positions amplify both gains and losses, increasing liquidation risk.",
    severity: "high"
  }
} as const;

export function RiskChips({ risks }: RiskChipsProps) {
  if (!risks.length) return null;

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1">
        <span className="text-xs text-text-muted mr-2">Risks:</span>
        {risks.map((risk) => {
          const riskInfo = RISK_INFO[risk as keyof typeof RISK_INFO];
          const Icon = riskInfo?.icon || AlertTriangle;
          const severity = riskInfo?.severity || "medium";
          
          return (
            <Tooltip key={risk}>
              <TooltipTrigger asChild>
                <Badge 
                  variant="outline" 
                  className={`text-xs cursor-help hover:bg-opacity-10 ${
                    severity === "high" 
                      ? "border-error-subtle text-error hover:bg-error" 
                      : "border-warning-subtle text-warning hover:bg-warning"
                  }`}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {risk}
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">{riskInfo?.description || `Risk: ${risk}`}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}