export default [
	{
		name: "Elomate",
		category: "client_confidential",
		description:
			"An internal learning management platform built for United Tractors (Astra Group) to manage Management Trainee programs, learning progress, quizzes, reports, and employee performance tracking across departments. The platform streamlines trainee monitoring, digital learning delivery, and HR reporting through a centralized web application.",
		shortDesc:
			"Enterprise learning management platform for Management Trainee programs.",
		tags: [
			"next.js",
			"typescript",
			"tailwindcss",
			"react-query",
			"axios",
			"zod",
			"react-hook-form",
			"chart.js",
			"shadcn-ui",
			"node.js",
			"express",
		],
		role: "Frontend Web Developer",
		year: "2024",
		confidentialNote:
			"This project was developed for an enterprise client and cannot be publicly shared. Screenshots, source code, and live access are restricted under client confidentiality.",
		thumbnail_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVenUb6FDANl6JgThGJTYk4tG_Sw4axfzSKA&s",
		details: {
			overview:
				"Elomate.com is an enterprise learning management system designed for United Tractors under Astra Group. The platform helps HR teams monitor and manage Management Trainee programs digitally through structured learning modules, quizzes, progress tracking, analytics dashboards, and trainee performance reporting.",
			problem:
				"The company needed a centralized platform to replace fragmented trainee management processes. HR teams required a more efficient way to distribute learning materials, monitor trainee progress, manage deadlines, evaluate quiz performance, and generate reports across multiple departments.",
			solution:
				"I worked remotely as part of a development team, primarily focusing on frontend engineering using Next.js and TypeScript. The platform included role-based dashboards, course and section management, PDF learning materials, quiz systems with essay support, progress tracking, analytics, notifications, and Excel export functionality. React Query and Axios handled API communication, while TailwindCSS and component libraries were used to build responsive enterprise-grade interfaces. I also assisted backend development with Express.js when needed.",
			timeline: [
				{
					date: "Nov 2024",
					label: "Project kickoff & requirement analysis",
				},
				{
					date: "Dec 2024",
					label: "Core LMS features & dashboard implementation",
				},
				{
					date: "Jan 2025",
					label: "Reporting system, testing & deployment preparation",
				},
			],
			highlights: [
				"Role-based learning management dashboard",
				"Course, section, and material management system",
				"Quiz engine with multiple-choice and essay questions",
				"Progress tracking per class and learning section",
				"Deadline and notification management",
				"Analytics dashboard for trainee performance monitoring",
				"Export trainee statistics and reports to Excel",
				"Responsive UI optimized for enterprise workflows",
				"Profile image upload using device camera integration",
				"Collaborated closely with backend developers in a remote team environment",
			],
			outcome:
				"The platform successfully digitized Management Trainee workflows and simplified monitoring processes for HR teams. Beyond technical implementation, the project became a strong lesson in real-world software collaboration, especially around communication, API contracts, and adapting to evolving requirements in fast-moving team environments.",
		},
	},
	{
		name: "BKPSDM Malang Exam Platform",
		category: "client_confidential",
		description:
			"A secure e-learning and computer-based test (CBT) platform built on Moodle for BKPSDM Malang to support official entrance examinations similar to CPNS-style testing. The system includes redesigned UI, exam management, and a real-time answer monitoring feature for admins to track participant progress during live exams. Deployed on a private LAN server for internal institutional use only.",
		shortDesc:
			"Private Moodle-based exam platform with live test monitoring for government institution.",
		tags: ["moodle", "php", "lms", "javascript", "mysql", "web-development"],
		thumbnail_url:
			"https://www.blok-a.com/wp-content/uploads/2023/02/AddText_02-06-07.07.46.webp",
		role: "Web Developer - Moodle (Team Project)",
		year: "2024",
		confidentialNote:
			"This is a private government project deployed on an internal LAN server. No public access, code, or screenshots are available due to institutional security policies.",
		details: {
			overview:
				"This project was developed in collaboration with my university supervisor and a team for BKPSDM Malang. The goal was to upgrade their existing CBT (Computer-Based Test) system into a more modern and controlled exam platform using Moodle, including UI redesign and real-time monitoring features for exam administrators.",
			problem:
				"The institution already had an exam system, but it lacked modern UI, flexibility, and especially real-time visibility of participant answers during ongoing tests. Administrators needed a way to monitor student responses live to ensure exam integrity and better supervision during official assessments.",
			solution:
				"I worked in a team as a Moodle developer, customizing and extending Moodle's core functionality. The main challenge was implementing a live answer tracking feature so admins could see user responses in real time with score updates. The system was redesigned to match a cleaner UI/UX, and deployed on a private LAN server so all exam participants could access it securely within a controlled environment. This was my first deep experience with Moodle, requiring fast adaptation due to limited documentation and tight project constraints.",
			timeline: [
				{
					date: "May 2024",
					label: "Requirement analysis & Moodle setup",
				},
				{
					date: "May 2024",
					label: "UI redesign & exam module customization",
				},
				{
					date: "Jun 2024",
					label: "Live monitoring feature development",
				},
				{
					date: "Jun 2024",
					label: "Deployment on internal LAN server & testing",
				},
			],
			highlights: [
				"Customized Moodle-based CBT system for institutional exams",
				"Real-time answer monitoring for administrators during live tests",
				"Improved UI/UX design for exam experience",
				"Secure LAN-based deployment (offline internal network)",
				"Role-based access for admin and test participants",
				"Fast adaptation to Moodle ecosystem with limited documentation",
				"Collaborated with UI/UX designer and development team",
				"Optimized exam flow for large-scale institutional use",
			],
			outcome:
				"The platform successfully replaced the previous exam interface with a more structured and secure system. It improved exam supervision through live response tracking and provided a more reliable testing environment for BKPSDM Malang. The project also strengthened my ability to quickly adapt to unfamiliar frameworks under real-world constraints.",
		},
	},

	{
		name: "Kassen Product Catalog Management System",
		thumbnail_url:
			"https://kassen.com.tw/wp-content/uploads/2025/08/kassen.webp",
		category: "client_confidential",
		description:
			"A private internal product catalog management system developed for the Kassen website ecosystem. The platform allows sales and technical support teams to manage product specifications, downloadable resources, manuals, drivers, and technical documentation through a secure dashboard integrated with the WordPress backend via REST API.",
		shortDesc:
			"Internal dashboard for managing product catalogs and technical resources.",
		tags: [
			"next.js",
			"typescript",
			"tailwindcss",
			"shadcn-ui",
			"tanstack-query",
			"tanstack-table",
			"wordpress-api",
			"acf",
			"react-hook-form",
		],
		role: "Frontend Developer",
		year: "2025",
		confidentialNote:
			"This is an internal management system built specifically for the client’s sales and technical support teams. Public access and source code are restricted.",
		details: {
			overview:
				"This project was developed as an extension of the Kassen website ecosystem to simplify internal product management workflows. Instead of editing product data manually through WordPress, the client required a dedicated dashboard where sales and technical support teams could securely manage product catalogs and downloadable resources more efficiently.",
			problem:
				"Managing technical product resources directly from WordPress became inefficient for non-technical staff. The client needed a more structured interface to manage product specifications, manuals, drivers, software tools, certificates, and other downloadable assets while maintaining synchronization with the public website catalog.",
			solution:
				"I developed a private dashboard application using Next.js and TypeScript that integrates with the WordPress REST API and ACF custom fields. The system supports CRUD operations for product catalogs and technical resources, including filtering, sorting, searching, and note management using TanStack Table. React Query was used for efficient data fetching and synchronization, while TailwindCSS and ShadCN UI were used to create a clean and responsive internal management experience.",
			timeline: [
				{
					date: "Nov 2025",
					label: "Architecture planning & API integration",
				},
				{
					date: "Nov 2025",
					label: "Dashboard & data management implementation",
				},
				{
					date: "Dec 2025",
					label: "Testing, optimization & deployment",
				},
			],
			highlights: [
				"Private role-based product management dashboard",
				"Integrated with WordPress REST API",
				"CRUD management for product catalogs and resources",
				"Advanced filtering and sorting using TanStack Table",
				"Technical resource management for drivers, manuals, software, and tools",
				"Product specification and description editing",
				"Responsive internal dashboard UI",
				"ACF integration for structured custom data",
				"Optimized API data handling using React Query",
			],
			outcome:
				"The system significantly simplified product management workflows for the client’s internal teams by replacing manual WordPress editing with a more structured and efficient dashboard experience. It also improved consistency between the internal management process and the public-facing product catalog.",
		},
	},
];
