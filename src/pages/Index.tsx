import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Filters } from "@/components/Filters";
import { getCategoryIcon } from "@/lib/utils";
import { Shield, AlertTriangle } from "lucide-react";
import opportunitiesData from "@/data/opportunities.json";

interface FiltersState {
  search: string;
  category: string;
  protocol: string;
  chain: string;
  asset: string;
  risk: string;
}

const CATEGORIES = [
  { name: "Staking", color: "bg-electric-subtle text-electric", count: 0 },
  { name: "Liquid Staking", color: "bg-success-subtle text-success", count: 0 },
  { name: "Liquidity", color: "bg-warning-subtle text-warning", count: 0 },
  { name: "Lending", color: "bg-error-subtle text-error", count: 0 },
  { name: "Perps", color: "bg-electric-subtle text-electric", count: 0 },
];

const Index = () => {
  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    category: "",
    protocol: "",
    chain: "",
    asset: "",
    risk: ""
  });

  // Filter opportunities based on current filters
  const filteredOpportunities = useMemo(() => {
    return opportunitiesData.filter(opportunity => {
      if (filters.search && !opportunity.description.toLowerCase().includes(filters.search.toLowerCase()) &&
          !opportunity.protocol.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      if (filters.category && opportunity.category !== filters.category) return false;
      if (filters.protocol && opportunity.protocol !== filters.protocol) return false;
      if (filters.chain && opportunity.chain !== filters.chain) return false;
      if (filters.asset && !opportunity.assets.includes(filters.asset)) return false;
      if (filters.risk && !opportunity.risks.includes(filters.risk)) return false;
      return true;
    });
  }, [filters]);

  // Update category counts
  const categoriesWithCounts = CATEGORIES.map(cat => ({
    ...cat,
    count: opportunitiesData.filter(opp => opp.category === cat.name).length
  }));

  // Get featured opportunities (2-3 per category)
  const featuredOpportunities = useMemo(() => {
    const featured: any[] = [];
    CATEGORIES.forEach(category => {
      const categoryOpps = opportunitiesData
        .filter(opp => opp.category === category.name)
        .slice(0, 2);
      featured.push(...categoryOpps);
    });
    return featured;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-elevated to-electric-subtle">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Put your <span className="text-electric">ATOM</span> to work—safely.
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Discover all current opportunities for ATOM and ATOM LSTs across staking, liquidity provision, lending, and perpetual trading.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-electric hover:bg-electric-bright text-white">
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
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
          Choose Your Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoriesWithCounts.map((category) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <Link 
                key={category.name} 
                to={`/${category.name.toLowerCase().replace(" ", "-")}`}
                className="group"
              >
                <div className="bg-surface border border-border-subtle rounded-xl p-6 hover:border-electric-dim hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} opportunities
                  </Badge>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Filters 
          filters={filters}
          onFiltersChange={setFilters}
          opportunities={opportunitiesData}
        />
      </section>

      {/* Featured Opportunities */}
      <section className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-text-primary">
            {filters.search || Object.values(filters).some(Boolean) ? 'Search Results' : 'Featured Opportunities'}
          </h2>
          <p className="text-text-muted">
            {filteredOpportunities.length} opportunities found
          </p>
        </div>

        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">No opportunities found</h3>
            <p className="text-text-secondary mb-4">Try adjusting your filters or search terms.</p>
            <Button variant="outline" onClick={() => setFilters({
              search: "", category: "", protocol: "", chain: "", asset: "", risk: ""
            })}>
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Object.values(filters).some(Boolean) ? filteredOpportunities : featuredOpportunities).map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </section>

      {/* Sticky Footer CTA */}
      <div className="sticky bottom-0 bg-surface-elevated border-t border-border-subtle backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <span className="text-sm text-text-secondary">
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