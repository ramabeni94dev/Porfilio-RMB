"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileCardImage from "../public/ProfileCard2.png";
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSettings,
  FiSmartphone,
} from "react-icons/fi";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  {
    value: "60",
    label: "repos I've worked on",
    detail: "Between personal projects and the products I build at work.",
  },
  {
    value: "35",
    label: "Next.js apps",
    detail: "Mostly internal tools, portals and business-facing products.",
  },
  {
    value: "34",
    label: "Azure-based projects",
    detail: "Apps connected to cloud services, automations and deployments.",
  },
  {
    value: "10",
    label: "AI-related projects",
    detail: "Support tools, internal workflows and a few practical experiments.",
  },
];

const focusAreas = [
  {
    title: "Internal tools and business apps",
    icon: FiLayers,
    description:
      "A big part of my work is building tools for commercial, CRM, production, supplies and admin teams.",
    items: [
      "Dashboards and day-to-day internal tooling",
      "Forms, traceability and searchable records",
      "Interfaces made for real use, not just for show",
    ],
  },
  {
    title: "HR and internal portals",
    icon: FiBriefcase,
    description:
      "I've also worked on HR portals, attendance flows, forms and approval processes.",
    items: [
      "Frontend work with Next.js connected to backend services",
      "Serverless flows for attendance and internal automation",
      "Backend support with PostgreSQL, Sequelize and Python",
    ],
  },
  {
    title: "AI and automation",
    icon: FiMessageSquare,
    description:
      "I've been adding AI where it actually helps: support flows, email handling and internal tools.",
    items: [
      "OpenAI integrations inside working products",
      "Internal copilots, chat flows and support helpers",
      "Automation built with Node.js and Python",
    ],
  },
  {
    title: "Operations and field work",
    icon: FiSettings,
    description:
      "Some projects are closer to operations: datalogging, MQTT, technician support and mobile workflows.",
    items: [
      "IoT and telemetry flows",
      "Interfaces for plant, field and technical teams",
      "Web and mobile experiences built around reliability",
    ],
  },
];

const workStreams = [
  {
    title: "Commercial and CRM work",
    eyebrow: "Private work",
    summary:
      "I've worked on several products tied to commercial processes, CRM, ecommerce and support operations. Most of that work has been about making things clearer, faster and easier to use for the people inside the company.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Azure",
      "Axios",
      "OpenAI API",
    ],
    highlights: [
      "Built dashboards and internal UI for teams that use them every day",
      "Worked on forms, search flows and process visibility across departments",
      "Kept the codebase easy to move forward as requirements changed",
    ],
  },
  {
    title: "HR portal ecosystem",
    eyebrow: "Private work",
    summary:
      "I've been involved in a set of apps and APIs for HR portals, forms, attendance and related automation.",
    stack: [
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "PL/pgSQL",
      "Python",
      "Azure Functions",
    ],
    highlights: [
      "Connected frontend portals with backend services and serverless processing",
      "Worked on attendance flows and internal automation",
      "Moved between UI, APIs and database logic depending on what the product needed",
    ],
  },
  {
    title: "Production and operations systems",
    eyebrow: "Private work",
    summary:
      "I've also worked on apps for production, supplies and internal execution tracking, where the main goal was to make daily work simpler and more reliable.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "GitHub Actions",
      "Azure",
    ],
    highlights: [
      "Built interfaces that helped teams move faster day to day",
      "Helped replace manual steps with clearer digital flows",
      "Maintained several products at the same time without turning them into a mess",
    ],
  },
  {
    title: "AI assistants and support tools",
    eyebrow: "Private work",
    summary:
      "Some of my recent work has been around AI features for support and communication, always with a practical use case behind it.",
    stack: [
      "OpenAI API",
      "Next.js",
      "React",
      "Node.js",
      "Framer Motion",
      "Tailwind CSS",
      "Azure",
    ],
    highlights: [
      "Added AI into products people were already using",
      "Used internal tools to make support and communication work smoother",
      "Balanced UX, prompts and business constraints in the same flow",
    ],
  },
  {
    title: "IoT, datalogging and automation",
    eyebrow: "Private work",
    summary:
      "I've touched work around telemetry, APIs and industrial-facing apps where reliability matters more than presentation.",
    stack: [
      "Node.js",
      "Express.js",
      "MQTT",
      "PostgreSQL",
      "Sequelize",
      "Python",
      "FastAPI",
      "Docker",
    ],
    highlights: [
      "Connected data coming from devices into software people could actually use",
      "Built integration and automation services around operational needs",
      "Worked on both the backend side and the UI side when needed",
    ],
  },
  {
    title: "Mobile work",
    eyebrow: "Personal and product work",
    summary:
      "I've also spent time building with React Native and Expo for apps that need to work well outside the desktop.",
    stack: [
      "React Native",
      "Expo",
      "React Navigation",
      "JavaScript",
      "Node.js",
    ],
    highlights: [
      "Built mobile flows around real use cases",
      "Took the same product thinking from web into mobile",
      "Kept things simple and usable across devices",
    ],
  },
];

