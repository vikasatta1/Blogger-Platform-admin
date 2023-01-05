import React from 'react';
import {blogType} from "../../redux/blogs";
import {NavLink} from "react-router-dom";

const BlogItem = ({id, name, description, websiteUrl}: blogType) => {
    return (
        <div className={'blogItem-wrap'}>
            <div className="blogItem-logo-wrap">
                <div className={'blogItem-logo'}>

                </div>
            </div>
            <div className="blogItem-content">
                <NavLink to={`/blog/${id}`}>
                    <h3>{name}</h3>
                </NavLink>
                <p className={'p-web'}>Website: <a>{websiteUrl}</a></p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogItem;


