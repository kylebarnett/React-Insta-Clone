import React from 'react';
import PostsPage from '../components/PostContainer/PostsPage';
import Login from '../components/Login/Login';

const withAuthenticate = (PostsPage) => (Login) =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {

    }
    render() {
      return (
        <div>
          <PostsPage
            posts={this.props.posts}
            handleChange={this.props.handleChange}
            addNewComment={this.props.addNewComment}
            text={this.props.text}
            heartIncrement={this.props.heartIncrement}
            search={this.props.search}
          />
          <Login />
        </div>
      )
    }
  }

export default withAuthenticate(PostsPage)(Login)