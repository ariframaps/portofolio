// mockProjects.js
// Replace this with GetProjects() from ProjectService.js in production.
// Each project mirrors the shape returned by GetProjects() + the new `details` block
// that lives inside metadata.json under the "details" key.

export const MOCK_PROJECTS = [
  // ─── PERSONAL (4) ───────────────────────────────────────────────────────────
  {
    id: 1,
    name: "DevNotes",
    repoName: "devnotes",
    category: "personal",
    shortDesc: "A minimal Markdown note-taking app with offline-first sync.",
    description:
      "DevNotes is a local-first note-taking app that stores everything in IndexedDB and syncs to a personal Supabase instance. Built as a replacement for Notion for quick code snippets.",
    tags: ["react", "typescript", "supabase", "indexeddb", "tailwindcss"],
    role: "Solo Developer",
    year: "2024",
    web_link: "https://devnotes.example.com",
    github_link: "https://github.com/ariframaps/devnotes",
    thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "I got tired of heavy note apps slowing me down mid-coding session. DevNotes was built to be instant — open it, type, close it. Everything persists locally and optionally syncs to Supabase.",
      problem:
        "Most note apps are either too heavy (Notion, Confluence) or too simple (plain .txt files). I needed something that renders Markdown, organizes by tags, and works offline.",
      solution:
        "Built a React SPA with a split-pane editor (CodeMirror 6) on the left and rendered Markdown on the right. IndexedDB handles persistence. Supabase is optional — sync only kicks in when logged in.",
      timeline: [
        { date: "Jan 2024", label: "Idea & wireframes" },
        { date: "Feb 2024", label: "Core editor + local storage" },
        { date: "Mar 2024", label: "Tag system & search" },
        { date: "Apr 2024", label: "Supabase sync + deploy" },
      ],
      highlights: [
        "Full offline support with IndexedDB",
        "CodeMirror 6 with syntax highlighting",
        "Live Markdown preview with code blocks",
        "Tag-based organization + fuzzy search",
        "Optional cloud sync via Supabase",
      ],
      outcome:
        "Still my daily driver for dev notes. Has ~200 stars on GitHub and a small community submitting PRs.",
    },
  },
  {
    id: 2,
    name: "Pomodoro Flow",
    repoName: "pomodoro-flow",
    category: "personal",
    shortDesc: "A focus timer with task tracking and detailed session history.",
    description:
      "Pomodoro Flow is a productivity app combining a Pomodoro timer with a lightweight task manager and a weekly heatmap of focus sessions.",
    tags: ["react", "zustand", "tailwindcss", "recharts"],
    role: "Solo Developer",
    year: "2023",
    web_link: "https://pomodoroflow.example.com",
    github_link: "https://github.com/ariframaps/pomodoro-flow",
    thumbnail_url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "Classic Pomodoro timers have no memory. Pomodoro Flow tracks every session, links them to tasks, and visualizes focus patterns over time.",
      problem:
        "I wanted to understand where my productive hours actually go. Standard timers just count down — they don't help you reflect.",
      solution:
        "Built a timer that attaches sessions to named tasks. Sessions are stored in localStorage and visualized as a GitHub-style contribution heatmap using Recharts.",
      timeline: [
        { date: "Aug 2023", label: "Design & scope" },
        { date: "Sep 2023", label: "Timer + task CRUD" },
        { date: "Oct 2023", label: "Session history & charts" },
        { date: "Nov 2023", label: "Polish & launch" },
      ],
      highlights: [
        "Configurable Pomodoro/break durations",
        "Task-linked focus sessions",
        "Weekly heatmap visualization",
        "Export session history as CSV",
        "Ambient sound options (rain, white noise)",
      ],
      outcome:
        "Featured on Product Hunt (Day 3, #12). ~450 weekly active users based on Plausible analytics.",
    },
  },
  {
    id: 3,
    name: "GitPulse",
    repoName: "gitpulse",
    category: "personal",
    shortDesc: "GitHub activity dashboard — visualize any user's contribution patterns.",
    description:
      "GitPulse pulls data from the GitHub API to visualize commit history, language breakdown, and streak stats for any public GitHub profile.",
    tags: ["next.js", "typescript", "github-api", "d3", "tailwindcss"],
    role: "Solo Developer",
    year: "2024",
    web_link: "https://gitpulse.example.com",
    github_link: "https://github.com/ariframaps/gitpulse",
    thumbnail_url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "GitHub's own contribution graph is beautiful but limited. GitPulse expands it — showing language trends, repo activity timelines, and streak analytics for any public user.",
      problem:
        "I wanted a shareable 'dev card' that's more informative than GitHub's built-in stats. Nothing I found gave a clean, embeddable breakdown.",
      solution:
        "Used the GitHub GraphQL API to pull 1 year of contribution data. Built custom D3 charts for language trends and a heatmap. Next.js handles OG image generation for shareable cards.",
      timeline: [
        { date: "Mar 2024", label: "API exploration & data modeling" },
        { date: "Apr 2024", label: "D3 charts + heatmap" },
        { date: "May 2024", label: "OG image generation" },
        { date: "Jun 2024", label: "Deploy to Vercel" },
      ],
      highlights: [
        "GitHub GraphQL API integration",
        "Custom D3 contribution heatmap",
        "Language breakdown over time",
        "Shareable OG image per profile",
        "Dark / light theme aware",
      ],
      outcome:
        "Used by ~1,200 developers to share their profiles. Picked up by a JavaScript newsletter with ~15k subscribers.",
    },
  },
  {
    id: 4,
    name: "Kanban Board",
    repoName: "kanban-local",
    category: "personal",
    shortDesc: "Drag-and-drop project board with real-time local persistence.",
    description:
      "A fully offline Kanban board built with React DnD Kit, stored entirely in localStorage. Supports multiple boards, custom columns, and rich task cards.",
    tags: ["react", "dnd-kit", "typescript", "zustand"],
    role: "Solo Developer",
    year: "2023",
    web_link: "https://kanban.example.com",
    github_link: "https://github.com/ariframaps/kanban-local",
    thumbnail_url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "A zero-dependency, zero-server Kanban board. Everything lives in the browser. Perfect for personal task management without needing an account anywhere.",
      problem:
        "Most Kanban tools require sign-up and a backend. I wanted something I could open in a tab and immediately use, with no friction.",
      solution:
        "DnD Kit handles drag-and-drop for both columns and cards. Zustand manages state. Everything serializes to localStorage on every change. Import/export as JSON for backup.",
      timeline: [
        { date: "Jun 2023", label: "DnD prototype" },
        { date: "Jul 2023", label: "Multi-board support" },
        { date: "Aug 2023", label: "Rich task cards + labels" },
        { date: "Sep 2023", label: "JSON import/export" },
      ],
      highlights: [
        "Smooth drag-and-drop (columns + cards)",
        "Multiple boards with custom columns",
        "Task labels, due dates, priorities",
        "JSON export/import for backup",
        "Zero backend required",
      ],
      outcome:
        "Top result for 'local kanban board react' on Google. ~800 GitHub stars.",
    },
  },

  // ─── CLIENT PUBLIC (4) ──────────────────────────────────────────────────────
  {
    id: 5,
    name: "Toko Batik Nusantara",
    repoName: "batik-store",
    category: "client_public",
    shortDesc: "E-commerce site for a traditional batik retailer in Yogyakarta.",
    description:
      "Full e-commerce platform with product catalog, cart, and WhatsApp checkout. Built with Next.js and Sanity CMS so the client can manage inventory independently.",
    tags: ["next.js", "sanity", "typescript", "vercel", "tailwindcss"],
    role: "Fullstack Developer",
    year: "2023",
    web_link: "https://tokobatik.example.com",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "A Yogyakarta-based batik business needed to move beyond Instagram DMs for sales. This project gave them a proper storefront they can manage themselves.",
      problem:
        "The client was managing 80+ products via Instagram stories and WhatsApp messages. Orders were getting lost and the workflow wasn't scalable.",
      solution:
        "Built a Next.js storefront connected to Sanity Studio as the CMS. The client manages products in Sanity; the site rebuilds via webhook on every change. Checkout flows through WhatsApp with a pre-filled cart summary.",
      timeline: [
        { date: "Aug 2023", label: "Discovery & content modeling in Sanity" },
        { date: "Sep 2023", label: "Product pages & catalog" },
        { date: "Oct 2023", label: "Cart + WhatsApp checkout" },
        { date: "Nov 2023", label: "Client training & launch" },
      ],
      highlights: [
        "Next.js ISR for fast product pages",
        "Sanity Studio CMS — client manages their own content",
        "WhatsApp checkout with cart summary",
        "Mobile-first responsive design",
        "SEO-optimized product pages",
      ],
      outcome:
        "Client reports a 3× increase in orders in the first month post-launch. They now manage 120+ products independently.",
    },
  },
  {
    id: 6,
    name: "ClinicBook",
    repoName: "clinicbook",
    category: "client_public",
    shortDesc: "Online appointment booking system for a local dental clinic.",
    description:
      "A patient-facing booking system integrated with Google Calendar. Patients pick a time slot, fill in details, and receive email confirmation automatically.",
    tags: ["react", "node.js", "express", "postgresql", "google-calendar-api"],
    role: "Fullstack Developer",
    year: "2023",
    web_link: "https://clinicbook.example.com",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "A dental clinic in Surabaya was handling all appointments by phone. This system reduced no-shows by 40% in the first three months by sending automated reminders.",
      problem:
        "Receptionists spent 2+ hours/day on the phone managing bookings. The clinic also had a high no-show rate with no reminder system.",
      solution:
        "Built a booking flow that checks real-time availability from Google Calendar, lets patients self-serve, and sends email + WhatsApp reminders 24h before appointments via a cron job.",
      timeline: [
        { date: "Apr 2023", label: "Requirements & calendar API integration" },
        { date: "May 2023", label: "Booking UI + availability logic" },
        { date: "Jun 2023", label: "Email + WhatsApp reminders" },
        { date: "Jul 2023", label: "Admin dashboard + launch" },
      ],
      highlights: [
        "Real-time slot availability via Google Calendar",
        "Automated email & WhatsApp reminders",
        "Admin dashboard for appointment management",
        "Patient history & notes per booking",
        "40% reduction in no-shows (3-month report)",
      ],
      outcome:
        "Deployed and actively used since July 2023. Clinic staff now manage all bookings without phone calls during peak hours.",
    },
  },
  {
    id: 7,
    name: "RentWheels",
    repoName: "rentwheels",
    category: "client_public",
    shortDesc: "Vehicle rental platform for a local fleet in East Java.",
    description:
      "A full rental platform with vehicle listings, availability calendar, booking system, and an admin panel for fleet management.",
    tags: ["next.js", "prisma", "postgresql", "tailwindcss", "clerk"],
    role: "Lead Frontend + Backend",
    year: "2024",
    web_link: "https://rentwheels.example.com",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "A vehicle rental company with 30+ cars needed to replace their manual booking system (WhatsApp + spreadsheets) with something scalable.",
      problem:
        "Double-bookings were happening regularly because availability was tracked in a shared Google Sheet. The owner was spending 3+ hours/day on logistics coordination.",
      solution:
        "Built a Next.js app with Prisma + PostgreSQL. Clerk handles customer auth. The admin panel gives the owner full control over fleet, pricing, and bookings. Real-time availability prevents double-bookings.",
      timeline: [
        { date: "Jan 2024", label: "Discovery, DB schema design" },
        { date: "Feb 2024", label: "Vehicle listings + booking flow" },
        { date: "Mar 2024", label: "Admin panel + fleet management" },
        { date: "Apr 2024", label: "Testing, training & launch" },
      ],
      highlights: [
        "Real-time availability calendar",
        "Clerk authentication for customers",
        "Full admin panel for fleet management",
        "Automated booking confirmation emails",
        "Mobile-optimized booking flow",
      ],
      outcome:
        "Zero double-bookings since launch. Owner reports saving ~2h/day on coordination. Revenue up 25% from higher booking conversion.",
    },
  },
  {
    id: 8,
    name: "FoodDash Landing",
    repoName: "fooddash-landing",
    category: "client_public",
    shortDesc: "Marketing site + waitlist for a food delivery startup.",
    description:
      "High-converting landing page for a pre-launch food delivery app. Includes waitlist signup, animated feature sections, and an integrated blog via headless CMS.",
    tags: ["next.js", "framer-motion", "contentful", "resend", "tailwindcss"],
    role: "Frontend Developer",
    year: "2024",
    web_link: "https://fooddash.example.com",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
    confidentialNote: null,
    details: {
      overview:
        "The client needed to validate market interest before building their app. This landing page was built to capture waitlist signups before the official launch.",
      problem:
        "The founding team wanted 1,000 waitlist signups in 30 days to justify investor conversations. They had no web presence and a tight 2-week delivery window.",
      solution:
        "Built a Next.js landing page with Framer Motion animations, a Contentful blog for SEO content, and Resend for automated waitlist confirmation emails. Optimized Core Web Vitals to 98/100.",
      timeline: [
        { date: "Feb 2024", label: "Design system + copy" },
        { date: "Feb 2024", label: "Animated feature sections" },
        { date: "Mar 2024", label: "Waitlist + email flow" },
        { date: "Mar 2024", label: "SEO & launch" },
      ],
      highlights: [
        "Framer Motion scroll-triggered animations",
        "Waitlist with Resend email confirmation",
        "Contentful blog for organic SEO",
        "98 Lighthouse performance score",
        "A/B tested CTA copy (27% improvement)",
      ],
      outcome:
        "Hit 1,000 waitlist signups in 18 days. The team used the data to secure a seed round.",
    },
  },

  // ─── CONFIDENTIAL (4) ───────────────────────────────────────────────────────
  {
    id: 9,
    name: "Internal HR Dashboard",
    repoName: "hr-dashboard",
    category: "client_confidential",
    shortDesc: "Employee management, attendance tracking & payroll for a manufacturing company.",
    description:
      "A multi-role HR platform with attendance logging, leave requests, payroll calculation, and exportable monthly reports.",
    tags: ["react", "node.js", "postgresql", "prisma", "docker"],
    role: "Lead Frontend Developer",
    year: "2024",
    web_link: "#",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    confidentialNote:
      "This project is under NDA. I'm happy to discuss the technical scope in an interview.",
    details: {
      overview:
        "A mid-sized manufacturing company (180 employees) needed to replace their Excel-based HR system. I led frontend development on a 3-person team over 5 months.",
      problem:
        "HR was managing attendance, leave, and payroll across a dozen spreadsheets. Monthly payroll processing took 3 days. Errors were frequent and morale around the process was low.",
      solution:
        "Built a React dashboard with role-based access (Admin, HR, Employee). Employees clock in/out via a PIN terminal. The system calculates payroll automatically based on attendance, leave balances, and overtime rules.",
      timeline: [
        { date: "Jan 2024", label: "Requirements gathering & system design" },
        { date: "Feb 2024", label: "Auth + employee management module" },
        { date: "Mar 2024", label: "Attendance + leave request flow" },
        { date: "Apr 2024", label: "Payroll calculation engine" },
        { date: "May 2024", label: "Reports, testing & rollout" },
      ],
      highlights: [
        "Role-based access (Admin / HR / Employee)",
        "Automated payroll with overtime calculation",
        "Leave request + approval workflow",
        "Attendance via PIN terminal integration",
        "Excel/PDF export for monthly reports",
      ],
      outcome:
        "Payroll processing reduced from 3 days to 4 hours. Zero payroll errors reported in first 6 months of use.",
    },
  },
  {
    id: 10,
    name: "Logistics Tracker",
    repoName: "logistics-tracker",
    category: "client_confidential",
    shortDesc: "Real-time shipment tracking dashboard for a regional logistics company.",
    description:
      "An internal ops dashboard showing live shipment status, driver locations, and delivery performance KPIs across a fleet of 50+ vehicles.",
    tags: ["react", "socket.io", "node.js", "mongodb", "leaflet"],
    role: "Fullstack Developer",
    year: "2023",
    web_link: "#",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    confidentialNote:
      "NDA in place. Happy to walk through the architecture and technical decisions.",
    details: {
      overview:
        "A logistics company managing 50+ delivery vehicles needed real-time visibility into their fleet. They were relying on WhatsApp check-ins to track drivers.",
      problem:
        "Dispatchers had no real-time view of where drivers were or which deliveries were delayed. Customer complaints about late deliveries couldn't be proactively handled.",
      solution:
        "Drivers use a lightweight mobile web app to broadcast their location via GPS every 30 seconds. A Node.js/Socket.io server pushes updates to the dashboard in real time. Leaflet renders the live map.",
      timeline: [
        { date: "Jul 2023", label: "GPS broadcast system (driver app)" },
        { date: "Aug 2023", label: "Socket.io real-time layer" },
        { date: "Sep 2023", label: "Dashboard map + shipment status" },
        { date: "Oct 2023", label: "KPI reports + handoff" },
      ],
      highlights: [
        "Real-time GPS tracking via Socket.io",
        "Leaflet map with clustered vehicle markers",
        "Delivery status + ETA per shipment",
        "Daily KPI summary (on-time %, delays)",
        "Lightweight PWA for drivers",
      ],
      outcome:
        "On-time delivery rate improved from 71% to 89% in 2 months. Dispatch team reduced from 4 to 2 people per shift.",
    },
  },
  {
    id: 11,
    name: "School ERP",
    repoName: "school-erp",
    category: "client_confidential",
    shortDesc: "Academic management system for a private school — grades, schedules & finance.",
    description:
      "A comprehensive school management platform covering student records, academic scheduling, grade entry, and tuition billing for a K-12 institution.",
    tags: ["next.js", "prisma", "postgresql", "typescript", "tailwindcss"],
    role: "Frontend Developer",
    year: "2024",
    web_link: "#",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    confidentialNote:
      "Confidential client engagement. Technical details available upon request under NDA.",
    details: {
      overview:
        "A private K-12 school was running on three disconnected tools: a desktop gradebook, a printed schedule, and manual invoicing. I worked on a team of 4 to build a unified ERP over 7 months.",
      problem:
        "Teachers, admin, and finance staff had no shared system. Generating report cards meant exporting data from three tools and manually combining them in Excel.",
      solution:
        "Modular Next.js app with separate role portals: Admin, Teachers, Students, Finance. Prisma handles a complex schema with courses, enrollments, grade entries, and billing cycles.",
      timeline: [
        { date: "Jan 2024", label: "System design & DB schema" },
        { date: "Feb 2024", label: "Student records + enrollment" },
        { date: "Mar 2024", label: "Scheduling + grade entry" },
        { date: "Apr 2024", label: "Finance module + billing" },
        { date: "May–Jun 2024", label: "Report generation + UAT" },
        { date: "Jul 2024", label: "Training & phased rollout" },
      ],
      highlights: [
        "4 role-specific portals (Admin / Teacher / Student / Finance)",
        "Academic scheduling with conflict detection",
        "Grade entry + automated report card generation",
        "Tuition billing with installment tracking",
        "PDF report cards with school letterhead",
      ],
      outcome:
        "Report card generation reduced from 2 weeks of manual work to a 10-minute automated export. Adopted by 420 students and 35 teachers.",
    },
  },
  {
    id: 12,
    name: "Inventory Manager",
    repoName: "inventory-mgr",
    category: "client_confidential",
    shortDesc: "Warehouse inventory system with barcode scanning and low-stock alerts.",
    description:
      "A web-based inventory management system for a mid-sized retail warehouse. Features barcode scanning via webcam, stock movement history, and automated reorder alerts.",
    tags: ["react", "express", "mysql", "zxing", "tailwindcss"],
    role: "Fullstack Developer",
    year: "2023",
    web_link: "#",
    github_link: null,
    thumbnail_url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    confidentialNote:
      "Under NDA. Can discuss architecture, tech choices, and challenges in detail if needed.",
    details: {
      overview:
        "A retail warehouse with 2,000+ SKUs was tracking inventory in a combination of spreadsheets and a decade-old desktop app. Stock discrepancies were a constant problem.",
      problem:
        "Manual entry caused frequent stock count errors. The team had no visibility into stock movement history, making it impossible to audit discrepancies or predict reorders.",
      solution:
        "Built a web app with ZXing for webcam-based barcode scanning (no dedicated hardware needed). Every stock movement is logged with a timestamp, user, and reason. Low-stock triggers email alerts using nodemailer.",
      timeline: [
        { date: "May 2023", label: "Barcode scanning prototype (ZXing)" },
        { date: "Jun 2023", label: "Product & category management" },
        { date: "Jul 2023", label: "Stock movement history + audit log" },
        { date: "Aug 2023", label: "Low-stock alerts + reports" },
      ],
      highlights: [
        "Webcam barcode scanning via ZXing (no hardware needed)",
        "Full stock movement audit log",
        "Low-stock email alerts with reorder quantities",
        "CSV export for monthly stock reports",
        "Multi-user with activity tracking",
      ],
      outcome:
        "Stock discrepancy rate dropped from ~8% to under 1% in the first quarter. Reorder lead times improved significantly with automated alerts.",
    },
  },
];
