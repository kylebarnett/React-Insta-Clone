import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const Comments = styled.div`
  display: flex
`;

const SingleUsername = styled.p`
  margin-right: 5px;
  font-weight: bold;
  color: navy;
  font-size: 14px;
`;

const SingleText = styled.p`
  font-size: 14px;
`;

class Comment extends React.Component {
  render() {
    return (
      <Comments>
        <SingleUsername>{this.props.comment.username}</SingleUsername>
        <SingleText>{this.props.comment.text}</SingleText>
      </Comments>
    )
  }
}

export default Comment