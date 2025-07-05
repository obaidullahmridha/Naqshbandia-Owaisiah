import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpenText className="h-6 w-6 text-primary" />
            <span className="font-bold">Silsila-E Naqshbandia Owaisiah Bangladesh</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
