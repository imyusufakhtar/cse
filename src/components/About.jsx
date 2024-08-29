import { useState, useEffect } from 'react';

const About = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetch('/aboutData.json')
            .then(response => response.json())
            .then(data => setProfileData(data))
            .catch(error => console.error('Error fetching profile data:', error));
    }, []);

    if (!profileData) {
        return null;  // Display nothing until data is fetched
    }

    return (
        <div className="content">
            <div className="contact-main">
                <h1 className="text4">who i am,</h1>
                <section className="contact">

                    {profileData.highlights.map((highlight, index) => (
                        <p key={index}>{highlight}</p>
                    ))}

                    <h4 className="text4">Skills,</h4>
                    <span><span style={{ color: "white" }}>Programming Languages:</span> {profileData.technicalSkills.programmingLanguages.join(', ')}</span><br />
                    <span><span style={{ color: "white" }}>Frontend Development:</span> {profileData.technicalSkills.frontendDevelopment.join(', ')}</span><br />
                    <span><span style={{ color: "white" }}>Backend Development:</span> {profileData.technicalSkills.backendDevelopment.join(', ')}</span><br />
                    <span><span style={{ color: "white" }}>Tools:</span> {profileData.technicalSkills.tools.join(', ')}</span><br />
                    <span><span style={{ color: "white" }}>Other Skills:</span> {profileData.technicalSkills.otherSkills.join(', ')}</span>

                    <h4 className="text4">Certifications,</h4>
                    <ul>
                        {profileData.certifications.map((certification, index) => (
                            <li key={index}>{certification}</li>
                        ))}
                    </ul>

                    <h4 className="text4">Accomplishments,</h4>
                    <ul>
                        {profileData.accomplishments.map((accomplishment, index) => (
                            <li key={index}>{accomplishment}</li>
                        ))}
                    </ul>

                    <h4 className="text4">Additional,</h4>
                    <ul>
                        {profileData.additionalExperiences.map((experience, index) => (
                            <li key={index}>{experience}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default About;
