import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  steps: string[];
}

export function HowItWorksModal({ isOpen, onClose, title, steps }: HowItWorksModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-text-primary">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-subtle flex-shrink-0 mt-0.5">
                <span className="text-sm font-medium text-electric">{index + 1}</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
            </div>
          ))}
          
          <div className="pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to start!</span>
            </div>
            <p className="text-xs text-text-muted mt-1">
              Always verify parameters on the official app before proceeding.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}