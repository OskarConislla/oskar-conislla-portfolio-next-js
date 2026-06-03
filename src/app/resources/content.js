import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Oskar",
  lastName: "Conislla",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Lima", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Español"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the intersection of
      technology and music business.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/OskarConislla",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oskarconislla/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:oskarconislla.cn@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: "Software Engineer working across Generative AI and Mobile",
  headline: <>Generative AI & Mobile Engineer</>,
  subline: (
    <>
      I'm Oskar, a software engineer who builds <InlineCode>production-grade generative AI</InlineCode>—multi-agent
      systems, RAG, and LLM observability that ship and scale. Over 5 years turning ambiguous problems into AI
      products with measurable ROI, like a 70% handling-time reduction at BCP. I also bring 8+ years of native
      Android & iOS engineering, and I founded Plugmusix.
      <br /> Available for new opportunities—let's build something impactful.
    </>
  ),
};

// Role-targeted landing pages. `/ai` and `/mobile` reuse the home layout
// but swap headline, subline and the featured project tag. Send the matching
// URL on each tailored CV (e.g. /ai for GenAI roles, /mobile for Android/iOS roles).
const homeAI = {
  label: "Home",
  title: `${person.name} – Generative AI Engineer`,
  description: "Production-grade generative AI and agentic systems",
  headline: <>Generative AI Engineer</>,
  subline: (
    <>
      I'm Oskar, a developer who ships <InlineCode>production-grade agentic systems</InlineCode>—multi-agent
      orchestration, RAG, and LLM observability. I cut average handling time by 70% with an AI agent at BCP,
      and build WhatsApp-native AI products end to end.
    </>
  ),
};

