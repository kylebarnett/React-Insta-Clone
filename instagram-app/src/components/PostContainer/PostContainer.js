import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import styled from 'styled-components';

const PostContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;

const PicAndUsername = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Thumbnail = styled.img`
  max-width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`;

const UsernamePic = styled.img`
  max-width: 600px;
  height: auto;
`;

const PostContainer = props => {
  return (
    <PostContainerStyles>
      {props.posts.map((post, index) => (
        <div key={post.username}>
          <PicAndUsername>
            <Thumbnail src={post.thumbnailUrl} alt="thumbnail" />
            <h5>{post.username}</h5>
          </PicAndUsername>
          <UsernamePic src={post.imageUrl} alt="pic" />
          <CommentSection
            post={post}
            index={index}
            handleChange={props.handleChange}
            addNewComment={props.addNewComment}
            text={props.text}
            heartIncrement={props.heartIncrement}
          />
        </div>
      ))}
    </PostContainerStyles>
  )
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    })
  )
}

export default PostContainer