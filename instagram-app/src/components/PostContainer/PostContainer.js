import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(post => (
        <div key={post.username}>
          <div className="pic-and-username">
            <img className="thumbnail" src={post.thumbnailUrl} alt="thumbnail" />
            <h5>{post.username}</h5>
          </div>
          <img className="username-pic" src={post.imageUrl} alt="pic" />
          <CommentSection post={post} />
        </div>
      ))}
    </div>
  )
}

export default PostContainer