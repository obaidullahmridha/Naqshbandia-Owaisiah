import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="নিসবতে উয়াইসিয়া" width={24} height={24} />
            <span className="font-bold">নিসবতে উয়াইসিয়া</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            হোম
          </Link>
          <Link
            href="/books"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            বই
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            পরিচিতি
          </Link>
          <Link
            href="/shajarah"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            শাজারাহ
          </Link>
          <Link
            href="/zikr"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            জিকিরের পদ্ধতি
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
