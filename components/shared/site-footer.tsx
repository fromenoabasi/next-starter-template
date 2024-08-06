import { cn } from "@/lib/cn";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("w-full bg-background", className)}>
      <nav className="flex flex-col items-start px-4 py-2 md:flex-row md:items-center md:justify-between gap-y-4 md:gap-x-28">
        <p className="text-sm text-muted-foreground">
          Built using <ALink label="Next.js" href="https://nextjs.org" /> +{" "}
          <ALink label="Shadcn/ui" href="https://ui.shadcn.com" /> &amp; powered
          by <ALink label="Vercel" href="https://vercel.com" /> and others.
        </p>

        <p className="text-sm text-muted-foreground">
          Made with <span className="text-rose-500">❤️</span> and 🧠
        </p>
      </nav>
    </footer>
  );
}

interface ALinkProps {
  href: string;
  label: string;
}

function ALink({ href, label }: ALinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-foreground"
    >
      {label}
    </a>
  );
}
