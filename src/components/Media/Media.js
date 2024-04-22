import React from 'react';
import './Media.css';
  
  const Media = ({ post, title }) =>  {

	if (!post.data.post_hint) {
        return
    }

	const postHint = post.data.post_hint;

	let url;
    
    if (postHint === "hosted:video") {
        url = post.data.media.reddit_video.fallback_url;
      } else if (postHint === "image" || postHint === "link") {
        url = post.data.url_overridden_by_dest;
      } else if (postHint === "link") {
        url = post.data.url;
      } else {
        return null;
      }

	return (
		<div className="Media">
			{postHint === "hosted:video" ? (
				<div className="media-container">
					<video src={url} controls></video>
				</div>
			) : postHint === "image" ? (
				<div className="media-container">
					<img src={url} alt={title}/>
				</div>
			) : postHint === "link" ? (
				<div className="link-container">
					<a href={url} target="_blank" rel="noreferrer">{url}</a>
				</div>
			) : null }
		</div>
	);
  }
  
  export default Media;
  