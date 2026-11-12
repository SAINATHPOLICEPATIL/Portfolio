import { lazy, Suspense } from "react";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";
import TechText from "./react-bits/TechText";
import "./Hero.css";
import image1 from "../components/assets/sai.jpeg"
import image2 from "../components/assets/sai2.jpeg"

// Lazy-load the heavy 3D WebGL component for instant hero rendering
const Lanyard = lazy(() => import("./react-bits/Lanyard"));

export default function Hero() {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#f4f4f6" : "#121214";
  const accentColor = theme === "dark" ? "#a0a0ab" : "#71717a";

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro & TechText Typography */}
          <div className="hero-content">
            <div className="hero-meta-badge">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>Available for Software Developer Roles</span>
              <span style={{ color: "var(--border-hover)" }}>|</span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <MapPin size={12} /> {personalInfo.location}
              </span>
            </div>

            {/* TechText used ONLY here for the hero heading */}
            <div className="hero-techtext-container" aria-hidden="true">
              <TechText
                text={personalInfo.name ? personalInfo.name.toUpperCase() : "SAINATH PATIL"}
                fontFamily="'Inter', -apple-system, sans-serif"
                fontWeight={700}
                fontSize={66}
                letterSpacing={-0.03}
                color={textColor}
                accentColor={accentColor}
                align="left"
                reach={140}
                softness={0.7}
                dashLength={3}
                dashGap={2}
                strokeWidth={1.5}
                reveal="letter"
                specks={10}
                selection={true}
                labels={false}
                draggable={true}
                bounce={0.3}
                sweep={true}
                speed={0.8}
                intro="metrics"
                introDuration={1.8}
              />
            </div>

            {/* Accessible screen-reader heading */}
            <h1 id="hero-name" className="sr-only">
              {personalInfo.name} — {personalInfo.role}
            </h1>

            <div className="hero-role">{personalInfo.role}</div>

            <p className="hero-bio">{personalInfo.summary}</p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary cursor-target"
                data-cursor-label="Projects"
              >
                <span>View Featured Projects</span>
                <ArrowDownRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary cursor-target"
                data-cursor-label="Contact"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Verified Developer Profiles */}
            <div className="hero-socials">
              {personalInfo.socialLinks
                .filter((link) => Boolean(link.url))
                .map((link) => {
                  const Icon =
                    link.name.toLowerCase() === 'github'
                      ? GithubIcon
                      : link.name.toLowerCase() === 'linkedin'
                        ? LinkedinIcon
                        : LeetCodeIcon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-link cursor-target"
                      data-cursor-label={link.name}
                      aria-label={link.label || `${link.name} Profile (opens in new tab)`}
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hero-social-link cursor-target"
                  data-cursor-label="Email"
                  aria-label="Send direct email"
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contained Lanyard Profile Showcase */}
          <div className="hero-lanyard-wrapper">
            <div
              className="hero-lanyard-box cursor-target"
              data-cursor-label="Interactive Badge"
              aria-label={`Interactive 3D profile ID badge for ${personalInfo.name}. Drag to interact.`}
            >
              <Suspense
                fallback={
                  <div className="lanyard-fallback">
                    <div className="lanyard-fallback-card">
                      <img
                        src={personalInfo.profileImage}
                        alt="Profile badge preview"
                        className="lanyard-fallback-img"
                      />
                    </div>
                  </div>
                }
              >
                <Lanyard
                  frontImage={image1}
                  backImage={image2}
                  strapImage="/band.png"
                  imageFit="cover"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.3}
                  size={0.6}
                  anchor="center"
                  strapLength={0.5}
                  strapColor="#111111"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={1}
                  damping={0.5}
                  elasticity={0.5}
                  breeze={0.5}
                  interactive
                  intro
                />
              </Suspense>
            </div>
            <span className="hero-lanyard-caption">
              Interactive 3D Badge • Click to flip / Drag to move
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
