"use client";

import { motion } from "framer-motion";
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
    label: "repositories mapped",
    detail: "Evidence gathered from personal and organization codebases.",
  },
  {
    value: "35",
    label: "Next.js projects",
    detail: "Internal products, portals, dashboards and business workflows.",
  },
  {
    value: "34",
    label: "Azure-connected apps",
    detail: "Cloud integrations, internal tooling and serverless systems.",
  },
  {
    value: "10",
    label: "AI-enabled solutions",
    detail: "OpenAI-assisted apps for support, communication and operations.",
  },
];

const focusAreas = [
  {
    title: "Business platforms",
    icon: FiLayers,
    description:
      "Commercial, CRM, ecommerce, production, supplies and shipping-note flows translated into usable products.",
    items: [
      "Operational dashboards and internal admin tooling",
      "High-volume forms, traceability and searchable records",
      "Interfaces designed for real teams, not demo cases",
    ],
  },
  {
    title: "HR and internal portals",
    icon: FiBriefcase,
    description:
      "Portal ecosystems for HR, attendance, forms, approvals and employee-facing workflows.",
    items: [
      "Next.js frontends connected to service backends",
      "Serverless processes for attendance and automation",
      "Backend support with PostgreSQL, Sequelize and Python services",
    ],
  },
  {
    title: "AI and automation",
    icon: FiMessageSquare,
    description:
      "Practical AI integrations focused on support, mail workflows, ticketing and operational acceleration.",
    items: [
      "OpenAI API integrations inside production-oriented apps",
      "Fast iteration on internal copilots and chat workflows",
      "Automation layers built with Node.js and Python",
    ],
  },
  {
    title: "Industrial and field systems",
    icon: FiSettings,
    description:
      "Solutions spanning datalogging, MQTT pipelines, technician support and mobile-oriented operational tools.",
    items: [
      "IoT and telemetry data collection flows",
      "Interfaces for plant, field and technical teams",
      "Mobile and web experiences built around operational reliability",
    ],
  },
];

const workStreams = [
  {
    title: "Commercial and CRM suite",
    eyebrow: "Private production work",
    summary:
      "Multi-product delivery across commercial workflows, CRM, ecommerce and support operations. Focused on clarity, speed and adoption by internal teams.",
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
      "Built dashboard-heavy UI patterns for real operating teams",
      "Handled forms, search flows and process visibility across departments",
      "Delivered maintainable interfaces with room for fast iteration",
    ],
  },
  {
    title: "HR portal ecosystem",
    eyebrow: "Private production work",
    summary:
      "A coordinated set of apps and APIs covering HR portals, forms, attendance workflows and supporting automation services.",
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
      "Connected frontend portals with backend and serverless processing",
      "Supported attendance and internal workflow automation",
      "Worked across UI, APIs, database logic and process orchestration",
    ],
  },
  {
    title: "Production and operations systems",
    eyebrow: "Private production work",
    summary:
      "Applications for production management, supplies and internal execution tracking, built around operational continuity and low-friction workflows.",
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
      "Shipped interfaces tuned for day-to-day execution speed",
      "Supported process digitization and migration away from manual steps",
      "Kept codebases maintainable while products evolved in parallel",
    ],
  },
  {
    title: "AI assistants and support tools",
    eyebrow: "Private production work",
    summary:
      "Support-oriented and communication-focused products enhanced with AI to structure requests, improve context and accelerate response workflows.",
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
      "Integrated AI in practical product flows instead of isolated demos",
      "Used internal tooling patterns to improve productivity",
      "Combined UX, prompt-driven features and operational requirements",
    ],
  },
  {
    title: "IoT, datalogging and automation",
    eyebrow: "Private production work",
    summary:
      "Work spanning telemetry collection, API services and industrial-facing applications where reliable data movement matters more than flashy UI.",
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
      "Connected industrial data flows into usable software layers",
      "Built automation and integration services around operational needs",
      "Worked with both backend reliability and frontend visibility",
    ],
  },
  {
    title: "Mobile and field-facing experiences",
    eyebrow: "Product exploration and delivery",
    summary:
      "Mobile work with React Native and Expo for apps that need to travel with operations, technicians or on-the-go users.",
    stack: [
      "React Native",
      "Expo",
      "React Navigation",
      "JavaScript",
      "Node.js",
    ],
    highlights: [
      "Built mobile flows around practical use cases, not generic templates",
      "Extended product thinking from web interfaces into mobile",
      "Kept the same business-software mindset across devices",
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
      "Building internal business software across commercial, CRM, HR, production, support and operations. Owning frontend delivery, backend support, integrations and iterative product evolution.",
  },
  {
    role: "Independent product and freelance work",
    company: "Personal and client projects",
    period: "2023 - Present",
    summary:
      "Shipping portfolio work, prototypes, React Native experiments and web products while expanding into AI-assisted workflows, automation and multi-stack implementation.",
  },
];

