import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: '#f15B2A' };
    return (
        <nav
            style={{
                borderBottom: 'solid 1px',
                paddingBottom: '1rem',
            }}>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
                Home
            </NavLink>
            {' | '}
            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
                About
            </NavLink>
            {' | '}
            <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : null)}>
                Courses
            </NavLink>
        </nav>
    );
};
export default Header;
