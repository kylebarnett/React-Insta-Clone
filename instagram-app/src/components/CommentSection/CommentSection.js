import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  render() {
    return (
      <div className="comment-section-container">
        <div className="comment-icons">
          <i onClick={(e) => this.props.heartIncrement(e, this.props.index)} className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </div>
        <p className="comment-likes">{this.props.post.likes}</p>
        {this.props.post.comments.map(comment => (
          <Comment
            key={comment.text}
            post={this.props.post}
            comment={comment} />
        ))}
        <form onSubmit={(e) => this.props.addNewComment(e, this.props.index)}>
          <input
            value={this.props.text}
            name={'text'}
            onChange={this.props.handleChange}
            className="add-comment"
            type="text"
            placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
}

export default CommentSection