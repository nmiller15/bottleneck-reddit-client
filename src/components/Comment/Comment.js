import React from 'react';
import './Comment.css';
import voterMock from '../../resources/voter_mock.svg';
  
  const Comment = ({comment}) =>  {
	console.log('comment object arrived in Comment: ' + comment);
    const author = comment.data.author;
    const body = comment.data.body;
    const score = comment.data.score;

    return (
	  <div className="Comment">
        <div className="voter-container">
            <img src={voterMock} alt="" />
        </div>
        <div className="comment-content">
            <p class="author">{author}</p>
            <p class="body">{body}</p>
        </div>
	  </div>
	);
  }
  
  export default Comment;
  