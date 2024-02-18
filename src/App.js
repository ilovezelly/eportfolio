import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Skills from './components/Skills';

const Header = () => {
    return (
        <BrowserRouter> 
            <Box>
                <NavBar/>
                <Routes>
                    <Route path="/" exact element={<Banner/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
      )
    }

export default Header
