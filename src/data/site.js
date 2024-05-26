const PROJECT_LINK_TYPES = {
	GITHUB: "GITHUB",
	LINK: "LINK",
};

const INFO = {
	main: {
		title: "Jakob",
		name: "Jakob",
		email: "jmj150@outlook.com",
	},

	socials: {
		github: "https://github.com/jakobinn",
		linkedin: "https://linkedin.com/in/j-260ab225a",
		stackoverflow: "https://stackoverflow.com/users/4935140/jakobinn",
		medium: "https://medium.com/@bluedesk09",
		email: "jmj150@outlook.com",
	},

	homepage: {
		title: "Full-stack web and mobile app developer.",
		description: `
			I am a full stack developer with a strong background in creating scalable, secure, and dependable web applications. 
			Leveraging a variety of frameworks and technologies, I thrive on tackling intricate problems and continuously expanding my skill set. 
			I am dedicated to delivering high-quality code that aligns with industry standards and best practices. 
			I am consistently seeking new challenges and opportunities to advance my programming skills.
		`,
		aboutProjects:
			"Here are a few of side projects I've done that are live at the moment. This does not include websites or projects done in previous jobs or school.  ",
	},

	about: {
		title: "dfgsfdg",
		description: `dfgsdfg`,
	},

	articles: {
		title: "Articles",
		description: "sdfsdf",
	},

	projects: {
		barhopp: {
			title: "Barhopp App & Website",
			description: `I developed an app in my spare time as a fun project to enhance my app development skills. Designed for both iOS and Android, this app supports multiple languages and offers both dark and light modes to suit user preferences. It utilizes caching to minimize data fetches and employs Redux for efficient state management, with TypeScript ensuring type safety.

Although it began as a hobby, it's now part of the Torio flagship and has achieved over 2,000 downloads. Primarily used in Iceland, the app helps users find the best happy hour deals and local events. We also use Sentry for robust error tracking, ensuring a smooth user experience. `,
			logoLanguages: ["typescript"],
			linkText: "View Project",

			link: "https://www.barhopp.is/",
			links: [],
			linkType: PROJECT_LINK_TYPES.LINK,
			languages: [
				"React Native",
				"Redux",
				"Android",
				"iOS",
				"Sentry",
				"Figma",
				"Typescript",
				"RTK Queries",
			],
		},
		torio: {
			title: "Torio Landing Page",
			description: `I developed the landing page for the Torio website using NextJS, chosen for its robust features that enhance SEO and reduce loading times. This design choice has positioned the website prominently on Google for targeted keywords and achieved a perfect 100/100 in the Real Experience Score on Vercel's speed metrics.
			Although the site is hosted on a free tier, which presents some speed limitations, I implemented several optimizations to mitigate this. Key resources like the header video and larger images are lazy-loaded to enhance performance. Additionally, the site uses cloud-based translations for English and Icelandic, with server configurations that tailor search results to the user's language. `,
			logoLanguages: ["typescript"],
			photos: [
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716597906/projects/torio/Skj%C3%A1mynd_2024-05-25_003700_ahalx9.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716597910/projects/torio/Skj%C3%A1mynd_2024-05-25_003751_kjtybj.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716597908/projects/torio/Skj%C3%A1mynd_2024-05-25_003736_prlia1.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716597912/projects/torio/Skj%C3%A1mynd_2024-05-25_004404_l0ayps.png",
				},
			],
			image: "https://images.unsplash.com/photo-1498940757830-82f7813bf178?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			linkText: "View Project",
			showPage: true,
			link: "https://torio.is/",
			languages: ["NextJS", "Typescript", "Vercel"],
			linkType: PROJECT_LINK_TYPES.LINK,
		},
		torioadmin: {
			title: "Torio Admin Web",
			description: `I developed a comprehensive Admin Web application using a robust stack that includes NodeJS for the backend and ReactJS with MaterialUI for frontend styling. MongoDB serves as the database, supporting the application's data management needs.

A key feature of this project is the use of NPM shared workspaces, which facilitate code sharing across the frontend and backend. This setup allows for centralized updates to types, interfaces, Joi form/data validations, tests, and data initialization scripts, significantly enhancing development efficiency and maintainability. `,
			logoLanguages: ["typescript"],
			linkText: "View Project",
			image: "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			photos: [
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716577944/projects/torioadmin/haq7ui2gmkbvsvertlwb.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716577945/projects/torioadmin/orfkv96pnw5kgsozv6l3.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716578856/projects/torioadmin/bluadsrbeidzizmttf6k.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716578857/projects/torioadmin/ynxyq0tzejo0zp7y9zzy.png",
				},
			],
			link: "https://admin.torio.is/",
			showPage: true,
			languages: [
				"Typescript",
				"ReactJS",
				"NextJS",
				"MaterialUI",
				"MongoDB",
				"NPM shared workspaces",
				"Azure",
				"IoT connection",
				"Joi",
				"POS integration",
				"GitHub Actions",
			],
			linkType: PROJECT_LINK_TYPES.LINK,
		},
		torioapp: {
			title: "Torio App",
			description: `I developed a user-friendly app that connects to IoT-enabled drink dispensers. Built with React Native, this app offers seamless integration with payment systems through Rapyd and Teya, ensuring secure and versatile payment options.
Users can easily log in via SMS or digital certificates, enhancing security and user verification. Within the app, they can scan QR codes to select drinks, manage their credit card information securely, and view past receipts—all in one place. Additionally, Redux is employed for efficient state management, ensuring a smooth and responsive user experience. `,
			logoLanguages: ["typescript"],
			linkText: "View Project",
			showPage: true,
			link: "",
			image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			links: [
				{
					link: "https://play.google.com/store/apps/details?id=com.torio.torio",
					text: "View Android App",
				},
				{
					link: "https://apps.apple.com/us/app/torio/id1645441137",
					text: "View iOS App",
				},
			],
			photos: [
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594965/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235103_a1umui.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594966/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235113_zlvcq4.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594968/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235122_an53l1.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594970/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235132_vyomnt.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594972/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235142_gfp7d8.png",
				},
				{
					source: "https://res.cloudinary.com/dlwmtnvsj/image/upload/v1716594974/projects/torioapp/Skj%C3%A1mynd_2024-05-24_235149_wcg0nz.png",
				},
			],
			linkType: PROJECT_LINK_TYPES.LINK,
			languages: [
				"React Native",
				"Typescript",
				"Redux",
				"Payment Integration",
				"Rapyd",
				"Expo",
				"RTK Queries",
			],
		},
		alertmodule: {
			title: "NPM Alert Modal",
			description: `In every project I worked on, I consistently needed a reliable alert or modal solution, but existing packages didn't meet my needs. Motivated by my passion for the JavaScript ecosystem, I decided to develop my own alert modal and publish it as an NPM package, driven by curiosity about the process.

I meticulously wrote the code and achieved nearly 100% test coverage to ensure reliability. Since its release, the package has been downloaded an average of 400 times per week and is now a key component in thousands of projects worldwide.`,
			logoLanguages: ["typescript"],
			linkText: "View Project",
			image: "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			link: "https://www.npmjs.com/package/react-popup-alert",
			languages: [
				"Typescript",
				"ReactJS",
				"Jest",
				"Chai",
				"NPM Registry",
			],
			linkType: PROJECT_LINK_TYPES.LINK,
		},
		slattur: {
			title: "Sláttur og smáverk",
			description:
				"Website I designed and created for the company Sláttur og Smáverk. I used this as an opportunity to learn more about NextJS. Google Analytics is done to track the website use and Google spamfilter available to prevent spam.",
			logoLanguages: ["typescript"],
			linkText: "View Project",
			link: "https://slatturogsmaverk.is",
			languages: [
				"NextJS",
				"Vercel",
				"Google Analytics",
				"Google Spam",
				"Sentry",
				"ReactJS",
			],
			linkType: PROJECT_LINK_TYPES.GITHUB,
		},
		rides: {
			title: "Rides",
			description: `I designed and developed a ridesharing website specifically for Iceland to enhance local commuting options. Leveraging my professional experience with .NET Framework and .NET Core, I chose to build this website using the latest version of .NET Core available at the time. This choice not only allowed me to refine my skills but also to bring my idea to life efficiently.
The data fetching in this app is unique, as the datatables package is directly updated efficiently with server-side results.
The site features a Python script I crafted to scrape data from existing ridesharing platforms, presenting it in a more accessible and user-friendly manner. Users can easily create accounts, add rides, and interact with the data. The backend is powered by Entity Framework and ASP.NET Identity, with a SQL Server database, all hosted on Azure, ensuring robust performance and security. It has been updated to .NET 8. `,
			logoLanguages: ["csharp"],
			linkText: "View Project",
			link: "https://rides-app.azurewebsites.net",
			languages: [
				".NET 8",
				"ASP.NET Core",
				"C#",
				"Azure",
				"SQL Server",
				"Entity Framework",
				"ASP.NET Identity",
				"Datatables Server-Side Render",
				"HTML",
				"CSS",
				"Javascript",
				"Bootstrap",
			],
			linkType: PROJECT_LINK_TYPES.LINK,
		},
	},
};

export default INFO;