const homeMobile = {
  label: "Home",
  title: `${person.name} – Senior Mobile Engineer`,
  description: "8+ years shipping Android & iOS apps at scale",
  headline: <>Senior Mobile Engineer</>,
  subline: (
    <>
      I'm Oskar, a developer with 8+ years shipping <InlineCode>Android & iOS at scale</InlineCode>. I built
      banking apps across Peru, Chile and Colombia in Kotlin & Swift, owning CI/CD, testing and multi-store
      releases. Music-tech founder and Spotify-API builder.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/oskarconislla/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Oskar is a Lima-based developer with a passion for creating innovative solutions that bridge
        technology, data, and creativity. His work spans mobile and web development, embedded systems,
        and AI-driven projects, blending technical expertise with impactful results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Credit Bank of Peru - BCP",
        timeframe: "2025 - Present",
        role: "AI Techonology Engineer",
        achievements: [
          <>
            Developed cloud-native AI and platform solutions on AWS using Terraform, CI/CD pipelines, and GitHub workflows,
            improving scalability, deployment efficiency, and developer productivity.
          </>,
          <>
            Built reliable backend services and reusable Python modules focused on maintainability, performance,
            and production-readiness.
          </>,
          <>
            Implemented OpenTelemetry-based observability to improve monitoring, debugging, and visibility
            across distributed systems.
          </>,
          <>
            Contributed to GenAI-powered platforms using Strands and AgentCore,
            supporting agent-based workflows and distributed AI components in production environments.
          </>,
          <>
            Created automated unit tests to improve code quality, reduce regressions, and increase release confidence.
          </>,
          <>
            Led production deployments and coordinated releases with cross-functional teams across engineering,
            product, data, business, and innovation.
          </>,
          <>
            Helped reduce average handling time by 70% through an AI-powered agent,
            improving operational efficiency and response speed.
          </>,
          <>
            Contributed to NPS growth by delivering AI solutions that improved service quality,
            user experience, and operational responsiveness.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/video-agente-io.mp4",
            alt: "AI Agent for Customer Care iO",
            width: 9,
            height: 16,
          },
        ],
      },
      {
        company: "Falabella Insurance Brokers - Falabella Financial",
        timeframe: "2023 - 2025",
        role: "Mobile Developer (Android & iOS Developer)",
        achievements: [
          <>
            Configured push notifications and universal links to direct users to specific insurance offerings,
            such as auto and life insurance, resulting in a 30% increase in sales.
          </>,
          <>
            Implemented navigation links to the insurance section across multiple areas of Banco Falabella’s apps for Android and iOS,
            covering Peru, Chile, and Colombia, improving user engagement with insurance services.
          </>,
          <>
            Added the insurance section to Banco Falabella's iOS apps in Chile, Colombia, and Peru,
            enabling users to explore and purchase insurance seamlessly.
          </>,
          <>
            Lead deployments and production launch in application stores (App Store, Google Play Store and Huawei App Gallery.).
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/video-softtoken-falabella.mp4",
            alt: "Softtoken Seguros Falabella",
            width: 9,
            height: 16,
          },
        ],
      },
      {
        company: "Falabella Technology Peru – Falabella Financial",
        timeframe: "2022 - 2023",
        role: "Android Developer",
        achievements: [
          <>
            Added the insurance section to Banco Falabella's Android apps in Peru and Colombia,
            enabling users to explore and purchase insurance seamlessly.
          </>,
          <>
            Integrated analytics tracking via Google Analytics and Firebase,enabling detailed monitoring
            of insurance sales performance and data-driven decision-making.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/video-seguros-falabella.mp4",
            alt: "Seguros Falabella",
            width: 9,
            height: 16,
          }
        ],
      },
      {
        company: "Plugmusix",
        timeframe: "2017 - 2022",
        role: "CTO & Software Developer",
        achievements: [
          <>
            Co-founded Plugmusix, the first Peruvian social network focused on music and concerts,
            designed to enhance the experience of music fans and foster connections between artists and audiences.
          </>,
          <>
          Successfully onboarded over 400 artists and more than 10,000 fans during the app's launch phase.
          </>,
      
          <>
            Launched the Plugmusix mobile app, enabling users to discover new music, connect with artists, 
            buy tickets and virtual products, and share exclusive content.
          </>,
          <>
            Increased the number of registered users, artists, and concerts on Plugmusix, as well as the volume
            of products sold through the platform.
          </>
          ],
        images: [
          {
            src: "/images/projects/project-01/plugmusix-portada-1.jpg",
            alt: "Plugmusix Project",
            width: 16,
            height: 9,
          }
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Massachusetts Institute of Technology",
        description: <>Global Startup Labs, Technology and Entrepreneurship Program</>,
      },
      {
        name: "National University of Engineering",
        description: <>Bachelor's Degree in Mechatronic Engineering.</>,
      }      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        category: "Generative AI & Cloud",
        title: "Python & Generative AI",
        description: <>Build production-grade GenAI agents in Python—multi-agent orchestration, tool use, MCP servers, and prompt/state management—plus reliable backend services with FastAPI.</>,
        images: [
          {
            src: "/images/projects/project-01/video-agente-io.mp4",
            alt: "AI Agent for Customer Care iO",
            width: 9,
            height: 16,
          },
        ],
      },
      {
        category: "Generative AI & Cloud",
        title: "RAG, Vector DBs & Data",
        description: <>Design RAG pipelines over structured and unstructured data using vector databases (pgvector) and embeddings, with evaluation pipelines and anti-hallucination grounding.</>,
        images: [
          {
            src: "/images/projects/project-01/recommendation-plugmusix.jpg",
            alt: "Recommendation system",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        category: "Generative AI & Cloud",
        title: "Cloud, Observability & Full-Stack",
        description: <>Ship cloud-native systems on AWS (Terraform, CI/CD, Lambda) with OpenTelemetry tracing and LLM-native metrics (latency, tokens, cost-per-request); full-stack with Node.js, Next.js, and React.</>,
        images: [
          {
            src: "/images/projects/project-01/festify-portada-2.jpg",
            alt: "Festify full-stack project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        category: "Mobile (Android & iOS)",
        title: "Kotlin",
        description: <>Experienced in building high-performance Android apps using Kotlin, Jetpack Compose, and Dagger Hilt, with expertise in CI/CD pipelines and automated testing.</>,
        images: [
          {
            src: "/images/projects/project-01/app-plugmusix-google-play.jpg",
            alt: "Plugmusix App",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        category: "Mobile (Android & iOS)",
        title: "Swift",
        description: <>Proficient in developing native iOS applications using Swift, SwiftUI, and Objective-C, with experience in Viper architecture and App Store deployments.</>,
        images: [
          {
            src: "/images/projects/project-01/app-ios-plugmusix-features.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        category: "Mobile (Android & iOS)",
        title: "C++",
        description: <>Proficient in using C++ for performance-critical applications and implementing algorithms for embedded systems and computational tasks. One of these projects is the Autonomous sumo robot for competitions.</>,
        images: [
          {
            src: "/images/projects/project-01/sumo-foto.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photography collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, homeAI, homeMobile, about, blog, work, gallery };
