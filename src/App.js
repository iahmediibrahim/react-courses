import About from './components/about/About';
import Home from './components/home/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import Courses from './components/courses/Courses';
import ManageCourse from './components/courses/ManageCourse';
function App() {
    return (
        <Router>
            <div id="app" className="container-fluid">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course/:slug" element={<ManageCourse />} />
                    <Route path="/course" element={<ManageCourse />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
