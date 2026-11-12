import { personalInfo, personalInterests } from '../data/portfolioData';
import { Camera, Trophy, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="section-wrapper" id="about" aria-labelledby="about-heading">
      <div className="container">
        <span className="section-eyebrow">Background &amp; Profile</span>
        <h2 id="about-heading" className="section-heading">
          About {personalInfo.name}
        </h2>
        <p className="section-desc">
          Information Science and Engineering graduate with a strong foundation in Java, Python, SQL, and modern software development.
        </p>

        <div className="about-grid">
          {/* Main narrative */}
          <div className="about-text-col">
            <p className="about-paragraph">
              I am an aspiring software developer with a Bachelor of Engineering in Information Science and Engineering from{' '}
              <strong>SJB Institute of Technology, Bengaluru</strong> (CGPA: 8.35/10), building upon a strong engineering foundation
              established through a Diploma in Tool &amp; Die Making from <strong>GT&amp;TC Bidar</strong> (84%).
            </p>
            <p className="about-paragraph">
              With deep competencies in <strong>Java, Python, SQL, and Spring Boot</strong>, I focus on building reliable software solutions,
              structured relational database systems with MySQL, and practical machine learning applications. My hands-on projects include
              architecting a full-stack <strong>Hostel Management System</strong> with JDBC and MySQL, as well as developing classification models
              for <strong>Fake News Detection</strong> utilizing NLP techniques and machine learning algorithms.
            </p>
            <p className="about-paragraph">
              As an <strong>AI Developer Intern at CampusPe</strong>, I contributed to AI-based document analysis solutions and feature development
              for the Unified Command Centre project. I am eager to leverage my technical foundation, continuous learning mindset, and problem-solving
              drive to deliver high-quality software solutions.
            </p>

            {/* Resume-supported personal interests (renders only if data provided) */}
            {personalInterests && personalInterests.length > 0 && (
              <div className="about-interests-wrap">
                <h3 className="about-interests-title">Interests &amp; Disciplines</h3>
                <div className="about-interests-grid">
                  {personalInterests.map((interest, idx) => (
                    <div key={idx} className="about-interest-card cursor-target" data-cursor-label="Interest">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        {interest.title?.includes('Chess') ? (
                          <Trophy size={16} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                        ) : (
                          <Camera size={16} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                        )}
                        <span className="about-interest-name">{interest.title}</span>
                      </div>
                      <p className="about-interest-desc">{interest.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick facts sidebar */}
          <div className="about-facts">
            <div className="about-fact-item">
              <span className="about-fact-label">Location</span>
              <span className="about-fact-value">{personalInfo.location}</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Education</span>
              <span className="about-fact-value">B.E. Information Science &amp; Engg (2023–2026)</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Institution</span>
              <span className="about-fact-value">SJB Institute of Technology, Bengaluru</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Primary Languages</span>
              <span className="about-fact-value">Java, Python, SQL</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Backend &amp; Databases</span>
              <span className="about-fact-value">Spring Boot, MySQL, JDBC</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Status</span>
              <span className="about-fact-value">Available for Developer Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
