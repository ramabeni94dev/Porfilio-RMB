"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profileCardImage from "../public/ProfileCard2.png";
import { siteCopy } from "./portfolioContent";
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

const iconMap = {
  layers: FiLayers,
  briefcase: FiBriefcase,
  messageSquare: FiMessageSquare,
  settings: FiSettings,
  code: FiCode,
  cpu: FiCpu,
  database: FiDatabase,
  smartphone: FiSmartphone,
};

const languageOptions = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
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
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");

    if (savedLocale === "en" || savedLocale === "es") {
      setLocale(savedLocale);
      return;
    }

    const browserLocale = window.navigator.language
      ?.toLowerCase()
      .startsWith("es")
      ? "es"
      : "en";

    setLocale(browserLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const content = siteCopy[locale] ?? siteCopy.en;
  const {
    header,
    navigation,
    hero,
    metrics,
    focusAreas,
    workStreams,
    stackGroups,
    experience,
    evidence,
    sections,
  } = content;

  return (
    <main className="relative overflow-hidden px-4 pb-16 pt-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.header
          className="portfolio-header sticky top-4 z-40 mb-8 rounded-[2rem] border border-white/10 bg-[color:var(--panel-strong)] px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur md:rounded-full"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portfolio-header__inner">
            <div className="portfolio-header__top">
              <div className="portfolio-header__brand">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {header.name}
                </p>
                <p className="portfolio-header__role">{header.role}</p>
                <div className="portfolio-header__location">
                  <FiMapPin className="text-[0.92rem]" />
                  <span>{header.location}</span>
                </div>
              </div>

              <div
                className="portfolio-locale-switch inline-flex rounded-full border border-white/10 bg-white/5 p-1"
                aria-label="Language switch"
              >
                {languageOptions.map((option) => {
                  const isActive = option.code === locale;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLocale(option.code)}
                      aria-pressed={isActive}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                        isActive
                          ? "bg-[color:var(--accent)] text-[#081210]"
                          : "text-[color:var(--muted)] hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <nav className="portfolio-header__nav">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="portfolio-header__nav-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>

        <section className="hero-stage">
          <div className="grid gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,24rem)] md:items-center xl:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">{hero.eyebrow}</span>
              <p className="mt-10 text-lg font-medium text-white/80">
                {hero.greeting}
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                {hero.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                <FiMapPin />
                <span>{hero.location}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ramabeni94.dev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#0d1110] transition hover:translate-y-[-1px]"
                >
                  <FiMail className="text-base" />
                  {hero.ctaEmail}
                </a>
                <a
                  href="https://github.com/ramabeni94dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <FiGithub className="text-base" />
                  {hero.ctaGithub}
                </a>
                <a
                  href="https://www.linkedin.com/in/ramabeni94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <FiLinkedin className="text-base" />
                  {hero.ctaLinkedIn}
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
              className="relative flex justify-center"
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
                    alt={hero.portraitAlt}
                    width={760}
                    height={760}
                    priority
                    className="portrait-orb-image"
                  />
                </div>
                <div className="portrait-note">
                  <span className="eyebrow">{hero.profileEyebrow}</span>
                  <p className="mt-4 text-xl font-semibold text-white">
                    {hero.profileTitle}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    {hero.profileDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="mt-8">
          <SectionHeading
            eyebrow={sections.work.eyebrow}
            title={sections.work.title}
            description={sections.work.description}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = iconMap[area.icon];

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
                      <span className="eyebrow">{sections.work.cardEyebrow}</span>
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
            eyebrow={sections.projects.eyebrow}
            title={sections.projects.title}
            description={sections.projects.description}
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
                    {sections.projects.badge}
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
            eyebrow={sections.stack.eyebrow}
            title={sections.stack.title}
            description={sections.stack.description}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {stackGroups.map((group, index) => {
              const Icon = iconMap[group.icon];

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
              eyebrow={sections.experience.eyebrow}
              title={sections.experience.title}
              description={sections.experience.description}
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
            <span className="eyebrow">{sections.evidence.eyebrow}</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              {sections.evidence.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              {sections.evidence.description}
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
              {sections.evidence.cta}
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
              <span className="eyebrow">{sections.contact.eyebrow}</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                {sections.contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                {sections.contact.description}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:ramabeni94.dev@gmail.com"
                className="contact-card"
              >
                <FiMail className="text-xl text-[color:var(--accent)]" />
                <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {sections.contact.cards.email}
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
                  {sections.contact.cards.linkedin}
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
                  {sections.contact.cards.github}
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
            <p>{sections.footer}</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
