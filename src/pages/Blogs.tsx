import React from 'react';
import './Blogs.css';

const experiences = [
  {
    title: "Building a CRM with JavaFX and MySQL",
    description: "Designed and implemented a desktop CRM for fitness studios. Learned about database design, JavaFX UI, and integrating authentication.",
  },
  {
    title: "End-to-End MERN Stack Project",
    description: "Built and deployed a full-stack MERN application. Gained experience in REST APIs, JWT auth, and CI/CD pipelines.",
  },
  {
    title: "React Portfolio on AWS S3 & CloudFront",
    description: "Deployed my React portfolio using AWS S3 and CloudFront. Learned about static hosting, CDN, and performance optimization.",
  },
  {
    title: "DevOps Automation with GitHub Actions",
    description: "Set up CI/CD pipelines for multiple projects using GitHub Actions. Automated testing, builds, and deployments.",
  },
  {
    title: "Cloud Certifications Preparation",
    description: "Prepared for AWS & GCP exams by building hands-on projects and using cloud services in real scenarios.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">🚀 My Experience in Building Projects</h2>
      <p className="blogs-intro">Here are some highlights and lessons learned from my journey building real-world software projects.</p>
      <div className="blogs-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{exp.title}</h3>
              <p className="blog-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
