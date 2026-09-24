import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function ContactBanner() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = profile.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
      <div className="max-w-max-width-content mx-auto">
        <Reveal className="bg-primary text-on-primary rounded-2xl p-space-xl lg:p-space-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs bg-on-primary/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">
                  Seeking Summer • Fall 2025/26 Engagements
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-primary font-bold tracking-tight">
                Have an opening in QA, Software Verification, or Video Production?
              </h2>
              <p className="font-body-lead text-body-lead text-primary-fixed-dim max-w-xl">
                Let’s engineer dependable test suites or craft stories that elevate your product. Open to remote or
                Delhi-NCR on-site roles.
              </p>
              <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface/10 backdrop-blur-md border border-on-primary/10">
                  <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                  <span className="font-label-code text-label-code text-on-primary tracking-wide">{profile.email}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="ml-space-xs px-space-2xs py-space-3xs bg-secondary hover:bg-secondary-container text-on-secondary rounded text-label-code font-label-code transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container font-body-sm text-body-sm font-semibold transition-all transform hover:-translate-y-0.5"
                  href={`mailto:${profile.email}`}
                >
                  <span className="">Send Direct Email</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-between space-y-space-md border-t lg:border-t-0 lg:border-l border-on-primary/10 pt-space-lg lg:pt-0 lg:pl-space-xl">
              <div className="space-y-space-2xs text-left lg:text-right">
                <span className="font-label-code text-label-code text-primary-fixed-dim uppercase tracking-wider block">
                  Profiles & Repos
                </span>
                <div className="space-y-space-xs pt-space-xs">
                  <a
                    className="flex items-center lg:justify-end gap-space-2xs font-body-sm text-body-sm text-on-primary hover:text-secondary-fixed transition-colors"
                    href={profile.linkedin}
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="">LinkedIn Profile</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>
                  <a
                    className="flex items-center lg:justify-end gap-space-2xs font-body-sm text-body-sm text-on-primary hover:text-secondary-fixed transition-colors"
                    href={profile.github}
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="">GitHub Repositories</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>
                </div>
              </div>
              <div className="text-left lg:text-right pt-space-sm">
                <span className="font-label-code text-label-code text-primary-fixed-dim block">Institution</span>
                <span className="font-body-sm text-body-sm text-on-primary font-medium">GGSIPU • KCC ILHE</span>
                <span className="block font-label-code text-label-code text-outline-variant">
                  Noida, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
