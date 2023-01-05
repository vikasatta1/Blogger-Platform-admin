import React from 'react';
import {postType} from "../../redux/posts-reducer";
import {NavLink} from "react-router-dom";


const PostItem = ({id, title, shortDescription, content, blogId, blogName, createdAt}: postType) => {
    return (
        <div className={'postItem'}>
            <div className="postItem-imgBig">

            </div>
            <div className="postItem-description">
                <div className="description-logo">
                    <div className={'logo-small'}>

                    </div>
                </div>
                <div className="description-text">
                    <NavLink to={`/post/${id}`}>
                    <h3>{title}</h3>
                    </NavLink>
                    <p>The best blog in your village</p>
                    <p className={'grey-text'}>12.12.2022</p>
                </div>
            </div>
        </div>
    );
};

export default PostItem;