"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, X, Search } from "lucide-react";

type FilterState = {
  category?: string[];
  protocol?: string[];  
  chain?: string[];
  asset?: string[];
  risks?: string[];
  q?: string;
};

interface FiltersToolbarProps {
  opportunities: any[];
  onChange: (filters: FilterState) => void;
}

export function FiltersToolbar({ opportunities, onChange }: FiltersToolbarProps) {
  const [state, setState] = useState<FilterState>({});
  
  const activeCount = useMemo(() => 
    Object.values(state).flat().filter(Boolean).length, [state]
  );

  // Extract unique values for filter options
  const categories = [...new Set(opportunities.map(o => o.category))];
  const protocols = [...new Set(opportunities.map(o => o.protocol))];
  const chains = [...new Set(opportunities.map(o => o.chain))];
  const assets = [...new Set(opportunities.flatMap(o => o.assets))];
  const risks = [...new Set(opportunities.flatMap(o => o.risks))];

  function updateState(newState: FilterState) {
    setState(newState);
    onChange(newState);
  }

  function clearAll() {
    const cleared = {};
    setState(cleared);
    onChange(cleared);
  }

  return (
    <div className="sticky top-0 z-40 -mx-4 mb-6 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/40 px-4 py-4">
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search protocols, assets, risks…"
            value={state.q || ""}
            onChange={(e) => updateState({ ...state, q: e.target.value || undefined })}
            className="pl-10 rounded-xl border-border/50 bg-surface"
          />
        </div>

        {/* Filters Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="shrink-0 rounded-xl">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> 
              Filters
              {activeCount > 0 && (
                <Badge className="ml-2 rounded-full bg-accent text-accent-foreground text-xs px-1.5 py-0.5">
                  {activeCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[360px] p-0 bg-surface">
            <SheetHeader className="p-6 border-b border-border">
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="p-6 space-y-6">
              <Facet
                label="Category"
                options={categories}
                values={state.category || []}
                onChange={(values) => updateState({
                  ...state, 
                  category: values.length ? values : undefined
                })}
              />
              <Facet
                label="Protocol"
                options={protocols}
                values={state.protocol || []}
                onChange={(values) => updateState({
                  ...state, 
                  protocol: values.length ? values : undefined
                })}
              />
              <Facet
                label="Chain"
                options={chains}
                values={state.chain || []}
                onChange={(values) => updateState({
                  ...state, 
                  chain: values.length ? values : undefined
                })}
              />
              <Facet
                label="Asset"
                options={assets}
                values={state.asset || []}
                onChange={(values) => updateState({
                  ...state, 
                  asset: values.length ? values : undefined
                })}
              />
              <Facet
                label="Risks"
                options={risks}
                values={state.risks || []}
                onChange={(values) => updateState({
                  ...state, 
                  risks: values.length ? values : undefined
                })}
              />
              {activeCount > 0 && (
                <Button variant="ghost" className="justify-start w-full" onClick={clearAll}>
                  <X className="mr-2 h-4 w-4" /> Clear all filters
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function Facet({ 
  label, 
  options, 
  values = [], 
  onChange 
}: {
  label: string;
  options: string[];
  values?: string[];
  onChange: (values: string[]) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map(option => {
          const active = values.includes(option);
          return (
            <button
              key={option}
              onClick={() => {
                const next = active 
                  ? values.filter(v => v !== option)
                  : [...values, option];
                onChange(next);
              }}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
                active 
                  ? "bg-accent text-accent-foreground border-accent" 
                  : "bg-surface-elevated hover:bg-surface-hover border-border text-muted-foreground"
              }`}
              aria-pressed={active}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}