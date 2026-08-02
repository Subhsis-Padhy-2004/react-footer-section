

import { motion } from "framer-motion";
import {
  footerColumns,
  trustBadges,
  contactInfo,
  legalLinks,
  socialLinks,
  copyrightText,
} from "./footerData";
import SocialIcon from "./SocialIcon";
import "./FooterSection.css";

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function FooterSection() {
  return (
    <footer className="site-footer">
      {/* Solid dark body */}
      <div className="site-footer__body">
        {/* Ambient colour glow — decorative, drifts slowly */}
        <div className="site-footer__blobs" aria-hidden="true">
          <span className="blob blob--green" />
          <span className="blob blob--red" />
          <span className="blob blob--purple" />
        </div>

        {/* ---------- Link columns ---------- */}
        <div className="footer-columns">
          {footerColumns.map((col, i) => (
            <motion.div
              key={col.title}
              className="footer-column"
              custom={i}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="footer-column__title">{col.title}</h4>
              <ul className="footer-column__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ---------- Trust badges strip ---------- */}
        <motion.div
          className="footer-trust-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            {/* Swap with your real logo (image or SVG) */}
            <span className="footer-logo__mark">●</span>
            <span className="footer-logo__text">
              YOUR<span className="footer-logo__accent">Brand</span>
            </span>
          </div>

          <div className="footer-badges">
            {trustBadges.map((badge) => (
              <motion.div
                className="trust-badge"
                key={badge.platform}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="trust-badge__stars">{"★".repeat(badge.rating)}</div>
                <div className="trust-badge__meta">
                  <span className="trust-badge__platform">{badge.platform}</span>
                  <span className="trust-badge__label">{badge.reviewLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Contact + legal bar ---------- */}
        <div className="footer-bottom-bar">
          <div className="footer-contact">
            <div className="footer-contact__email">
              <span className="footer-contact__label">Email us on</span>
              <a href={`mailto:${contactInfo.email}`}>
                <span className="footer-contact__icon">✉</span>
                {contactInfo.email}
              </a>
            </div>

            <div className="footer-contact__phones">
              {contactInfo.phones.map((p) => (
                <div className="footer-contact__phone" key={p.region}>
                  <span className="footer-contact__region">{p.region}</span>
                  <span>{p.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-legal-row">
            <p className="footer-copyright">{copyrightText}</p>

            <nav className="footer-legal-links">
              {legalLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </nav>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="footer-social-icon"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon name={social.name} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}