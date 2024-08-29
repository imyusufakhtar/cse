import { useState, useEffect } from 'react';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/projectsData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="content">
        <div className="contact-main">
          <h1 className="text4">what i done,</h1>
          <section className="contact">
            {data.map((project, index) => (
              <div key={project.id}>
                <div className="text" style={{ color: "white" }}>
                  {project.name}
                </div>
                <p>
                  {project.desc ? (
                    project.desc.map((desc, descIndex) => (
                      <span key={descIndex}>
                        • {desc}
                        <br />
                      </span>
                    ))
                  ) : (
                    <span>No description available</span>
                  )}
                </p>
                {index < data.length - 1 && (
                  <hr style={{ height: "3px", backgroundColor: "gray", border: "none" }} />
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
