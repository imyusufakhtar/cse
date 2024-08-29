import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('experienceData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setExperienceData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="contact-main">
        <section className="contact">
          {experienceData.map((experience, index) => (
            <div key={index}>
              <div className="text" style={{ textDecoration: "underline", color: "white", fontSize: "30px" }}>{experience.company}</div>
              <div className="text1" style={{ color: "white" }}>{experience.jobProfile}, <span className="gray">{experience.location}</span></div>
              <div className="text1"><span className="gray">{experience.duration}</span></div>
              <p>
                {experience.highlights.map((highlight, idx) => (
                  <span key={idx}>• {highlight}<br /></span>
                ))}
              </p>
              {index !== experienceData.length - 1 && <hr style={{ height: "3px", backgroundColor: "gray", border: "none" }} />}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Experience;
