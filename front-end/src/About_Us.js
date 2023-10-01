import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/about-us')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setAboutData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <img src={aboutData.image} alt="Girl in a jacket" width="500" height="600" />
      <p>{aboutData.content}</p>
    </div>
  );
}

export default AboutUs;