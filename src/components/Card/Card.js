import React from 'react';
import Voter from '../Voter/Voter.js';
import mockJson from '../../mock/reddit-all-mock.json';
import comment from '../../resources/comment.svg';
import './Card.css';

// An array of post objects is available at mockJson.data.children
// Relevant properties in 

const Card = ({ key, post }) =>  {
    
    if (!post.data.post_hint) {
        return
    }
    const postHint = post.data.post_hint;

    const title = post.data.title;
    const description = post.data.selftext;
    const author = post.data.author;
    const subreddit = post.data.subreddit_name_prefixed;
    const score = post.data.score;
    let url;
    

    if (postHint === "hosted:video") {
        url = post.data.media.reddit_video.fallback_url;
      } else if (postHint === "image") {
        url = post.data.url_overridden_by_dest;
        console.log("image located at: " + url);
      } else if (postHint === "link") {
        url = post.data.url;
        console.log("link located at: " + url);
      } else {
        return null;
      }
    
    

    const numComments = post.data.num_comments;

    console.log(url);

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
                {postHint === "hosted:video" ? (
                    <div className="video-container">
                        <video src={url} controls></video>
                    </div>
                ) : postHint === "image" ? (
                    <div className="image-container">
                        <img src={url} alt={title}/>
                    </div>
                ) : postHint === "link" ? (
                    <div className="link-container">
                        <a href={url} target="_blank" rel="noreferrer">{url}</a>
                    </div>
                ) : null }
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
  