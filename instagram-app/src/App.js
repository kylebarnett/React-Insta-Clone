import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      username: 'kylebarnett',
      search: '',
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  addNewComment = (e, index) => {
    e.preventDefault();
    this.setState({
      text: '',
      posts: this.state.posts.map(post => {
        if (this.state.posts[index].username === post.username) {
          post.comments = [...post.comments, {
            text: this.state.text,
            username: this.state.username
          }]
        }
        return post
      }),
    })
  }

  heartIncrement = (e, index) => {
    e.preventDefault()
    this.setState({
      posts: this.state.posts.map(post => {
        if (this.state.posts[index].username === post.username) {
          post.likes = post.likes + 1
        }
        return post
      })
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // filterUsername = e => {
  //   e.preventDefault();
  //   this.setState({
  //     search: '',
  //     posts: this.state.posts.filter((post, index) => {
  //       return post.username = this.state.search
  //     })
  //   })
  // }
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          posts={this.state.posts}
          handleChange={this.handleChange}
          addNewComment={this.addNewComment}
          text={this.state.text}
          heartIncrement={this.heartIncrement}
          search={this.state.search}
        />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

export default App;
