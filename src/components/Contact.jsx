import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard && personalInfo.phone) {
      navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const activeSocials = personalInfo.socialLinks.filter((s) => Boolean(s.url));

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return GithubIcon;
      case 'linkedin':
        return LinkedinIcon;
      case 'leetcode':
        return LeetCodeIcon;
      default:
        return ExternalLink;
    }
  };

  return (
    <section className="section-wrapper" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 id="contact-heading" className="section-heading">
          Contact &amp; Connect
        </h2>
        <p className="section-desc">
          Feel free to reach out regarding software development roles, internship conversions, or technical discussions.
        </p>

        <div className="contact-grid">
          {/* Direct Email & Location Card */}
          <div className="contact-info-card">
            <div className="contact-email-box">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-tertiary)'
                }}
              >
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-email-link cursor-target"
                data-cursor-label="Send Email"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="contact-actions-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary cursor-target"
                data-cursor-label="Compose"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Compose Mail</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary cursor-target"
                data-cursor-label="Copy Email"
                onClick={handleCopyEmail}
                aria-live="polite"
              >
                {copiedEmail ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Address'}</span>
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1rem',
                marginTop: 'auto'
              }}
            >
              <MapPin size={16} aria-hidden="true" />
              <span>Based in {personalInfo.location} (IST / UTC+5:30)</span>
            </div>
          </div>

          {/* Phone and Verified Profiles */}
          <div className="contact-profiles-list">
            {/* Phone contact card */}
            {personalInfo.phone && (
              <div className="contact-profile-card">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-profile-left cursor-target"
                  data-cursor-label="Call"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Phone size={20} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                  <div>
                    <div className="contact-profile-title">Mobile / Phone</div>
                    <div className="contact-profile-username">+91 {personalInfo.phone}</div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="btn btn-secondary cursor-target"
                  data-cursor-label="Copy Phone"
                  style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            )}

            {/* Verified Social Profiles */}
            {activeSocials.map((social) => {
              const Icon = getSocialIcon(social.name);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-profile-card cursor-target"
                  data-cursor-label={social.name}
                  aria-label={social.label || `${personalInfo.name} on ${social.name} (opens in new tab)`}
                >
                  <div className="contact-profile-left">
                    <Icon size={20} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                    <div>
                      <div className="contact-profile-title">{social.name}</div>
                      <div className="contact-profile-username">
                        {social.username ? `linkedin.com/in/${social.username}` : social.url}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={16} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
