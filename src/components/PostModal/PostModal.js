import React, { useState, useEffect } from 'react';
import CommentsList from '../CommentsList/CommentsList.js';
import Voter from '../Voter/Voter.js';
import Media from '../Media/Media.js';
import mockJson from '../../mock/reddit-post-mock.json';
import voterMock from '../../resources/voter_mock.svg';
import exit from '../../resources/X.svg';
import './PostModal.css';

// Once the store is set up, the comment button must set the permalink and pass it down to this component
// Sample image perma: "permalink": "/r/pics/comments/1c6e2t7/sarah_huckabee_sanders_paid_19_000_for_this/",
// Sample video perma: "permalink": "/r/Damnthatsinteresting/comments/1c6hah3/ojs_reaction_when_confronted_with_a_photo_of_him/",
// Sample link perma: "permalink": "/r/nba/comments/1c6dz5u/charania_raptors_jontay_porter_has_received_a/",

const PostModal = ( /*{ permalink }*/ ) =>  {
    // Mocked permalink prop
    const permalink = "/r/Damnthatsinteresting/comments/1c6hah3/ojs_reaction_when_confronted_with_a_photo_of_him/"
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`https://api.reddit.com${permalink}.json`);
                if (!response.ok) {
                    throw new Error('Network response failed.');
                }
                //console.log(response);
                const postArray = await response.json();
                //console.log(postArray);
                // Handle any errors, and filter out galleries
                if (!postArray || postArray[0].data.children[0].data.is_gallery === true) {
                    return;
                }
                const post = postArray[0].data.children[0];
                
                setPostData({
                    title: post.data.title,
                    description: post.data.selftext,
                    author: post.data.author,
                    subreddit: post.data.subreddit_name_prefixed,
                    score: post.data.score,
                    numComments: post.data.num_comments,
                    commentArray: mockJson[1].data.children,
                    post: post
                })
                
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchPostData();
    }, [permalink]); // Run this effect with permalink changes
    
    if (!postData) {
        return <div>Loading...</div>;
    }

	return (
	       <div className="PostModal">
            <div id="exit-button">
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
                    <Media post={postData.post} title={postData.title}/>
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
                <h3>Comments <span class="accent">({postData.numComments})</span></h3>
                <CommentsList comments={postData.commentArray} />
            </div>
      </div>
	);
  }
  
  export default PostModal;
  