import React from 'react';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="comments">
      <p className="single-username">{props.comment.username}</p>
      <p className="single-text">{props.comment.text}</p>
    </div>
  )
}

export default Comment