import Reveal from "./Reveal";
import { certifications } from "../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl bg-surface">
      <div className="max-w-max-width-content mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between pb-space-2xl gap-space-md">
          <div>
            <span className="font-label-code text-label-code text-secondary tracking-widest uppercase block">
              05 // Credentials
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
              Certifications & Distinctions
            </h2>
          </div>
          <div className="font-label-code text-label-code text-on-surface-variant">
            Verified continuous learning records • 6 Accreditations
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.title}
              delay={(index % 3) * 100}
              className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl transition-all hover:-translate-y-0.5 shadow-sm space-y-space-sm"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-secondary text-2xl">{cert.icon}</span>
                <span
                  className={
                    cert.highlighted
                      ? "font-label-code text-label-code text-secondary uppercase font-semibold"
                      : "font-label-code text-label-code text-outline uppercase"
                  }
                >
                  {cert.category}
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{cert.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-3xs">{cert.description}</p>
              </div>
              <div className="pt-space-2xs flex items-center gap-space-xs text-label-code font-label-code text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="">{cert.verification}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
