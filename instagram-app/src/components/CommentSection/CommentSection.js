import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="comment-section-container">
      <div className="comment-icons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <p className="comment-likes">{props.post.likes}</p>
      {props.post.comments.map(comment => (
        <Comment post={props.post} comment={comment} />
      ))}
    </div>
  )
}

export default CommentSection