export const projects = [
  {
    id: 1,
    title: "Ngariung Blog – Blogging Platform",
    description:
      "Ngariung Blog is a content-sharing platform where users can write and publish posts on agriculture, technology, and football. Designed for an engaging and user-friendly experience, the blog features a clean, responsive UI, an edit/upload profile image feature, and the ability to write and create posts. Built with Next.js, Tailwind CSS, Express.js, and PostgreSQL, the backend ensures secure and efficient data management, while the responsive design provides a seamless reading and writing experience.",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQGa53VkWjqz9w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738411939489?e=1740902400&v=beta&t=zSccDbXvhnb9MqDzANos1VlZAp6dQScja41M3oUrNNA",
    features: [
      "User authentication (Register & Sign in)",
      "Write, edit, and delete posts",
      "Read and share posts",
      "Upload and update profile images",
      "Responsive design for mobile and desktop",
      "Optimized performance using SSR and caching",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Cloudinary",
    ],
    link: "https://ngariung-blog.vercel.app/",
    date: "November 2024",
    team: [],
  },
  {
    id: 2,
    title: "FarmLink Indonesia – Company Profile",
    description:
      "FarmLink Indonesia is a company profile website built as part of Code Challenge 2, designed to showcase the company's mission, services, and team while ensuring high performance based on Core Web Vitals. The website includes four main pages: Home, About Us, Services, and Teams, featuring a hero section, company overview, customer testimonials, and dynamically fetched team data. Developed using Next.js and Tailwind CSS, the website is fully responsive and integrates Contentful CMS for easy content management. I implemented React Context for state management and optimized performance through lazy loading, image optimization, and asset management, achieving high PageSpeed Insights scores across all pages.",

    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEJkXFTbOIAyg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738412109757?e=1740913200&v=beta&t=1suK0VDPCuF_zrq261m7qYCdWYp8Qac_eSYeR4CUfEM",
    features: [
      "Hero section with dynamic content",
      "Company overview with interactive elements",
      "Customer testimonials section",
      "Dynamically fetched team profiles from Contentful",
      "Lazy loading for better performance",
      "SEO-friendly metadata and structure",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Contentful CMS"],
    link: "https://farmlink-indonesia.vercel.app/",
    date: "November 2024",
    team: [],
  },
  {
    id: 3,
    title: "MatchTix – Event Management Platform",
    description:
      "MatchTix is an event management platform that allows organizers to create and promote events while enabling attendees to browse, register, and purchase tickets. Event organizers can add event details, set ticket prices, and offer promotions like referral-based discounts. Attendees can search, filter, and register for events using a responsive interface. The platform also features a referral system where users can earn points and redeem them for ticket discounts. It includes a dashboard for organizers to manage events and view analytics. As a Full-Stack Web Developer working in a team of two, I helped build the platform using Next.js, TypeScript, TailwindCSS, Express.js, Prisma, and PostgreSQL, ensuring secure role-based access and optimized performance.",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQFjLrXNOl0rkw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738412179770?e=1740913200&v=beta&t=CJK7XZzlmfVWZ7XyYwajfvkQEsDKXlqk9Jz8zVBhnJ4",
    features: [
      "Organizer dashboard for event creation and management",
      "Attendee registration and ticket purchase",
      "Referral system with discount rewards",
      "Search and filter functionality for events",
      "Secure role-based authentication (organizers and attendees)",
      "Event analytics dashboard",
      "Optimized performance with server-side rendering (SSR)",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    link: "https://farmlink-indonesia.vercel.app/",
    date: "November 2024",
    team: [
      {
        name: "Mirza Ali Yusuf",
        linkedIn: "https://www.linkedin.com/in/mirzaaliyusuf/",
      },
    ],
  },
];
