import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.onSubmit} style={{ marginBottom: '20px', display: 'inline-block' }} > 
                    <input value={this.state.text} onChange={this.onChange} name="text" type="text" placeholder="Search for a user..." style={{ width: '250px' }} required/>
                    <button style={{ marginLeft: '5px' }} >Search</button>
                </form>
                <button onClick={this.props.clearUsers} style={{ marginLeft: '5px' }} >Clear</button>
            </div>
        )
    }
}

export default Search
