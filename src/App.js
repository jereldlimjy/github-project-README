import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import RepoItem from './components/repos/RepoItem';
import Search from './components/users/Search';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import './App.css';

const md = MarkdownIt();

class App extends Component {
  state = {
    users: [],
    repos: [],
    readme: null,
    loading: false,
    alert: '',
    repoAlert: ''
  }

  // Search for users
  searchUsers = async (text) => {
    this.setState({ loading: true, alert: '' });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    if (res.data.items.length) {
      this.setState({ users: res.data.items, loading: false });
    } else {
      this.setState({ users: [], alert: 'no results found! please try again :( ', loading: false });
    }
  }

  // Get a user's repos
  getUserRepos = async (login) => {
    this.setState({ loading: true, alert: '' });
    const res = await axios.get(`https://api.github.com/users/${login}/repos`);
    if (res.data.length) {
      this.setState({ repos: res.data, loading: false });
    } else {
      this.setState({ repos: [], loading: false });
    }
  }

  // Get README for a particular repo
  getUserRepo = async (login, repo) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(`https://api.github.com/repos/${login}/${repo}/readme`);
      // replace images (if any) with correct src
      const data = md.render(atob(res.data.content)).replaceAll('src="', `src="https://raw.githubusercontent.com/${login}/${repo}/master/`);
      this.setState({ readme: data, loading: false, repoAlert: '' });
    } catch(e) {
      this.setState({ readme: null, loading: false, repoAlert: 'sorry, no README available for this project!' });
    }
  }

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], alert: '' });
  }


  render() {
    const { loading, users, readme, repos, alert, repoAlert } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
                <Users loading={loading} users={users} alert={alert} />
              </Fragment>
            )} />
            <Route exact path='/:login' render={props => (
              <User { ...props } getUserRepos={this.getUserRepos} repos={repos} loading={loading} />
            )} />
            <Route exact path='/:login/:repo' render={props => (
              <RepoItem { ...props } getUserRepo={this.getUserRepo} readme={readme} loading={loading} repoAlert={repoAlert} />
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
