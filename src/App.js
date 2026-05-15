import React from 'react';
import './App.css';

const projects = [
  {
    title: 'Loan, Collateral & Insurance Systems',
    type: 'Enterprise Systems',
    text: 'Led deployment of core banking platforms, replacing manual workflows with scalable system processes, structured UAT, and clear delivery governance.',
    impact: 'Reduced loan processing time by 40%',
    stack: ['BPMN', 'UAT', 'System Design', 'Integration'],
  },
  {
    title: '1M+ Customer Data Migration',
    type: 'Data & Integration',
    text: 'Orchestrated migration during a multi-company merger with validation, reconciliation, metadata control, and zero downtime expectations.',
    impact: 'Migrated 1M+ customers with zero downtime',
    stack: ['SQL', 'Data Mapping', 'ETL', 'Metadata'],
  },
  {
    title: 'Event-Driven Campaign Automation',
    type: 'AI + Cloud Architecture',
    text: 'Designed event-driven workflows for marketing automation, recommendation logic, and integrations between internal and external systems.',
    impact: 'Automated real-time customer engagement flows',
    stack: ['AWS SQS', 'Lambda', 'API Gateway', 'OpenAPI'],
  },
  {
    title: 'NVIDIA Stock Prediction Pipeline',
    type: 'AI / Data Science',
    text: 'Built a short-to-medium term forecasting pipeline using technical indicators, macroeconomic variables, feature engineering, and model evaluation.',
    impact: 'Processed 5 years of historical market data',
    stack: ['R', 'Python', 'XGBoost', 'Feature Engineering'],
  },
];

const skillGroups = [
  {
    group: 'Architecture & Systems',
    items: ['Business Systems Analysis', 'Solution Architecture', 'BPMN / C4 / ERD', 'API Design', 'Integration Design']
  },
  {
    group: 'Cloud & Data',
    items: ['AWS Lambda', 'AWS SQS', 'S3', 'Databricks', 'Snowflake', 'Data Mapping', 'ETL']
  },
  {
    group: 'AI & Analytics',
    items: ['Python', 'SQL', 'R', 'Machine Learning Pipelines', 'Feature Engineering', 'Predictive Modeling']
  },
  {
    group: 'Delivery & Platforms',
    items: ['Salesforce', 'Jira', 'Confluence', 'Swagger / OpenAPI', 'Stakeholder Management', 'UAT']
  }
];

const experience = [
  {
    id: 'drimmers',
    role: 'Supply Chain & Systems Analyst',
    company: 'Drimmers',
    date: '2025 — Present',
    detail: 'Improving inventory visibility, demand planning, routing decisions, and operational workflows through data-driven system design.',
    star: 'Currently building analytics-driven workflows that support better inventory decisions and reduce operational delays.'
  },
  {
    id: 'tbc-bank',
    role: 'Senior System & Solutions Analyst',
    company: 'TBC Bank',
    date: '2019 — 2025',
    detail: 'Designed scalable integration workflows, campaign automation logic, and enterprise system architecture across banking products.',
    star: 'Architected event-driven integration patterns across 30+ enterprise systems using API logic, mapping rules, and error-handling schemas.'
  },
  {
    id: 'tbc-bank-lead',
    role: 'Lead Business Systems Analyst',
    company: 'TBC Bank',
    date: '2017 — 2019',
    detail: 'Led delivery of loan, collateral, insurance, migration, and cross-functional transformation initiatives.',
    star: 'Led migration of 1M+ customers with zero downtime during a high-stakes multi-company merger.'
  },
  {
    id: 'tbc-bank-operations',
    role: 'Process Improvement & Operations Specialist',
    company: 'TBC Bank',
    date: '2014 — 2017',
    detail: 'Built customer service workflows, SOPs, queue management, and operational process improvements for large teams.',
    star: 'Built customer service workflows and operational adoption practices supporting a 5000+ employee banking organization.'
  }
];

const highlightMetrics = [
  ['30+', 'enterprise integrations'],
  ['1M+', 'customer records migrated'],
  ['17+', 'Agile teams coordinated'],
  ['40%', 'faster loan processing'],
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">Irma M.</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">Brooklyn, NY · AI + Business Systems</p>
          <h1>Bridging business systems, AI, and cloud architecture into scalable enterprise solutions.</h1>
          <p className="hero-text">
            I translate complex business logic into reliable systems, data flows, integrations, requirements, and automation workflows that delivery teams can build and scale.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button primary">View Selected Work</a>
            <a href="https://www.linkedin.com/in/irmamodzgvrishvili/" target="_blank" rel="noreferrer" className="button secondary">LinkedIn</a>
          </div>
        </div>
        <aside className="hero-card impact-card">
          <div className="profile-mark">
            <img src="/images/profile.jpg" alt="Irma Modzgvrishvili" />
            <div>
              <p className="card-label">Portfolio Focus</p>
              <h2>Systems · Data · AI · Cloud</h2>
            </div>
          </div>
          <div className="impact-grid">
            {highlightMetrics.map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="social-proof" aria-label="Professional background">
        <span>Experience across</span>
        <a href="#tbc-bank">TBC Bank</a>
        <a href="#drimmers">Drimmers</a>
        <a href="#education">Illinois Tech</a>
      </section>

      <section id="work" className="section">
        <div className="section-header">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that show business impact, not only technology.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-impact"><span>Impact</span>{project.impact}</div>
              <div className="tags">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section split-section">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>What I bring to a team</h2>
          <p className="section-text">
            My strongest value is turning messy business needs into clear architecture, data flows, acceptance criteria, and delivery plans.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <div className="skill-cloud">
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>From operations transformation to AI-enabled systems.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article id={item.id} className="timeline-item" key={`${item.role}-${item.company}`}>
              <span>{item.date}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
                <p className="star-bullet">★ {item.star}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation for AI-enabled enterprise systems.</h2>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <span className="education-date">2024 — Present</span>
            <h3>MS in Artificial Intelligence</h3>
            <p className="company">Illinois Institute of Technology · Chicago, IL</p>
            <p>Strengthening expertise in machine learning, optimization, predictive analytics, intelligent systems, and data-driven decision-making for applied enterprise technology work.</p>
            <p className="star-bullet">★ Applying AI coursework to enterprise systems, analytics, automation, and operational decision-support problems.</p>
            <div className="tags education-tags">
              <span>Machine Learning</span>
              <span>Optimization</span>
              <span>Predictive Analytics</span>
              <span>Intelligent Systems</span>
            </div>
          </article>
          <article className="education-card">
            <span className="education-date">2004 — 2006</span>
            <h3>Computer Science</h3>
            <p className="company">Ivane Javakhishvili Tbilisi State University · Tbilisi, Georgia</p>
            <p>Built a technical foundation in software, systems, databases, and analytical problem-solving.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Let’s connect</p>
        <h2>Open to senior analyst, AI solutions, and systems architecture opportunities.</h2>
        <div className="contact-links">
          <a className="contact-primary" href="mailto:modzgvrishviliirma@gmail.com?subject=Portfolio%20Inquiry">Email Me</a>
          <a href="https://github.com/IrmaGeo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/irmamodzgvrishvili/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

export default App;
