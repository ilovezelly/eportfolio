import React from 'react'
import ProjectCard from './ProjectCard'
import mp1 from '../assets/mp1.png'
import mp2 from '../assets/mp2.png'


const Projects = () => {
  return (
    <div className="project">
    <ProjectCard image={mp1} title="HTML & CSS Design" text="I designed a website for my Educational Business." name="Click Me" link="https://ilovezelly.github.io/" />
    <ProjectCard image={mp2} title="Vanilla Javascript" text="I created a functional add to cart, registration and logins for my paid courses using vanilla Javascript." name="Click Me" link="https://ilovezelly.github.io/projectMgmt.html"/>
    </div>
  )
}

export default Projects
