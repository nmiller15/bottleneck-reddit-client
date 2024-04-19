import React from 'react';
import Comment from '../Comment/Comment.js';
  
  const CommentsList = ({ comments }) =>  {
    console.log(comments);
	return (
        <>
            {comments.map((comment, index) => {
                <Comment comment={comment} />
            })}
        </>
        
    )
  }
  
  export default CommentsList;
  