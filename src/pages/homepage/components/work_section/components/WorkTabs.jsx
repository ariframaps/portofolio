export const WorkTabs = ({ tabs, activeTab, onTabChange, counts }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const count = counts[tab.id] ?? 0;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-poppins font-medium
              transition-all duration-200 border
              ${
                isActive
                  ? "bg-black text-white border-black dark:bg-[#D8D8D8] dark:text-black dark:border-[#D8D8D8]"
                  : "bg-transparent text-[#555] border-[#ddd] dark:text-[#666] dark:border-[#222] hover:border-[#aaa] dark:hover:border-[#444] hover:text-black dark:hover:text-[#aaa]"
              }
            `}
          >
            <span className="text-base leading-none">{tab.emoji}</span>
            <span>{tab.label}</span>
            {count > 0 && (
              <span
                className={`
                  text-[10px] font-mono px-1.5 py-0.5 rounded-full leading-none
                  ${
                    isActive
                      ? "bg-white/20 text-white dark:bg-black/20 dark:text-black"
                      : "bg-[#f0f0f0] text-[#888] dark:bg-[#1a1a1a] dark:text-[#555]"
                  }
                `}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
