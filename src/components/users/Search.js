import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ textAlign: 'center', marginBottom: '10px' }} > 
                    <input value={this.state.text} onChange={this.onChange} name="text" type="text" placeholder="Search for a user..." style={{ width: '250px' }} />
                    <button style={{ marginLeft: '5px' }} >Search</button>
                </form>
            </div>
        )
    }
}

export default Search
