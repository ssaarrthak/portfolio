import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl pb-space-3xl relative overflow-hidden"
    >
      <div className="max-w-max-width-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col space-y-space-lg">
          <Reveal>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-container rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              <span className="font-label-code text-label-code tracking-wider text-on-surface-variant uppercase">
                BCA Scholar • QA Specialist • Video Editor
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-space-xs">
              <span className="font-label-code text-label-code text-secondary tracking-widest uppercase block">
                01 // Personal Narrative
              </span>
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface font-bold tracking-tight">
                Hi, I’m <span className="text-on-surface relative inline-block">Saarthak<span className="text-secondary">.</span></span>
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface-variant font-medium pt-space-2xs max-w-xl">
                Engineering with exactness. Creating with motion.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
              I'm a BCA student at GGSIPU (KCC ILHE) who loves mixing technical problem-solving with creative work. I
              focus on software QA testing, building relational databases, and editing engaging video content.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <div className="flex items-center gap-space-2xs px-space-sm py-space-2xs bg-surface-container-high text-on-surface rounded-full font-label-code text-label-code">
                <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                <span className="">Noida / Delhi NCR, IN</span>
              </div>
              <div className="flex items-center gap-space-2xs px-space-sm py-space-2xs bg-surface-container-high text-on-surface rounded-full font-label-code text-label-code">
                <span className="material-symbols-outlined text-sm text-secondary">school</span>
                <span className="">Class of 2027</span>
              </div>
              <div className="flex items-center gap-space-2xs px-space-sm py-space-2xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-code text-label-code font-medium">
                <span className="material-symbols-outlined text-sm text-secondary">bolt</span>
                <span className="">Open to QA & Dev Roles</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="pt-space-md flex flex-wrap items-center gap-space-md">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-secondary hover:text-on-secondary transition-all transform hover:-translate-y-0.5 shadow-md"
                href="#experience"
              >
                <span className="">Explore Experience & Work</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm font-medium hover:bg-surface-variant transition-all"
                href={`mailto:${profile.email}`}
              >
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                <span className="">Let’s Connect</span>
              </a>
              <a
                className="inline-flex items-center gap-space-2xs text-label-code font-label-code text-on-surface-variant hover:text-secondary uppercase tracking-wider pl-space-xs"
                href={profile.linkedin}
                rel="noopener"
                target="_blank"
              >
                <span className="">LinkedIn</span>
                <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="absolute -inset-4 bg-surface-container rounded-2xl transform rotate-1 scale-95 transition-transform duration-500 hover:rotate-0"></div>
          <Reveal
            delay={200}
            className="relative w-full max-w-md bg-surface-container-lowest rounded-xl p-space-sm shadow-xl"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-surface-variant">
              <img
                alt="Saarthak Singh portrait outdoors in forest landscape"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                src={profile.portrait}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-space-md text-on-primary flex items-end justify-between">
                <div>
                  <span className="font-label-code text-label-code text-secondary-container uppercase tracking-wider block">
                    GGSIPU / KCC ILHE
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold">Saarthak Singh</span>
                  <span className="block font-body-sm text-body-sm text-primary-fixed-dim">Noida, India</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                </div>
              </div>
            </div>
            <div className="mt-space-sm p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">
                    Current Post
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                    QA Intern • Coding Panda
                  </span>
                </div>
              </div>
              <span className="font-label-code text-label-code text-secondary font-medium">Sept ’25–Pres</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
