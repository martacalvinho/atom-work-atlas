import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OpportunityCard } from "@/components/OpportunityCard";
import { FiltersToolbar } from "@/components/FiltersToolbar";
import { getCategoryIcon } from "@/lib/utils";
import { Shield, AlertTriangle } from "lucide-react";
import opportunitiesData from "@/data/opportunities.json";

type FilterState = {
  category?: string[];
  protocol?: string[];
  chain?: string[];
  asset?: string[];
  risks?: string[];
  q?: string;
};

const CATEGORIES = [
  { name: "Staking", color: "bg-staking/15 text-staking", count: 0 },
  { name: "Liquid Staking", color: "bg-liquid-staking/15 text-liquid-staking", count: 0 },
  { name: "Liquidity", color: "bg-liquidity/15 text-liquidity", count: 0 },
  { name: "Lending", color: "bg-lending/15 text-lending", count: 0 },
  { name: "Perps", color: "bg-perps/15 text-perps", count: 0 },
];

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({});

  // Filter opportunities based on current filters
  const filteredOpportunities = useMemo(() => {
    return opportunitiesData.filter(opportunity => {
      if (filters.q && !opportunity.description.toLowerCase().includes(filters.q.toLowerCase()) &&
          !opportunity.protocol.toLowerCase().includes(filters.q.toLowerCase()) &&
          !opportunity.assets.some(asset => asset.toLowerCase().includes(filters.q!.toLowerCase()))) {
        return false;
      }
      if (filters.category?.length && !filters.category.includes(opportunity.category)) return false;
      if (filters.protocol?.length && !filters.protocol.includes(opportunity.protocol)) return false;
      if (filters.chain?.length && !filters.chain.includes(opportunity.chain)) return false;
      if (filters.asset?.length && !opportunity.assets.some(asset => filters.asset!.includes(asset))) return false;
      if (filters.risks?.length && !opportunity.risks.some(risk => filters.risks!.includes(risk))) return false;
      return true;
    });
  }, [filters]);

  // Update category counts
  const categoriesWithCounts = CATEGORIES.map(cat => ({
    ...cat,
    count: opportunitiesData.filter(opp => opp.category === cat.name).length
  }));

  // Get featured opportunities (2-3 per category) when no filters applied
  const featuredOpportunities = useMemo(() => {
    if (Object.keys(filters).some(key => filters[key as keyof FilterState])) {
      return filteredOpportunities;
    }
    const featured: any[] = [];
    CATEGORIES.forEach(category => {
      const categoryOpps = opportunitiesData
        .filter(opp => opp.category === category.name)
        .slice(0, 2);
      featured.push(...categoryOpps);
    });
    return featured;
  }, [filters, filteredOpportunities]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-display font-semibold tracking-tight text-balance mb-6">
              Put your <span className="text-accent">ATOM</span> to work
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              A curated, no-nonsense playbook for staking, liquid staking, liquidity provision, lending, and perps — with official links and risks, no APY bait.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Explore Opportunities
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/risks">
                  <Shield className="w-4 h-4 mr-2" />
                  Read Risks
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-semibold mb-8">Choose Your Strategy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoriesWithCounts.map((category) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <Link 
                key={category.name} 
                to={`/${category.name.toLowerCase().replace(" ", "-")}`}
                className="group"
              >
                <div className="bg-surface rounded-2xl p-6 border border-border/50 hover:border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.01] ring-1 ring-white/5">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="text-xs rounded-full">
                    {category.count} opportunities
                  </Badge>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FiltersToolbar 
          opportunities={opportunitiesData}
          onChange={setFilters}
        />
      </section>

      {/* Opportunities Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-h2 font-semibold">
            {Object.keys(filters).some(key => filters[key as keyof FilterState]) ? 'Search Results' : 'Featured Opportunities'}
          </h2>
          <p className="text-meta text-muted-foreground">
            {featuredOpportunities.length} opportunities
          </p>
        </div>

        {featuredOpportunities.length === 0 ? (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms.</p>
            <Button variant="outline" onClick={() => setFilters({})}>
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </section>

      {/* Sticky Footer CTA */}
      <div className="sticky bottom-0 bg-surface-elevated/80 border-t border-border backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Crypto involves risk. Always verify parameters on official apps.
              </span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/risks">Read Risks</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;