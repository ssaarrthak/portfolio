import Reveal from "./Reveal";
import { skillPillars } from "../data/profile";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl bg-surface-container-low"
    >
      <div className="max-w-max-width-content mx-auto">
        <Reveal className="space-y-space-2xs pb-space-2xl">
          <span className="font-label-code text-label-code text-secondary tracking-widest uppercase block">
            04 // Core Competencies
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
            Skills & Technical Capabilities
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Engineered across computer application coursework at GGSIPU, hands-on production pipelines, and independent
            technical bootcamps.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {skillPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 100}
              className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{pillar.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-3xs">{pillar.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-space-2xs pt-space-2xs">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-space-sm py-space-2xs bg-surface-container font-label-code text-label-code text-on-surface rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-space-md border-t border-surface-container text-label-code font-label-code text-on-surface-variant">
                {pillar.footer}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
