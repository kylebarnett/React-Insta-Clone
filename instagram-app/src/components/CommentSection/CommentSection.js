import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import styled from 'styled-components';

const CommentSectionContainer = styled.div`
  padding: 10px;
`;

const CommentIcons = styled.div`
  display: flex;
  width: 8%;
  justify-content: space-between;
`;

const CommentLikes = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

class CommentSection extends React.Component {
  render() {
    return (
      <CommentSectionContainer>
        <CommentIcons>
          <i onClick={(e) => this.props.heartIncrement(e, this.props.index)} className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </CommentIcons>
        <CommentLikes>{this.props.post.likes}</CommentLikes>
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
      </CommentSectionContainer>
    )
  }
}

export default CommentSection