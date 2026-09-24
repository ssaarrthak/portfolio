export default function ContextBar() {
  return (
    <div className="w-full bg-surface-container-low/70 backdrop-blur-sm px-gutter-mobile lg:px-gutter-desktop py-space-xs">
      <div className="max-w-max-width-content mx-auto flex flex-wrap items-center justify-between gap-space-xs text-label-code font-label-code">
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          <span className="uppercase tracking-wider">Candidate Profile</span>
          <span className="text-outline-variant">•</span>
          <span className="text-on-surface font-medium">
            BCA (2024–2027) • Guru Gobind Singh Indraprastha University
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-space-md text-on-surface-variant">
          <span className="flex items-center gap-space-3xs text-secondary font-medium">
            <span className="material-symbols-outlined text-sm">verified</span> Verified Dual Competence: QA + Creative
            Video
          </span>
        </div>
      </div>
    </div>
  );
}
