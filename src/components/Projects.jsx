import { ExternalLink, CheckCircle2, Code2 } from 'lucide-react';
import { featuredProjects, personalInfo } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section-wrapper" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <span className="section-eyebrow">Work &amp; Implementations</span>
        <h2 id="projects-heading" className="section-heading">
          Featured Projects
        </h2>
        <p className="section-desc">
          Verified applications developed and implemented by {personalInfo.name}. Showcasing machine learning models,
          backend architecture, and database management.
        </p>

        <div className="projects-container">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="project-featured-card cursor-target"
              data-cursor-label={project.title}
            >
              {/* Header and Live Links */}
              <div className="project-card-header">
                <div className="project-title-area">
                  <div className="project-meta-pills">
                    <span className="project-pill-featured">Featured Project</span>
                    <span className="project-pill-category">{project.category}</span>
                    <span style={{ color: 'var(--border-hover)' }}>•</span>
                    <span className="project-pill-category">{project.year}</span>
                    {project.type && (
                      <>
                        <span style={{ color: 'var(--border-hover)' }}>•</span>
                        <span className="project-pill-category">{project.type}</span>
                      </>
                    )}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <div className="project-cta-group">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      aria-label={`Open ${project.title} live deployment (opens in new tab)`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <Code2 size={15} aria-hidden="true" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Summary Description */}
              <p className="project-summary-text">{project.summary}</p>

              {/* Verified Features */}
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1rem'
                  }}
                >
                  Key Architectural &amp; Implementation Features
                </h4>
                <div className="project-features-grid">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="project-feature-item">
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--text-primary)', flexShrink: 0, marginTop: '0.15rem' }}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="project-tech-section">
                <span className="project-tech-label">Technology Stack</span>
                <ul className="project-tech-tags" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech, tIdx) => (
                    <li key={tIdx} className="badge-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
