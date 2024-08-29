import { useState, useEffect } from 'react';

const Education = () => {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/educationData.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setEducationData(data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="content">
                <div className="contact-main">
                    <section className="contact">
                        {educationData.map((edu, index) => (
                            <div key={index}>
                                <div className="text" style={{ textDecoration: "underline", color:"white", fontSize:"30px" }}>{edu.institution}</div>
                                <div className="text1" style={{color:"white"}}>{edu.degree}, <span className="gray">major in {edu.major}</span></div>
                                <div className="text1" style={{color:"white"}}>{edu.location}, <span className="gray">{edu.duration}</span></div>
                                <p>
                                    {edu.highlights.map((highlight, index) => (
                                        <span key={index}>• {highlight}<br/></span>
                                    ))}
                                </p>
                                <p>
                                    <strong className="text3">Coursework:</strong> {edu.coursework.join(', ')}
                                </p>
                                {index <educationData.length - 1 && (
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

export default Education;
