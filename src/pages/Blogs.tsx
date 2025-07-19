import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "Deploying React Apps on AWS S3 & CloudFront",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@avadhootpawaskar/deploying-react-apps-on-aws-s3-cloudfront-1234567890ab",
    description: "A step-by-step guide to hosting your React portfolio on AWS S3 and CloudFront, with tips for performance and security.",
  },
  {
    title: "Building a CRM with JavaFX and MySQL: My Approach",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/avadhootpawaskar/building-a-crm-with-javafx-and-mysql-my-approach-abcdef123456",
    description: "How I designed and implemented a desktop CRM for fitness studios, including lessons learned and best practices.",
  },
  {
    title: "End-to-End MERN Stack Project: Lessons Learned",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@avadhootpawaskar/end-to-end-mern-stack-project-lessons-learned-9876543210ab",
    description: "Insights from building and deploying a full-stack MERN application, from planning to production.",
  },
  {
    title: "Cloud Certifications: How I Prepared for AWS & GCP Exams",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/avadhootpawaskar/cloud-certifications-how-i-prepared-for-aws-gcp-exams-1234abcd5678",
    description: "My personal roadmap, resources, and tips for passing cloud certification exams as a student and developer.",
  },
  {
    title: "Automating DevOps Workflows with GitHub Actions",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@avadhootpawaskar/automating-devops-workflows-with-github-actions-abcdef987654",
    description: "A practical guide to setting up CI/CD pipelines for your projects using GitHub Actions.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts, tutorials, and real-world experiences in software and cloud development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
