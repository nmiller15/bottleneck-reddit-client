import React from 'react';
import mockJson from '../../mock/reddit-all-mock.json'

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

    console.log('postHint ' + postHint);
    
    console.log('title: ' + title);
    console.log('description ' + description);
    console.log('author ' + author);
    console.log('subreddit ' + subreddit);
    console.log('score ' + score);
    console.log('thumbnailUrl ' + thumbnailUrl);
    console.log('url ' + url);
    console.log('numComments ' + numComments);


	return (
	    <div className="Card">
            <div className="title-container">
                <div className="voter"></div>
                <div className="title">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="video-container">
                    <video src={url} controls></video>
                </div>

            </div>
	    </div>
	);
  }
  
  export default Card;
  