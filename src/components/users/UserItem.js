import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, repos_url } }) => {
    return (
        <div style={{ textAlign: 'center' }} >
            <img src={avatar_url} alt="avatar" style={{ borderRadius: '50%', width: '80px' }} />
            <h4>{login}</h4>
            <a href={repos_url}><button>Projects</button></a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
