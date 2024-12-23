import React from 'react';
import './Home.css';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'ABC Tech',
    location: 'Hyderabad',
    description: 'Develop responsive and engaging user interfaces using React.'
  },
  {
    title: 'Backend Developer',
    company: 'XYZ Corp',
    location: 'Bangalore',
    description: 'Create robust APIs and manage databases effectively.'
  },
  {
    title: 'UI/UX Designer',
    company: '123 Solutions',
    location: 'Remote',
    description: 'Design intuitive and user-friendly application interfaces.'
  }
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Jobringer</h1>
        <p>Your ultimate job portal for finding your dream job. We connect you to top companies and provide a platform to showcase your skills.</p>
      </section>

      <section className="job-profiles">
        <h2>Featured Job Profiles</h2>
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
