import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "APR/APY",
    definition: "Annual Percentage Rate (APR) is simple interest. Annual Percentage Yield (APY) includes compounding effects. APY is typically higher than APR for the same underlying rate.",
    category: "General"
  },
  {
    term: "ATOM",
    definition: "The native token of Cosmos Hub, used for staking, governance, and transaction fees. ATOM secures the Cosmos Hub network through Proof of Stake consensus.",
    category: "Assets"
  },
  {
    term: "Cosmos Hub",
    definition: "The first blockchain in the Cosmos ecosystem, serving as a hub for interchain security and communication. Uses Tendermint consensus and enables IBC transfers.",
    category: "Blockchain"
  },
  {
    term: "Delegation", 
    definition: "The process of staking ATOM with validators to help secure the network and earn rewards. Delegators don't need to run validator infrastructure.",
    category: "Staking"
  },
  {
    term: "Funding Rate",
    definition: "Regular payments between long and short positions in perpetual futures to keep the contract price close to the spot price. Can be positive or negative.",
    category: "Trading"
  },
  {
    term: "IBC",
    definition: "Inter-Blockchain Communication protocol that enables secure transfer of assets and data between different Cosmos chains.",
    category: "Blockchain"
  },
  {
    term: "Impermanent Loss",
    definition: "The temporary loss in dollar value when providing liquidity to a pool compared to holding tokens separately. Becomes permanent when you withdraw from the pool.",
    category: "DeFi"
  },
  {
    term: "Liquid Staking Token (LST)",
    definition: "A token that represents staked assets and accrues staking rewards. Examples include stATOM, stkATOM, and qATOM. Can be used in DeFi while earning staking rewards.",
    category: "Staking"
  },
  {
    term: "Liquidation",
    definition: "The automatic sale of collateral when a borrower's loan-to-value ratio exceeds the maximum allowed. Protects lenders by ensuring loans remain over-collateralized.",
    category: "DeFi"
  },
  {
    term: "Liquidity Pool",
    definition: "A smart contract containing tokens that enable decentralized trading. Liquidity providers deposit assets and earn fees from trades.",
    category: "DeFi"
  },
  {
    term: "LTV (Loan-to-Value)",
    definition: "The ratio of borrowed amount to collateral value. Higher LTV means higher leverage and higher liquidation risk. Most protocols have maximum LTV limits.",
    category: "DeFi"
  },
  {
    term: "Oracle",
    definition: "A service that provides external data to smart contracts, such as asset prices. Critical for lending protocols and liquidations.",
    category: "DeFi"
  },
  {
    term: "Peg",
    definition: "When an asset maintains a stable price relationship to another asset. LSTs should theoretically trade close to their underlying asset value.",
    category: "DeFi"
  },
  {
    term: "Perpetual Futures",
    definition: "Derivative contracts that track an asset's price without expiration. Use funding rates to maintain price correlation with the underlying asset.",
    category: "Trading"
  },
  {
    term: "qATOM",
    definition: "Liquid staking token from Quicksilver Protocol. Represents staked ATOM with rewards accruing through a redemption rate mechanism.",
    category: "Assets"
  },
  {
    term: "Redemption Rate",
    definition: "The exchange rate between a liquid staking token and its underlying asset. Increases over time as staking rewards accrue.",
    category: "Staking"
  },
  {
    term: "Slashing",
    definition: "A penalty mechanism where validators lose a portion of their staked tokens for misbehavior like double-signing or extended downtime. Affects all delegators to that validator.",
    category: "Staking"
  },
  {
    term: "stATOM",
    definition: "Liquid staking token from Stride Protocol. Represents staked ATOM with auto-compounding rewards through an exchange rate model.",
    category: "Assets"
  },
  {
    term: "stkATOM", 
    definition: "Liquid staking token from pSTAKE Finance. Represents staked ATOM with options for instant or standard redemption.",
    category: "Assets"
  },
  {
    term: "Unbonding Period",
    definition: "The time required to unstake tokens and regain full control. For ATOM, this is approximately 21 days during which tokens earn no rewards.",
    category: "Staking"
  },
  {
    term: "Utilization Rate",
    definition: "The percentage of available funds that are currently borrowed in a lending protocol. Higher utilization leads to higher interest rates.",
    category: "DeFi"
  },
  {
    term: "Validator",
    definition: "A network participant that proposes and validates blocks in Proof of Stake blockchains. Validators earn rewards and can be penalized for misbehavior.",
    category: "Staking"
  }
];

const categories = ["All", ...Array.from(new Set(glossaryTerms.map(term => term.category)))];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
              <Search className="w-8 h-8 text-electric" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">Glossary</h1>
              <p className="text-text-secondary">Key terms and concepts for ATOM DeFi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <Card className="mb-8 bg-surface border-border-subtle">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <Input
                  placeholder="Search terms and definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-text-muted">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Glossary Terms */}
        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <Card key={index} className="bg-surface border-border-subtle hover:border-electric-dim transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text-primary">{item.term}</h3>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {item.definition}
                </p>
                {item.relatedTerms && (
                  <div className="mt-4">
                    <span className="text-sm text-text-muted">Related terms: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.relatedTerms.map(relatedTerm => (
                        <Badge key={relatedTerm} variant="secondary" className="text-xs">
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <Card className="bg-surface border-border-subtle">
            <CardContent className="p-12 text-center">
              <Search className="w-16 h-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No terms found</h3>
              <p className="text-text-secondary">
                Try adjusting your search or selecting a different category.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Footer Note */}
        <Card className="mt-12 bg-electric-subtle border-electric">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold text-electric mb-2">Missing a Term?</h3>
              <p className="text-sm text-text-secondary">
                This glossary covers essential ATOM DeFi concepts. For more detailed information, 
                visit the official documentation of each protocol mentioned in the opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Glossary;