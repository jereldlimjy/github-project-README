import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RepoItem extends Component {
    componentDidMount() {
        this.props.getUserRepo(this.props.match.params.login, this.props.match.params.repo);
    }

    static propTypes = {
        readme: PropTypes.string,
        loading: PropTypes.bool.isRequired
    }

    render() {
        const { readme, loading, repoAlert } = this.props;
        const login = this.props.match.params.login;
        const repo = this.props.match.params.repo;

        return (
            <Fragment>
                <Link to={`/${this.props.match.params.login}`}>
                    <button>Back To Projects</button>
				</Link>
                {loading 
                    ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
                    : 
                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <h1>{repo}</h1>
                            <h2>{repoAlert}</h2>
                        </div>
                        {repo && 
                            <div dangerouslySetInnerHTML={{ __html: readme }}>
                            </div>
                        }
                    </div>
                }
            </Fragment>
        )
    }
}

export default RepoItem

