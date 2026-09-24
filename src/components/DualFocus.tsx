import Reveal from "./Reveal";
import { dualFocusPillars } from "../data/profile";

export default function DualFocus() {
  return (
    <section className="w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
      <div className="max-w-max-width-content mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-space-xl lg:p-space-2xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <Reveal className="lg:col-span-5 space-y-space-md">
              <span className="font-label-code text-label-code text-secondary tracking-widest uppercase block">
                02 // The Dual Focus
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
                Where Technical Precision Meets Visual Storytelling
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Whether I am hunting down software bugs or editing a video, my approach is the same: I focus on the
                small details, follow a structured process, and make sure the final result is polished and seamless.
              </p>
              <div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                  <span className="">
                    <strong>Quality Assurance:</strong> Finding bugs, writing test plans, and ensuring databases run
                    smoothly.
                  </span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                  <span className="">
                    <strong>Video Editing:</strong> Pacing cuts, editing audio, and creating visuals that keep people
                    watching.
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {dualFocusPillars.map((pillar, index) => (
                <Reveal
                  key={pillar.title}
                  delay={index * 120}
                  className="bg-surface-container-lowest p-space-lg rounded-xl space-y-space-sm shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-full ${pillar.iconBg} flex items-center justify-center text-secondary`}>
                      <span className="material-symbols-outlined">{pillar.icon}</span>
                    </div>
                    <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                      {pillar.label}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{pillar.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.description}</p>
                  <div className="pt-space-xs flex flex-wrap gap-space-2xs">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-space-xs py-space-3xs bg-surface-container text-on-surface-variant font-label-code text-label-code rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
