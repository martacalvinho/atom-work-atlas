import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, ExternalLink, BookOpen, Database } from "lucide-react";

interface DocLinksProps {
  links: {
    app?: string;
    docs?: string;
    learn?: string;
    pool?: string;
  };
}

export function DocLinks({ links }: DocLinksProps) {
  return (
    <TooltipProvider>
      <div className="flex gap-1">
        {links.docs && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 h-8 w-8 text-text-muted hover:text-electric hover:bg-electric-subtle"
                asChild
              >
                <a href={links.docs} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Documentation</p>
            </TooltipContent>
          </Tooltip>
        )}

        {links.learn && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 h-8 w-8 text-text-muted hover:text-electric hover:bg-electric-subtle"
                asChild
              >
                <a href={links.learn} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Learn more</p>
            </TooltipContent>
          </Tooltip>
        )}

        {links.pool && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 h-8 w-8 text-text-muted hover:text-electric hover:bg-electric-subtle"
                asChild
              >
                <a href={links.pool} target="_blank" rel="noopener noreferrer">
                  <Database className="w-4 h-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pool details</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}