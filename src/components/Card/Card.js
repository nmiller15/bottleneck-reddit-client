import React from 'react';
import Voter from '../../features/Voter/Voter.js';
import Media from '../Media/Media.js';
import mockJson from '../../mock/reddit-all-mock.json';
import comment from '../../resources/comment.svg';
import './Card.css';

// An array of post objects is available at mockJson.data.children
// Relevant properties in 

const Card = ({ key, post, toggle }) =>  {
    
    if (!post || post.data.is_gallery === true) {
        return
    }

    const title = post.data.title;
    const description = post.data.selftext;
    const author = post.data.author;
    const subreddit = post.data.subreddit_name_prefixed;
    const score = post.data.score;
    const numComments = post.data.num_comments;

	return (
	    <div id={key} className="Card">
            <div className="post-header">
                <div className="title-container">
                    <div className="voter">
                        <Voter score={score} />
                    </div>
                    <div className="title">
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div className="media">
                <Media post={post} title={title} />
            </div>
            <div className="post-footer">
                <div className="child subreddit-of-post">
                    <p>{subreddit}</p>
                </div>
                <div className="comment-button-container">
                    <div className="comment-button" onClick={toggle}>
                        <p>{numComments}</p>
                        <img src={comment}  alt=''/>
                    </div>
                </div>
                <div className="child author-of-post">
                    <p>u/{author}</p>
                </div>
            </div>
	    </div>
	);
  }
  
  export default Card;
  
