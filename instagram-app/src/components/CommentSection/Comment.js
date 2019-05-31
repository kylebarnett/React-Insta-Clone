import React from 'react';
import './CommentSection.css';

class Comment extends React.Component {
  render() {
    return (
      <div className="comments">
        <p className="single-username">{this.props.comment.username}</p>
        <p className="single-text">{this.props.comment.text}</p>
      </div>
    )
  }
}

// Comment.propTypes = {
//   comment: PropTypes.arrayOf(PropTypes.string)
// }

export default Comment