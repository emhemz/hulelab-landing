import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const workLinks = [
  { label: "Strategic Capacity", href: "/strategic-positioning" },
  { label: "Product & Technology", href: "/product-technology" },
  { label: "LARPA", href: "/larpa" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a1918]/8">
      {/* Subtle warm gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3f0]/60 to-[#ede9e3]/40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-10 sm:px-16 pt-16 md:pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-16 mb-16 md:mb-20">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Human Learning Lab"
                width={22}
                height={22}
                className="opacity-75"
              />
              <span className="font-serif text-[1rem] tracking-tight text-[#1a1918]">
                Human Learning Lab
              </span>
            </div>
            <p className="text-[0.9375rem] leading-[1.75] text-[#6b6966] mb-8 max-w-[260px]">
              We explore how people learn. We build tools based on what we find.
            </p>

            <div className="space-y-2.5">
              <a
                href="mailto:christian@hulelab.com"
                className="block text-[0.875rem] text-[#cbb37c] hover:text-[#1a1918] transition-colors duration-300"
              >
                christian@hulelab.com
              </a>
              <a
                href="https://www.linkedin.com/company/humanlearninglab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.875rem] text-[#6b6966]/60 hover:text-[#cbb37c] transition-colors duration-300 group"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <p className="text-[0.8125rem] text-[#6b6966]/50 tracking-wide">
                Sandvika, Norway
              </p>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <h3 className="text-[0.6875rem] tracking-[0.18em] uppercase text-[#cbb37c]/70 font-medium mb-6">
              Navigate
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Work column */}
          <div>
            <h3 className="text-[0.6875rem] tracking-[0.18em] uppercase text-[#cbb37c]/70 font-medium mb-6">
              Work
            </h3>
            <ul className="space-y-3">
              {workLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-[0.6875rem] tracking-[0.18em] uppercase text-[#cbb37c]/70 font-medium mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.lunacast.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300 group"
                >
                  Luna
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold accent divider */}
        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-[#1a1918]/6" />
          <div className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-[#cbb37c]/50 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/35">
            © {new Date().getFullYear()} Human Learning Lab
          </span>
          <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/25">
            Sandvika, Norway
          </span>
        </div>
      </div>
    </footer>
  );
}
