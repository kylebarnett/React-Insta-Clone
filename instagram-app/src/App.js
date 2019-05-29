import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

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

  filterUsername = (e, index) => {
    e.preventDefault();
    this.setState({
      search: '',
      posts: this.state.posts.filter((post, index) => {
        post.username = this.state.search
      })
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          index={this.state.index}
          filterUsername={this.filterUsername}
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <PostContainer
          posts={this.state.posts}
          handleChange={this.handleChange}
          addNewComment={this.addNewComment}
          text={this.state.text}
          heartIncrement={this.heartIncrement}
        />
      </div>
    );
  }
}

export default App;