const evidence = [
  "52 repositories with JavaScript and Node.js usage",
  "41 repositories with React in active delivery",
  "23 repositories with TypeScript adoption",
  "11 repositories connected to PostgreSQL",
  "4 repositories using NestJS",
  "4 repositories using Azure Functions",
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
          className="sticky top-4 z-40 mb-8 rounded-full border border-white/10 bg-[color:var(--panel-strong)] px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Ramiro Benitez
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Full Stack Developer · Buenos Aires, Argentina
              </p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>

        <section className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.9fr] lg:items-end">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">Full stack product engineering</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                I build business software, AI workflows and internal platforms
                that teams actually use.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                My work sits where product thinking meets delivery discipline:
                React and Next.js on the frontend, Node.js and Python behind the
                scenes, Azure in the middle, and a strong bias toward systems
                that simplify real operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ramabeni94.dev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#0d1110] transition hover:translate-y-[-1px]"
                >
                  <FiMail className="text-base" />
                  Start a conversation
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
            </motion.div>

            <motion.div
              className="relative"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="hero-card">
                <div className="hero-glow hero-glow-lime" />
                <div className="hero-glow hero-glow-cyan" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
                    <FiMapPin />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="metric-card">
                        <p className="metric-value">{metric.value}</p>
                        <p className="metric-label">{metric.label}</p>
                        <p className="metric-detail">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 max-w-md text-sm leading-6 text-[color:var(--muted)]">
                    This portfolio reflects real delivery patterns extracted from
                    current repositories, not a generic stack wishlist.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="mt-8">
          <SectionHeading
            eyebrow="What I build"
            title="From internal tools to AI-assisted workflows"
            description="Most of my work lives inside business-critical products: commercial operations, CRM, HR portals, production systems, automation services and AI-enabled support layers."
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
                      <span className="eyebrow">Focus area</span>
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
            eyebrow="Selected delivery streams"
            title="Representative work, grouped by product domain"
            description="A portfolio built mostly from private production software means the best signal is the pattern: recurring systems, recurring stacks and recurring business problems solved across multiple codebases."
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
                    confidential stack snapshot
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
            title="The technologies showing up repeatedly in shipped work"
            description="These are not aspirational keywords. They come from the codebases currently under my GitHub accounts and organization access."
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
              eyebrow="Experience snapshot"
              title="Current professional arc"
              description="A mix of ongoing internal product work and independent project delivery, with most depth concentrated in multi-repo business applications."
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
            <span className="eyebrow">Repository evidence</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              What the repo map says
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              The strongest signal is consistency: the same families of
              technologies show up across multiple products, not just one-off
              experiments.
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
              Explore public GitHub
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
                If you need someone who can own the UI, API and delivery path,
                let&apos;s talk.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                I am most useful in environments where product needs change
                fast, workflows are messy and the software still has to ship
                cleanly.
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
            <p>Ramiro Benitez · Full Stack Developer</p>
            <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
