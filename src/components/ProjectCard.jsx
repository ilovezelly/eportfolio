import * as React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt="projects" className='card-image'/>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-text'>{props.text}</p>
      <Link to = {props.link}><button className='card-btn'>{props.name}</button></Link>
    </div> 
  )
}

export default ProjectCard