const stackGroups = [
  {
    title: "Frontend",
    icon: FiCode,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Framer Motion",
      "Three.js",
      "Vite",
    ],
  },
  {
    title: "Backend and APIs",
    icon: FiCpu,
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Azure Functions",
      "Python",
      "FastAPI",
      "REST APIs",
      "Axios",
    ],
  },
  {
    title: "Data and integrations",
    icon: FiDatabase,
    skills: [
      "PostgreSQL",
      "PL/pgSQL",
      "Sequelize",
      "SQL Server",
      "OpenAI API",
      "Odoo XML-RPC",
      "MQTT",
      "Selenium",
    ],
  },
  {
    title: "Delivery and mobile",
    icon: FiSmartphone,
    skills: [
      "Azure",
      "GitHub Actions",
      "Docker",
      "Jest",
      "ESLint",
      "Prettier",
      "React Native",
      "Expo",
    ],
  },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Gottert",
    period: "Aug 2023 - Present",
    summary:
      "At Gottert I've been building internal tools for commercial, CRM, HR, production and support teams. Most of the time I'm moving between frontend work, backend integrations and product improvements.",
  },
  {
    role: "Independent product and freelance work",
    company: "Personal and client projects",
    period: "2023 - Present",
    summary:
      "Outside of that, I keep working on personal projects, prototypes and freelance work. That's where I usually try new ideas, explore mobile and AI, and keep expanding my stack.",
  },
];

