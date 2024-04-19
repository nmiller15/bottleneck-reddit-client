import React from 'react';
  
  const Comment = ({comment}) =>  {
	
    const author = comment.data.author;
    const body = comment.data.body;
    const score = comment.data.score;

    return (
	  <div>
        <p>{author}</p>
        <p>{body}</p>
        <p>{score}</p>
	  </div>
	);
  }
  
  export default Comment;
  