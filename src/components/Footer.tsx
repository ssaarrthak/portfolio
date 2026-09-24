import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-4xl">
      <div className="max-w-max-width-content mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-2xl">
          <div className="md:col-span-5 space-y-space-sm">
            <div className="font-headline-md text-headline-md text-on-surface">Saarthak Singh</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Quality Assurance Specialist & Creative Video Editor crafting resilient software testbeds and visually
              compelling kinetic narratives.
            </p>
            <div className="font-label-code text-label-code text-on-surface-variant pt-space-xs flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-base">location_on</span>
              <span className="">Noida, Uttar Pradesh, India</span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-space-xs">
            <div className="font-label-code text-label-code text-outline uppercase tracking-wider">Direct Inquiries</div>
            <a
              className="inline-block font-body-md text-body-md text-on-surface hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-4"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <div className="pt-space-xs flex items-center gap-space-md">
              <a
                className="font-label-code text-label-code text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-wider"
                href={profile.linkedin}
                rel="noopener"
                target="_blank"
              >
                LinkedIn
              </a>
              <span className="text-outline-variant">/</span>
              <a
                className="font-label-code text-label-code text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-wider"
                href={profile.github}
                rel="noopener"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <div className="font-label-code text-label-code text-outline uppercase tracking-wider">Index Navigation</div>
            <a
              className="inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant hover:text-secondary transition-colors pt-space-sm"
              href="#about"
            >
              <span className="material-symbols-outlined text-base">arrow_upward</span>
              <span className="">Back to Top</span>
            </a>
          </div>
        </div>
        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-code text-label-code text-on-surface-variant">
          <div className="">© 2024 Saarthak Singh. All rights reserved.</div>
          <div className="">Editorial System • QA & Content Craft</div>
        </div>
      </div>
    </footer>
  );
}
