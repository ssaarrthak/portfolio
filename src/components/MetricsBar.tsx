import Reveal from "./Reveal";
import { metrics } from "../data/profile";

export default function MetricsBar() {
  return (
    <section className="w-full bg-surface-container px-gutter-mobile lg:px-gutter-desktop py-space-2xl">
      <div className="max-w-max-width-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.title}
              delay={index * 100}
              className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between text-secondary">
                <span className="material-symbols-outlined text-2xl">{metric.icon}</span>
                <span className="font-label-code text-label-code text-on-surface-variant">{metric.period}</span>
              </div>
              <div className="pt-space-md">
                <div className="font-headline-lg text-headline-lg font-bold text-on-surface">{metric.title}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant pt-space-3xs">
                  {metric.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
