"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { assetBasePath, links, siteCopy } from "./portfolioContent";

const sectionIds = ["proyectos", "experiencia", "stack", "contacto"];

function SectionIntro({ label, title, description }) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}

function ProjectFeature({ project, index }) {
  return (
    <article className={`project-feature ${index % 2 ? "project-feature--reverse" : ""}`}>
      <div className="project-copy">
        <p className="project-kicker"><span>{project.number}</span>{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-details">
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <p className="project-stack">{project.stack}</p>
      </div>
      <figure className="project-figure">
        <div className="project-media project-showcase">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="project-showcase-image"
          />
        </div>
        <figcaption>{project.visualNote}</figcaption>
      </figure>
    </article>
  );
}

export default function Home() {
  const [locale, setLocale] = useState("es");
  const copy = siteCopy[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "es" || saved === "en") {
      setLocale(saved);
    } else if (!window.navigator.language.toLowerCase().startsWith("es")) {
      setLocale("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  return (
    <>
      <a className="skip-link" href="#contenido">{locale === "es" ? "Saltar al contenido" : "Skip to content"}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Ramiro Benitez — inicio">
            <span className="brand-mark">RB<span>.</span></span>
            <span className="brand-name">Ramiro Benitez<small>Full Stack Software Engineer</small></span>
          </a>
          <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
            {copy.navigation.map((label, index) => (
              <a key={sectionIds[index]} href={`#${sectionIds[index]}`}>{label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="language-switch" role="group" aria-label={locale === "es" ? "Idioma" : "Language"}>
              <button type="button" onClick={() => setLocale("es")} aria-pressed={locale === "es"}>ES</button>
              <span aria-hidden="true">/</span>
              <button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"}>EN</button>
            </div>
            <a className="header-contact" href="#contacto">{copy.navigation[3]} <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero section-container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}<br /><em>{copy.hero.emphasis}</em></h1>
            <p className="hero-description">{copy.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">{copy.hero.workCta}<FiArrowUpRight aria-hidden="true" /></a>
              <a className="button button-text" href={copy.cv} download>{copy.cvLabel}<FiDownload aria-hidden="true" /></a>
            </div>
            <p className="hero-location"><FiMapPin aria-hidden="true" />{copy.hero.location}</p>
          </div>
          <div className="hero-portrait-wrap">
            <svg className="portrait-clip-defs" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="portrait-spline" clipPathUnits="objectBoundingBox">
                  <path d="M .22 .025 C .38 -.018 .56 .035 .72 .015 C .87 -.002 .98 .105 .985 .25 C .99 .37 .955 .48 .985 .6 C 1.015 .78 .93 .945 .76 .985 C .59 1.02 .48 .975 .31 .997 C .15 1.015 .015 .93 .015 .77 C .012 .61 .05 .53 .018 .39 C -.015 .23 .045 .08 .22 .025 Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="hero-portrait">
              <Image
                src={`${assetBasePath}/ramiro-nexoworks.webp`}
                alt={copy.hero.portraitAlt}
                width={1200}
                height={1642}
                sizes="(max-width: 650px) 86vw, (max-width: 950px) 35vw, 30vw"
                priority
                className="portrait-image"
              />
            </div>
            <p className="portrait-caption">{copy.hero.portraitCaption}</p>
          </div>
          <a className="scroll-cue" href="#enfoque">{copy.hero.scroll}<FiArrowDown aria-hidden="true" /></a>
        </section>

        <section id="enfoque" className="intro-band">
          <div className="section-container intro-inner">
            <p className="section-label">{copy.intro.label}</p>
            <div>
              <h2>{copy.intro.title}</h2>
              <p>{copy.intro.body}</p>
              <ul className="intro-highlights">
                {copy.intro.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects-section section-container">
          <SectionIntro label={copy.projects.label} title={copy.projects.title} description={copy.projects.description} />
          <div className="featured-projects">
            {copy.projects.featured.map((project, index) => <ProjectFeature key={project.number} project={project} index={index} />)}
          </div>
          <div className="more-projects">
            <p className="section-label">{copy.projects.moreLabel}</p>
            <div className="more-list">
              {copy.projects.more.map((project) => (
                <article className="more-row" key={project.number}>
                  <span className="more-number">{project.number}</span>
                  <div className="more-title"><h3>{project.title}</h3><p>{project.type}</p></div>
                  <p className="more-summary">{project.summary}</p>
                  <span className="more-stack">{project.stack}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="experience-section">
          <div className="section-container">
            <SectionIntro label={copy.experience.label} title={copy.experience.title} />
            <div className="experience-list">
              {copy.experience.entries.map((entry) => (
                <article className="experience-row" key={entry.company}>
                  <p className="experience-period">{entry.period}</p>
                  <div><h3>{entry.role}</h3><p className="experience-company">{entry.company}</p></div>
                  <p className="experience-description">{entry.description}</p>
                </article>
              ))}
            </div>
            <a className="nexo-link" href={links.nexo} target="_blank" rel="noopener noreferrer">{copy.experience.nexoCta}<FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section id="stack" className="stack-section section-container">
          <SectionIntro label={copy.stack.label} title={copy.stack.title} />
          <div className="stack-grid">
            {copy.stack.groups.map((group, index) => (
              <article className="stack-group" key={group.title}>
                <span className="stack-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="section-container contact-inner">
            <p className="section-label">{copy.contact.label}</p>
            <div>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.description}</p>
              <a className="contact-email" href={links.email}>ramiromarcelobenitez@gmail.com<FiArrowUpRight aria-hidden="true" /></a>
              <div className="contact-links">
                <a href={links.email}>{copy.contact.emailCta}<FiArrowUpRight aria-hidden="true" /></a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<FiArrowUpRight aria-hidden="true" /></a>
                <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub<FiArrowUpRight aria-hidden="true" /></a>
                <a href={copy.cv} download>{copy.cvLabel}<FiDownload aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <p>© {new Date().getFullYear()} Ramiro Benitez <span>·</span> {copy.footer}</p>
          <a href="#inicio">{copy.backToTop}<FiArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
