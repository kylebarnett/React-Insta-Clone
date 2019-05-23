import React from 'react';
import Comment from './Comment';


const CommentSection = props => {
  console.log(props.post)
  return (
    <div>
      {props.post.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  )
}

export default CommentSection