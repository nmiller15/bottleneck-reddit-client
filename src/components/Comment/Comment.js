import React from 'react';
import Voter from '../../features/Voter/Voter.js';
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
            <Voter score={score}/>
        </div>
        <div className="comment-content">
            <p class="author">{author}</p>
            <p class="body">{body}</p>
        </div>
	  </div>
	);
  }
  
  export default Comment;
  