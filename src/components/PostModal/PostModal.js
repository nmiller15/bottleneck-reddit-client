import React from 'react';
import CommentsList from '../CommentsList/CommentsList.js';
import Voter from '../Voter/Voter.js';
import mockJson from '../../mock/reddit-post-mock.json';
import voterMock from '../../resources/voter_mock.svg';
import exit from '../../resources/X.svg';
import './PostModal.css';


const PostModal = () =>  {
    console.log(mockJson);
    const postArray = mockJson[0].data.children;

    const postHint = postArray[0].data.post_hint;

    const title = postArray[0].data.title;
    const description = postArray[0].data.selftext;
    const author = postArray[0].data.author;
    const subreddit = postArray[0].data.subreddit_name_prefixed;
    const score = postArray[0].data.score;
    //const url = postArray[0].data.url;
    const url = postArray[0].data.media.reddit_video.fallback_url;
    const numComments = postArray[0].data.num_comments;
    const permalink = postArray[0].data.permalink;

    const commentArray = mockJson[1].data.children; 

    console.log(permalink);

	return (
	    <div className="PostModal">
            <div id="exit-button">
                <img src={exit} alt="" />
            </div>
            <div className="post-container">
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
                <div className="video-container">
                    <video src={url} controls></video>
                </div>
                <div className="post-footer">
                    <div className="child subreddit-of-post">
                        <p>{subreddit}</p>
                    </div>
                    <div className="child author-of-post">
                        <p>u/{author}</p>
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <h3>Comments <span class="accent">({numComments})</span></h3>
                <CommentsList comments={commentArray} />
            </div>
        </div>
	);
  }
  
  export default PostModal;
  