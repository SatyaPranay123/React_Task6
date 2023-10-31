import React from 'react';
import food from './food.jpeg';
import analysis from './analysis.jpeg';
import './Project.css';

export function Project() {
  return (
    <div>
      <h1 className="project-section">PROJECTS</h1>
      <div className="project-card">
        <h2 className="project-title">Food Delivery App using Cloud Computing</h2>
        <img src={food} alt="Food Delivery App" className="project-image" />
        <div className="project-description">
          Project: Food Delivery app using Cloud Computing
        </div>
        <div className="project-metadata">
          Duration: May 2023 - July 2023
        </div>
        <div className="project-metadata">
          Website: Collaborative Cloud Computing Project
        </div>
        <div className="project-description">
          Description: Our team developed a user-friendly frontend website to enhance cloud-based services and applications.
        </div>
        <div className="project-description">
          Achievements: Improved cloud resource accessibility, security, and user experience. Optimized performance and scalability.
        </div>
        <div className="technologies-used">
          Technologies: Leveraged cloud computing platforms, frontend frameworks, and collaborative tools.
        </div>
        <div className="future-plans">
          Future: Continuously enhancing the website to make cloud resources more accessible and efficient.
        </div>
      </div>

      <div className="project-card sentimental-analysis">
        <h2 className="project-title">Sentiment Analysis Using Tweets</h2>
        <img src={analysis} alt="Sentiment Analysis" className="project-image" />
        <div className="project-description sentimental-analysis">
          Sentiment Analysis using Tweets
        </div>
        <div className="project-description sentimental-analysis">
          Developed an ML model for the Pfizer Vaccine tweets dataset. The model classifies the tweets into positive or negative sentiments.
        </div>
        <div className="project-description sentimental-analysis">
          Used various ML algorithms like Logistic Regression and Decision Trees.
        </div>
        <div className="technologies-used sentimental-analysis">
          Technology Used: Machine Learning, Pandas, Python.
        </div>
      </div>
    </div>
  );
}
