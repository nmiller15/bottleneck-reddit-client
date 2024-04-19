import React from 'react';
import mockJson from '../../mock/reddit-all-mock.json';
import comment from '../../resources/comment.svg';
import voterMock from '../../resources/voter_mock.svg';
import './Card.css';

// An array of post objects is available at mockJson.data.children
// Relevant properties in 

const Card = () =>  {
    
    const postArray = mockJson.data.children;

    const postHint = postArray[4].data.post_hint;

    const title = postArray[4].data.title;
    const description = postArray[4].data.selftext;
    const author = postArray[4].data.author;
    const subreddit = postArray[4].data.subreddit_name_prefixed;
    const score = postArray[4].data.score;
    const thumbnailUrl = postArray[4].data.thumbnail;
    //const url = postArray[4].data.url;
    const url = postArray[4].data.media.reddit_video.fallback_url;
    const numComments = postArray[4].data.num_comments;

    console.log(url);

	return (
	    <div className="Card">
            <div className="post-header">
                <div className="title-container">
                    <div className="voter">
                        <img src={voterMock} alt=""/>
                        {/* <Voter score={score} /> */}
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
            <div className="video-container">
                <video src={url} controls></video>
            </div>
            <div className="post-footer">
                <div className="child subreddit-of-post">
                    <p>{subreddit}</p>
                </div>
                <div className="comment-button-container">
                    <div className="comment-button">
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
  