import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, repos_url } }) => {
    return (
        <div style={{ textAlign: 'center', borderStyle: 'solid', padding: '1rem' }} >
            <img src={avatar_url} alt="avatar" style={{ borderRadius: '50%', width: '80px' }} />
            <h4>{login}</h4>
            <Link to={`/${login}`}><button>View Projects</button></Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
