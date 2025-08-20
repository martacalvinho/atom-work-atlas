import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

interface FiltersState {
  search: string;
  category: string;
  protocol: string;
  chain: string;
  asset: string;
  risk: string;
}

interface FiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  opportunities: any[];
}

export function Filters({ filters, onFiltersChange, opportunities }: FiltersProps) {
  // Extract unique values for filter options
  const categories = [...new Set(opportunities.map(o => o.category))];
  const protocols = [...new Set(opportunities.map(o => o.protocol))];
  const chains = [...new Set(opportunities.map(o => o.chain))];
  const assets = [...new Set(opportunities.flatMap(o => o.assets))];
  const risks = [...new Set(opportunities.flatMap(o => o.risks))];

  const updateFilter = (key: keyof FiltersState, value: string) => {
    // Convert "all-*" values back to empty strings for filtering logic
    const filterValue = value.startsWith("all-") ? "" : value;
    onFiltersChange({ ...filters, [key]: filterValue });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: "",
      protocol: "",
      chain: "",
      asset: "",
      risk: ""
    });
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="space-y-4 p-6 bg-surface-elevated rounded-xl border border-border-subtle">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
        <Input
          placeholder="Search opportunities..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Selects */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <Select value={filters.category || "all-categories"} onValueChange={(value) => updateFilter("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-categories">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.protocol || "all-protocols"} onValueChange={(value) => updateFilter("protocol", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Protocol" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-protocols">All Protocols</SelectItem>
            {protocols.map(protocol => (
              <SelectItem key={protocol} value={protocol}>{protocol}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.chain || "all-chains"} onValueChange={(value) => updateFilter("chain", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-chains">All Chains</SelectItem>
            {chains.map(chain => (
              <SelectItem key={chain} value={chain}>{chain}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.asset || "all-assets"} onValueChange={(value) => updateFilter("asset", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Asset" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-assets">All Assets</SelectItem>
            {assets.map(asset => (
              <SelectItem key={asset} value={asset}>{asset}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.risk || "all-risks"} onValueChange={(value) => updateFilter("risk", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Risk" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-risks">All Risks</SelectItem>
            {risks.map(risk => (
              <SelectItem key={risk} value={risk}>{risk}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {Object.entries(filters).map(([key, value]) => 
              value ? (
                <Badge key={key} variant="secondary" className="text-xs">
                  {key}: {value}
                  <button
                    onClick={() => updateFilter(key as keyof FiltersState, "")}
                    className="ml-1 hover:text-electric"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ) : null
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}