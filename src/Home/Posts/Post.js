import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className='post'>
            <img src="https://th.bing.com/th/id/OIP.ETZZzWARLT4iT9YLX3930QHaEo?pid=ImgDet&rs=1" alt="" className="postImg" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, facere!</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias quo quasi aperiam harum iure quis aliquam illum consequuntur? Nulla!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias quo quasi aperiam harum iure quis aliquam illum consequuntur? Nulla!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias quo quasi aperiam harum iure quis aliquam illum consequuntur? Nulla!
            </p>
            
        </div>
    );
};

export default Post;