import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Shield, Droplet, Waves, Banknote, Activity, LucideIcon } from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Category icon mapping
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Staking": Shield,
  "Liquid Staking": Droplet,
  "Liquidity": Waves,
  "Lending": Banknote,
  "Perps": Activity,
}

export function getCategoryIcon(category: string): LucideIcon {
  return CATEGORY_ICONS[category] || Shield
}
