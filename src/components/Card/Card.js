import React from 'react';
import Voter from '../Voter/Voter.js';
import Media from '../Media/Media.js';
import mockJson from '../../mock/reddit-all-mock.json';
import comment from '../../resources/comment.svg';
import './Card.css';

import { useSelector, useDispatch } from 'react-redux';
import { setPermalink } from '../../features/PostModal/postModalSlice.js';

// An array of post objects is available at mockJson.data.children
// Relevant properties in 

const Card = ({ key, post, toggle }) =>  {
    
    const searchText = useSelector((state) => state.searchText);
    const dispatch = useDispatch();
    const passPermalink = (link) => dispatch(setPermalink(link));

    const handleCommentButtonClick = () => {
        passPermalink(post.data.permalink);
        toggle();
    }
    
    if (!post || post.data.is_gallery === true) {
        return
    }

    const cardData = {
        title: post.data.title,
        description: post.data.selftext,
        author: post.data.author,
        subreddit: post.data.subreddit_name_prefixed,
        score: post.data.score,
        numComments: post.data.num_comments,
        postHint: post.data.post_hint,
        post,
    }

	return (
	    <div id={key} className="Card">
            <div className="post-header">
                <div className="title-container">
                    <div className="voter">
                        <Voter score={cardData.score} />
                    </div>
                    <div className="title">
                        <p>
                            {cardData.title}
                        </p>
                    </div>
                </div>
                <div className="description">
                    <p>
                        {cardData.description}
                    </p>
                </div>
            </div>
            <div className="media">
                <Media post={cardData.post} title={cardData.title} postHint={cardData.postHint} />
            </div>
            <div className="post-footer">
                <div className="child subreddit-of-post">
                    <p>{cardData.subreddit}</p>
                </div>
                <div className="comment-button-container">
                    <div className="comment-button" onClick={handleCommentButtonClick}>
                        <p>{cardData.numComments}</p>
                        <img src={comment}  alt=''/>
                    </div>
                </div>
                <div className="child author-of-post">
                    <p>u/{cardData.author}</p>
                </div>
            </div>
	    </div>
	);
  }
  
  export default Card;
  
