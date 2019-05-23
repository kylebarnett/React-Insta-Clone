import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(post => (
        <div key={post.username}>
          <h1>{post.username}</h1>
          <img src={post.thumbnailUrl} alt="thumbnail" />
          <img src={post.imageUrl} alt="pic" />
          <CommentSection post={post} />
        </div>
      ))}
    </div>
  )
}

export default PostContainer