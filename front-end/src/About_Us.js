import { Link } from 'react-router-dom'
import './About_Us.css'
import React from 'react'
import christineImage from './christine.jpg';


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About_Us = props => {
  return (
    <>
      <h1>Hello and welcome!</h1>
      <p>My name is Christine Lei, a senior at NYU studying Computer Science and Data Science.</p>
      {/* Image Element Added */}
      <img src={christineImage} alt="Christine Lei" className="profileImage" />
      <p>
        A little about me: I was born and raised in Taiwan. When I am not busy trying to find a job (please hire me) or struggling with assignments, you will find me bouldering (probably spend too much time), biking, running, cooking (and baking!!! I have too much oats) and reading manga (my favoriate includes but not limited to Haikyuu (any sports manga in general), HunterXHunter, and Spy family).
      </p>
      <p>Come say hi! I won't bite</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About_Us
