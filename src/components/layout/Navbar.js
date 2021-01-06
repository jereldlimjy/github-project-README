import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav>
                <h1>{title}</h1>
                <hr/>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Projects README'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
