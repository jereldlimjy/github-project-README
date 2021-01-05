import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
    return loading 
        ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        : <div style={userStyle}>
            {users.map(user => (
                <UserItem key={ user.id } user={user} />
            ))}
        </div>
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem'
}

export default Users
