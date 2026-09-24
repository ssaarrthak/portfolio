import Reveal from "./Reveal";
import { experienceRoles } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="w-full px-gutter-mobile lg:px-gutter-desktop py-space-3xl bg-surface">
      <div className="max-w-max-width-content mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between pb-space-2xl gap-space-md">
          <div>
            <span className="font-label-code text-label-code text-secondary tracking-widest uppercase block">
              03 // Track Record
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
              Work Experience & Leadership
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            A timeline of my experience in software testing, remote collaboration, and team projects.
          </p>
        </Reveal>
        <div className="space-y-space-md">
          {experienceRoles.map((role, index) => (
            <Reveal
              key={`${role.company}-${role.role}`}
              delay={index * 60}
              className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-lg lg:p-space-xl transition-colors shadow-sm group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                <div className="lg:col-span-4 space-y-space-2xs">
                  <div className="flex items-center gap-space-xs">
                    <span
                      className={
                        role.badgeAccent
                          ? "px-space-xs py-space-3xs bg-secondary-container/15 text-secondary rounded font-label-code text-label-code uppercase font-semibold"
                          : "px-space-xs py-space-3xs bg-surface-container-highest text-on-surface-variant rounded font-label-code text-label-code uppercase"
                      }
                    >
                      {role.badge}
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant">{role.location}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-secondary transition-colors">
                    {role.company}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary font-medium">{role.role}</p>
                  <div className="font-label-code text-label-code text-outline flex items-center gap-space-xs pt-space-xs">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span className="">{role.period}</span>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-space-sm">
                  <p className="font-body-md text-body-md text-on-surface-variant">{role.description}</p>
                  {role.bullets.length > 0 && (
                    <ul className="space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-space-xs">
                          <span className="text-secondary font-bold">•</span>
                          <span className="">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="pt-space-xs flex flex-wrap gap-space-2xs">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-space-sm py-space-3xs bg-surface-container-highest text-on-surface font-label-code text-label-code rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
