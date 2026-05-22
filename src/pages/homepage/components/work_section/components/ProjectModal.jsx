import { useEffect, useRef } from "react";

const TagChip = ({ tag }) => (
  <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#f0f0f0] dark:bg-[#111] text-[#666] dark:text-[#555] border border-[#e8e8e8] dark:border-[#1c1c1c]">
    {tag}
  </span>
);

const ExternalLinkIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1C8.676 1 6 3.676 6 7v1H4v15h16V8h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const CATEGORY_META = {
  personal: { label: "Personal Project", color: "bg-[#eefbf3] text-[#2d7a4f] dark:bg-[#0b1f14] dark:text-[#3d9e63] border-[#c6f0d8] dark:border-[#1a3828]" },
  client_public: { label: "Client Work", color: "bg-[#eff6ff] text-[#2563eb] dark:bg-[#0b1525] dark:text-[#3b82f6] border-[#bfdbfe] dark:border-[#1e3a5f]" },
  client_confidential: { label: "Confidential", color: "bg-[#fdf4ff] text-[#7c3aed] dark:bg-[#130d1f] dark:text-[#a855f7] border-[#e9d5ff] dark:border-[#2e1a4a]" },
};

export const ProjectModal = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const { details, category } = project;
  const catMeta = CATEGORY_META[category] || CATEGORY_META.personal;
  const isConfidential = category === "client_confidential";

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.15s_ease]"
    >
      <div className="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-white dark:bg-[#0a0a0a] sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-2xl border border-[#e8e8e8] dark:border-[#1a1a1a] animate-[slideUp_0.2s_ease]">

        {/* ── Hero thumbnail ── */}
        <div className="relative h-44 sm:h-52 shrink-0 bg-[#f5f5f5] dark:bg-[#0d0d0d] overflow-hidden">
          <img
            src={project.thumbnail_url}
            alt={project.name}
            className={`w-full h-full object-cover ${isConfidential ? "blur-sm scale-105 brightness-75 dark:brightness-50" : ""}`}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 dark:bg-black/60 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Title block over image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catMeta.color}`}>
                {isConfidential && <LockIcon />}
                {catMeta.label}
              </span>
              {project.year && (
                <span className="text-[10px] font-mono bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.year}
                </span>
              )}
            </div>
            <h2 className="font-poppins font-bold text-xl text-white leading-tight">
              {project.name}
            </h2>
            {project.role && (
              <p className="text-[12px] font-mono text-white/60 mt-0.5">{project.role}</p>
            )}
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => <TagChip key={i} tag={tag} />)}
            </div>
          )}

          {/* Overview */}
          {details?.overview && (
            <Section title="Overview">
              <p className="text-[13px] sm:text-[14px] text-[#555] dark:text-[#666] font-lato leading-7">
                {details.overview}
              </p>
            </Section>
          )}

          {/* Problem → Solution two-col */}
          {(details?.problem || details?.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.problem && (
                <div className="p-4 rounded-xl bg-[#fff9f9] dark:bg-[#100a0a] border border-[#fde8e8] dark:border-[#1f1010]">
                  <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#e07070] dark:text-[#7a3535] mb-2">
                    🔴 Problem
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-[#666] dark:text-[#555] font-lato leading-6">
                    {details.problem}
                  </p>
                </div>
              )}
              {details.solution && (
                <div className="p-4 rounded-xl bg-[#f3fbf6] dark:bg-[#090f0b] border border-[#c6f0d8] dark:border-[#0f2419]">
                  <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#2d7a4f] dark:text-[#2a5c3a] mb-2">
                    🟢 Solution
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-[#666] dark:text-[#555] font-lato leading-6">
                    {details.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Timeline */}
          {details?.timeline?.length > 0 && (
            <Section title="Timeline">
              <ol className="relative border-l border-[#e8e8e8] dark:border-[#1a1a1a] ml-2 space-y-4">
                {details.timeline.map((item, i) => (
                  <li key={i} className="ml-5">
                    <span className="absolute -left-[7px] mt-0.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-[#ccc] dark:border-[#333]" />
                    <p className="text-[10px] font-mono text-[#aaa] dark:text-[#444] uppercase tracking-wider mb-0.5">
                      {item.date}
                    </p>
                    <p className="text-[13px] text-[#444] dark:text-[#777] font-lato">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          {/* Highlights */}
          {details?.highlights?.length > 0 && (
            <Section title="Key Highlights">
              <ul className="space-y-2">
                {details.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-[3px] w-4 h-4 shrink-0 rounded-full bg-[#f0f0f0] dark:bg-[#111] flex items-center justify-center text-[9px]">
                      ✓
                    </span>
                    <span className="text-[13px] text-[#555] dark:text-[#666] font-lato leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Outcome */}
          {details?.outcome && (
            <div className="p-4 rounded-xl bg-[#f8f8ff] dark:bg-[#0a0a12] border border-[#ddddf7] dark:border-[#14141e]">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#6666cc] dark:text-[#3a3a7a] mb-2">
                📊 Outcome
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#555] dark:text-[#666] font-lato leading-6">
                {details.outcome}
              </p>
            </div>
          )}

          {/* Confidential note */}
          {isConfidential && project.confidentialNote && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#fdf4ff] dark:bg-[#0e0812] border border-[#e9d5ff] dark:border-[#1f1030]">
              <LockIcon />
              <p className="text-[12px] font-lato text-[#888] dark:text-[#555] italic leading-6">
                {project.confidentialNote}
              </p>
            </div>
          )}
        </div>

        {/* ── Footer actions ── */}
        <div className="shrink-0 px-5 sm:px-6 py-4 border-t border-[#f0f0f0] dark:border-[#111] flex items-center gap-3 flex-wrap bg-white dark:bg-[#0a0a0a]">
          {!isConfidential && project.web_link && project.web_link !== "#" && (
            <a
              href={project.web_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-poppins text-[12px] font-medium bg-black text-white dark:bg-[#e8e8e8] dark:text-black px-4 py-2 rounded-lg hover:bg-[#222] dark:hover:bg-white transition-colors"
            >
              <ExternalLinkIcon />
              Live Site
            </a>
          )}
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-poppins text-[12px] font-medium bg-transparent text-[#555] dark:text-[#666] border border-[#e0e0e0] dark:border-[#1e1e1e] px-4 py-2 rounded-lg hover:border-[#aaa] dark:hover:border-[#444] hover:text-black dark:hover:text-[#ccc] transition-colors"
            >
              <GithubIcon />
              View Source
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center font-poppins text-[12px] text-[#aaa] dark:text-[#444] hover:text-black dark:hover:text-[#ccc] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Small helper
const Section = ({ title, children }) => (
  <div>
    <h3 className="font-poppins font-semibold text-[12px] uppercase tracking-widest text-[#aaa] dark:text-[#444] mb-3">
      {title}
    </h3>
    {children}
  </div>
);
