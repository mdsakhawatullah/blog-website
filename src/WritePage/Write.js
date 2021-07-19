import React from 'react';
import './Write.css'

const Write = () => {
    return (
        <div className="write">
            <img src="https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="writeImg" />
            
        <form action="" className="wwriteForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story...." type="text" className="writeInput writeText">

                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
            </form>            
        </div>
    );
};

export default Write;