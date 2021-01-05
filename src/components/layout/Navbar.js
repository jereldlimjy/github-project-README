import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav>
                <h1>{title}</h1>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Github Projects README'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
