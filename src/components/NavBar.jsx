import { useState, useEffect } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  logoPink from '../assets/logoPink.png';

const StyledLink = styled(Link)
        `color:white; 
         text-decoration: none;
         margin: 1rem;
         position: relative;
         &:hover, &:focus{color: yellow};
         &:active{color:red};`

export const NavBar = () => {


    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    },[])


  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logoPink} alt="Logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/skills">Skills</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            </Nav>
              <button className="vvd" onClick={() => window.location = 'mailto:contact@deozzellbusiness.com'}><span>Let's Connect</span></button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
