import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class User extends Component {
    componentDidMount() {
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        repos: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }

    render() {
        const login = this.props.match.params.login;
        const { repos, loading, repoAlert } = this.props;

        return (
            <Fragment>
                <Link to='/'>
                    <button>Back To Search</button>
				</Link>
                {loading 
                    ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                    : 
                    <div style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                        <h1>{login}'s projects</h1>
                        {repos.length === 0 && <h2>nothing here...</h2>}
                        <ol>
                            {repos.map(repo => (
                                <li key={repo.id} style={{ marginBottom: '10px' }}>
                                    <Link to={`/${login}/${repo.name}`}>{repo.name}</Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                }
            </Fragment>
        )
    }
}

export default User
