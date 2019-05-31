import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
  return (
    <div>
      <SearchBar
        index={props.index}
        // filterUsername={props.filterUsername}
        search={props.search}
        handleChange={props.handleChange}
      />
      <PostContainer
        posts={props.posts}
        handleChange={props.handleChange}
        addNewComment={props.addNewComment}
        text={props.text}
        heartIncrement={props.heartIncrement}
      />
    </div>
  )
}

export default PostsPage