const evidence = [
  "React and Next.js are the tools I've used the most in recent projects",
  "A lot of the backend work has been with Node.js, NestJS and Express",
  "Azure, PostgreSQL and Sequelize show up in a big part of my day-to-day work",
  "I've also been building things with OpenAI, Python, FastAPI and Expo",
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
        {description}
      </p>
    </div>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function Home() {
  return (
    <main className="relative overflow-hidden px-4 pb-16 pt-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.header
          className="sticky top-4 z-40 mb-8 rounded-[2rem] border border-white/10 bg-[color:var(--panel-strong)] px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur md:rounded-full"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Ramiro Benitez
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Full Stack Developer - Buenos Aires, Argentina
              </p>
            </div>
            <nav className="grid w-full grid-cols-2 gap-2 text-sm text-[color:var(--muted)] sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-center transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>

        <section className="hero-stage">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">Full Stack Developer</span>
              <p className="mt-10 text-lg font-medium text-white/80">
                Hi, I&apos;m Ramiro.
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                I build internal tools, business apps and a few AI-powered
                products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                Most of my work is full stack. I build interfaces, connect
                APIs, work with databases and try to make the final product feel
                clear and useful for the people who use it every day.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                <FiMapPin />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ramabeni94.dev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#0d1110] transition hover:translate-y-[-1px]"
                >
                  <FiMail className="text-base" />
                  Let&apos;s talk
                </a>
                <a
                  href="https://github.com/ramabeni94dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <FiGithub className="text-base" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ramabeni94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <FiLinkedin className="text-base" />
                  LinkedIn
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-white/70">
                <a
                  href="https://www.linkedin.com/in/ramabeni94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-icon-link"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="mailto:ramabeni94.dev@gmail.com"
                  className="hero-icon-link"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
                <a
                  href="https://github.com/ramabeni94dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-icon-link"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-detail">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="portrait-stage">
                <div className="portrait-halo" />
                <div className="portrait-orb">
                  <Image
                    src={profileCardImage}
                    alt="Portrait of Ramiro Benitez"
                    width={760}
                    height={760}
                    priority
                    className="portrait-orb-image"
                  />
                </div>
                <div className="portrait-note">
                  <span className="eyebrow">Profile</span>
                  <p className="mt-4 text-xl font-semibold text-white">
                    Full Stack Developer
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    I like working on products that need to be useful first:
                    clear UI, solid logic and tools people can actually rely on.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="mt-8">
          <SectionHeading
            eyebrow="What I build"
            title="The kind of work I usually do"
            description="Most of my time goes into internal tools, business apps and systems people use every day inside a company."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.title}
                  className="panel-card"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow">What I work on</span>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {area.title}
                      </h3>
                    </div>
                    <div className="icon-badge">
                      <Icon />
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                    {area.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/85">
                    {area.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45rem] h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Projects and product areas"
            title="A few areas I've been working on"
            description="A lot of my recent work is private, so instead of showing every screen, I prefer to explain the kinds of products I've been building and the stack behind them."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {workStreams.map((stream, index) => (
              <motion.article
                key={stream.title}
                className="panel-card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow">{stream.eyebrow}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    private project
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {stream.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {stream.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stream.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/85">
                  {stream.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.45rem] h-2 w-2 rounded-full bg-[color:var(--accent-2)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="stack" className="mt-24">
          <SectionHeading
            eyebrow="Stack"
            title="Tech I use the most"
            description="This is the stack that keeps showing up in the projects I've been working on lately."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {stackGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  className="panel-card"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                >
                  <div className="flex items-center gap-3">
                    <div className="icon-badge">
                      <Icon />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-card">
            <SectionHeading
              eyebrow="Experience"
              title="What I've been doing"
              description="I've been focused mainly on internal business software, plus personal and freelance work on the side."
            />
            <div className="mt-8 space-y-8">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-[24px] border border-white/10 bg-black/15 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {item.role}
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[color:var(--accent)]">
                        {item.company}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.aside
            className="panel-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="eyebrow">What I use the most</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              The stack I keep coming back to
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              If I look at the last few years of work, the same core tools keep
              showing up: React and Next.js on the frontend, Node.js on the
              backend, Azure around it and PostgreSQL in a lot of the products.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/85">
              {evidence.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.45rem] h-2 w-2 rounded-full bg-[color:var(--accent-3)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/ramabeni94dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[color:var(--accent)]"
            >
              See my GitHub
              <FiArrowRight />
            </a>
          </motion.aside>
        </section>

        <motion.section
          id="contact"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="contact-shell">
            <div className="max-w-3xl">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                If you want to build something together, feel free to reach out.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                I&apos;m always open to a good project, freelance work or just
                talking shop with other developers.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:ramabeni94.dev@gmail.com"
                className="contact-card"
              >
                <FiMail className="text-xl text-[color:var(--accent)]" />
                <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  Email
                </span>
                <span className="mt-2 block text-lg font-semibold text-white">
                  ramabeni94.dev@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ramabeni94/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <FiLinkedin className="text-xl text-[color:var(--accent)]" />
                <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  LinkedIn
                </span>
                <span className="mt-2 block text-lg font-semibold text-white">
                  /in/ramabeni94
                </span>
              </a>
              <a
                href="https://github.com/ramabeni94dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <FiGithub className="text-xl text-[color:var(--accent)]" />
                <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  GitHub
                </span>
                <span className="mt-2 block text-lg font-semibold text-white">
                  ramabeni94dev
                </span>
              </a>
            </div>
          </div>
        </motion.section>

        <footer className="pb-6 pt-16 text-sm text-[color:var(--muted)]">
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p>Ramiro Benitez - Full Stack Developer</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
