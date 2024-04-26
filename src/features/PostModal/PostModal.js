import React, { useState, useEffect } from 'react';
import CommentsList from '../../components/CommentsList/CommentsList.js';
import Voter from '../Voter/Voter.js';
import Media from '../../components/Media/Media.js';
import mockJson from '../../mock/reddit-post-mock.json';
import voterMock from '../../resources/voter_mock.svg';
import exit from '../../resources/X.svg';
import './PostModal.css';

import { useSelector, useDispatch } from 'react-redux';
import { setPermalink, setPostData } from '../../features/PostModal/postModalSlice.js';

const PostModal = ({ toggle, permalink }) =>  {
    
    // const [postData, setPostData] = useState(null);
    const postData = useSelector((state) => state.postModal.postData);
    const dispatch = useDispatch();

    const handleExitClick = () => {
        toggle();
        dispatch(setPermalink(''));
        dispatch(setPostData(null));
    }

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`https://api.reddit.com${permalink}.json`);
                if (!response.ok) {
                    throw new Error('Network response failed.');
                }
                // console.log(response);
                const postArray = await response.json();
                // console.log(postArray);
                // Handle any errors, and filter out galleries
                if (!postArray || postArray[0].data.children[0].data.is_gallery === true) {
                    return;
                }
                const post = postArray[0].data.children[0];
                console.log(post); 
                
                dispatch(
                    setPostData({
                        title: post.data.title,
                        description: post.data.selftext,
                        author: post.data.author,
                        subreddit: post.data.subreddit_name_prefixed,
                        score: post.data.score,
                        numComments: post.data.num_comments,
                        commentArray: postArray[1].data.children,
                        postHint: post.data.post_hint,
                        post,
                    })
                )
                
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchPostData();
    }, [permalink, dispatch]); // Run this effect with permalink changes
    
    if (!postData) {
        return <div>Loading...</div>;
    }

    if (!permalink) {
        return <div>No Post Selected</div>
    }

	return (
	       <div className="PostModal">
            <div id="exit-button" onClick={handleExitClick}>
                <img src={exit} alt="" />
            </div>
            <div className="post-container">
                <div className="post-header">
                    <div className="title-container">
                        <div className="voter">
                            <Voter score={postData.score} />
                        </div>
                        <div className="title">
                            <p>
                                {postData.title}
                            </p>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            {postData.description}
                        </p>
                    </div>
                </div>
                <div className="media">
                    <Media post={postData.post} title={postData.title} postHint={postData.postHint}/>
                </div>
                <div className="post-footer">
                    <div className="child subreddit-of-post">
                        <p>{postData.subreddit}</p>
                    </div>
                    <div className="child author-of-post">
                        <p>u/{postData.author}</p>
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <h3>Comments <span className="accent">({postData.numComments})</span></h3>
                <CommentsList comments={postData.commentArray} />
            </div>
      </div>
	);
  }
  
  export default PostModal;
  