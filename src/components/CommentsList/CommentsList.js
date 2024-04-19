import React from 'react';
import Comment from '../Comment/Comment.js';
  
  const CommentsList = ({comments}) =>  {

	
        comments.map((comment) => {
            return <Comment comment={comment} />
        })

  }
  
  export default CommentsList;
  