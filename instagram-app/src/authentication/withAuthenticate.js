import React from 'react';
import PostsPage from '../components/PostContainer/PostsPage';
import Login from '../components/Login/Login';
import PropTypes from 'prop-types';

const withAuthenticate = (PostsPage) => (Login) =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false,
        username: '',
        password: '',
      }
    }

    componentDidMount() {
      if (localStorage.getItem('user')) {
        this.setState({
          loggedIn: true
        }, () => console.log(this.state))
      }
    }
    login = e => {
      e.preventDefault();
      localStorage.setItem('user', this.state.username)
      this.setState({
        loggedIn: true
      })
    }
    handleLoginChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() {
      if (this.state.loggedIn)
        return (
          <div>
            <PostsPage
              posts={this.props.posts}
              handleChange={this.props.handleChange}
              addNewComment={this.props.addNewComment}
              text={this.props.text}
              filterUsername={this.props.filterUsername}
              heartIncrement={this.props.heartIncrement}
              search={this.props.search}
            />
          </div>
        )
      return (
        <div>
          < Login
            handleLoginChange={this.handleLoginChange}
            login={this.login}
            username={this.state.username}
            password={this.state.password}
          />
        </div >
      )
    }
  }

  withAuthenticate.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.number)
  } 

export default withAuthenticate 