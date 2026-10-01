import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["about", "experience", "skills", "certifications", "contact"];

export default function Header() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-[0_1px_8px_rgba(0,0,0,0.12)]">
      <div className="h-20 max-w-max-width-content mx-auto px-gutter-mobile lg:px-gutter-desktop grid grid-cols-[1fr_auto_1fr] items-center">
        <a href="#about" className="flex items-center gap-space-sm group text-left justify-self-start">
          <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight font-semibold group-hover:text-secondary-fixed transition-colors">
            SS <span className="text-on-primary-container font-normal">/ Saarthak Singh</span>
          </span>
        </a>
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                active === item.label.toLowerCase()
                  ? "transition-colors tracking-wide text-on-primary font-semibold border-b-2 border-secondary-container pb-space-3xs"
                  : "font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors tracking-wide"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md justify-self-end">
          <div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-2xs bg-primary-container rounded-full border border-outline-variant/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-code text-label-code text-on-primary-container uppercase tracking-wide">
              Available for Internships & Projects
            </span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-full bg-secondary text-on-secondary font-body-sm text-body-sm font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all transform hover:-translate-y-px"
          >
            Get in Touch
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-on-primary hover:bg-on-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="xl:hidden bg-primary border-t border-on-primary/10 px-gutter-mobile py-space-md flex flex-col gap-space-sm shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                active === item.label.toLowerCase()
                  ? "font-body-sm text-body-sm text-on-primary font-semibold border-b-2 border-secondary-container w-fit pb-space-3xs"
                  : "font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="sm:hidden inline-flex items-center justify-center px-space-md py-space-xs rounded-full bg-secondary text-on-secondary font-body-sm text-body-sm font-semibold w-fit"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}
