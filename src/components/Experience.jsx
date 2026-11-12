import { Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { internshipExperience, certifications } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const hasExperience = internshipExperience && internshipExperience.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  if (!hasExperience && !hasCertifications) {
    return null;
  }

  return (
    <section className="section-wrapper" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <span className="section-eyebrow">Industry &amp; Credentials</span>
        <h2 id="experience-heading" className="section-heading">
          Experience &amp; Certifications
        </h2>
        <p className="section-desc">
          Professional internship contributions, project engineering, and verified technical credentials.
        </p>

        <div className="experience-wrapper">
          {/* Internship Experience */}
          {hasExperience && (
            <div className="experience-list">
              {internshipExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="experience-card cursor-target"
                  data-cursor-label={exp.company}
                >
                  <div className="experience-card-top">
                    <div>
                      <div className="experience-role-group">
                        <Briefcase size={18} style={{ color: 'var(--text-primary)', flexShrink: 0 }} aria-hidden="true" />
                        <h3 className="experience-role">{exp.role}</h3>
                      </div>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                    <span className="experience-period-badge">{exp.year}</span>
                  </div>

                  <ul className="experience-bullets">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="experience-bullet-item">
                        <span className="experience-bullet-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Certifications & Accreditations */}
          {hasCertifications && (
            <div className="certifications-section">
              <h3 className="certifications-title">Certifications &amp; Accreditations</h3>
              <div className="certifications-grid">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="certification-card cursor-target"
                    data-cursor-label="Certificate"
                  >
                    <div className="certification-header">
                      <Award size={18} style={{ color: 'var(--text-primary)', flexShrink: 0 }} aria-hidden="true" />
                      <span className="certification-year">{cert.year}</span>
                    </div>
                    <h4 className="certification-name">{cert.name}</h4>
                    <span className="certification-issuer">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

