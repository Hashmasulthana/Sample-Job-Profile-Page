import React from 'react';
import './Jobs.css';

const JobCards = () => {
  const jobCards = [
    {
      title: "Hybrid job",
      jobTitle: "Sr. .Net Developer",
      company: "Krasan Consulting Services",
      jobType: "Full Time",
      experience: "2 - 6 Years",
      location: "Springfield / USA",
    },
    {
      title: "In Office job",
      jobTitle: "HR Recruiter | BMS / BBA Fresher",
      company: "HINDCO Consulting Services",
      jobType: "Full Time",
      experience: "0 - 2 Years",
      location: "Mumbai, India",
    },
    {
      title: "In Office job",
      jobTitle: "Waiter",
      company: "Sanda Hotels",
      jobType: "Full Time",
      experience: "1 - 3 Years",
      location: "Goa, India",
    },
    {
      title: "Remote job",
      jobTitle: "AccuRev Consultant",
      company: "Spotline, Inc.",
      jobType: "Full Time",
      experience: "0 - 5 Years",
      location: "United States",
    },
    {
      title: "In Office job",
      jobTitle: "Airport Ground Staff",
      company: "HINDCO Consulting Services",
      jobType: "Full Time",
      experience: "0 - 5 Years",
      location: "Faizabad, India",
    },
    {
      title: "In Office job",
      jobTitle: "Business Development- Proposal Writer",
      company: "Lochan & Co",
      jobType: "Full Time",
      experience: "2 - 5 Years",
      location: "Noida, India",
    },
    {
      title: "In Office job",
      jobTitle: "Scientific Medical Writer",
      company: "HINDCO Consulting Services",
      jobType: "Full Time",
      experience: "0 - 5 Years",
      location: "Mumbai, India",
    },
    {
      title: "Hybrid job",
      jobTitle: "Cloud Solutions Architect",
      company: "TechBridge Solutions",
      jobType: "Contract",
      experience: "3 - 7 Years",
      location: "Remote",
    },
    {
      title: "In Office job",
      jobTitle: "Project Manager",
      company: "GlobalTech Enterprises",
      jobType: "Full Time",
      experience: "5 - 10 Years",
      location: "Pune, India",
    },
  ];

  return (
    <div className="job-cards-container">
      <div className="job-cards-grid">
        {jobCards.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-card-header">
              <h3>{job.title}</h3>
            </div>
            <div className="job-card-body">
              <p><strong>{job.jobTitle}</strong></p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </div>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCards;
