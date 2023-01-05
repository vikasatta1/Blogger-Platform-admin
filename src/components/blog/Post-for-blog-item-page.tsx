import React from 'react';

import {NavLink} from "react-router-dom";
import {postType} from "../../redux/posts-reducer";

const PostForBlogItemPage = ({id, blogId, blogName, shortDescription, createdAt, content, title}:postType) => {
    return (
        <div className={'blog-for-blog-item-page'}>
            <div className="postItem-imgBig">
            </div>
            <div className="postItem-description">
                <div className="description-text">
                    <NavLink to={`/post/${id}`}>
                    <h3>{title}</h3>
                    </NavLink>
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                    <p className={'grey-text'}>12.12.2022</p>
                </div>
            </div>
        </div>
    );
};

export default PostForBlogItemPage;