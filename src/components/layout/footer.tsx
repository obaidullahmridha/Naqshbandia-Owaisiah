import Link from "next/link";
import { Button } from "@/components/ui/button";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function AppFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Silsila-E Naqshbandia Owaisiah Bangladesh. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.facebook.com/NaqshbandiaOwaisiahBangladesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
