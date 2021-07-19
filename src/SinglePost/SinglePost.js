import React from 'react';
import './SinglePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://th.bing.com/th/id/OIP.ETZZzWARLT4iT9YLX3930QHaEo?pid=ImgDet&rs=1" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, suscipit!
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sakhawat</b></span>
                    <span className="singlePostDate">1 days ago</span>
                </div>
                <p className="singlePostDes">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ipsum numquam quisquam impedit error consequuntur harum, ex consequatur enim autem fugit, in ad quo ab soluta aliquam qui possimus labore doloribus voluptas porro delectus fuga distinctio. Assumenda numquam tenetur sit reiciendis aspernatur dolorum minima illum animi deserunt quis soluta praesentium, laborum quos obcaecati ea, quod ipsam necessitatibus, nam natus illo libero rem veritatis hic est! Qui voluptas ipsum eligendi nostrum.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ipsum numquam quisquam impedit error consequuntur harum, ex consequatur enim autem fugit, in ad quo ab soluta aliquam qui possimus labore doloribus voluptas porro delectus fuga distinctio. Assumenda numquam tenetur sit reiciendis aspernatur dolorum minima illum animi deserunt quis soluta praesentium, laborum quos obcaecati ea, quod ipsam necessitatibus, nam natus illo libero rem veritatis hic est! Qui voluptas ipsum eligendi nostrum.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ipsum numquam quisquam impedit error consequuntur harum, ex consequatur enim autem fugit, in ad quo ab soluta aliquam qui possimus labore doloribus voluptas porro delectus fuga distinctio. Assumenda numquam tenetur sit reiciendis aspernatur dolorum minima illum animi deserunt quis soluta praesentium, laborum quos obcaecati ea, quod ipsam necessitatibus, nam natus illo libero rem veritatis hic est! Qui voluptas ipsum eligendi nostrum.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;