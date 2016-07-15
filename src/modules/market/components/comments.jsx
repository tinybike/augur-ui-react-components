import React from 'react';

const Comments = () => (
	<div className="market-comments" >
		<iframe
			className="facebook-comments"
			src={`https://www.facebook.com/plugins/comments.php?href=${window.location.protocol}//${window.location.hostname}${window.location.pathname}`}
		/>
	</div>
);

export default Comments;