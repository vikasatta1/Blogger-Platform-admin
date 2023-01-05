import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import BlogsIcon from "../../assets/icons-tsx/blogs-icon";
import PostIcon from "../../assets/icons-tsx/post-icon";

const Navigation = () => {
    const [activeLink, setActiveLink] = useState<'blogs' | 'posts'>('blogs')

    const setActiveBlogsLinkHandler = () => {
        setActiveLink('blogs')
    }
    const setActivePostsLinkHandler = () => {
        setActiveLink('posts')
    }
    return (
        <div className={'navigation'}>

            <NavLink to={'blogs'}>
                <div className={'blogsNav'} onClick={setActiveBlogsLinkHandler}>
                    <BlogsIcon fill={activeLink === 'blogs' ? '#F8346B' : '#1A1718'}/>
                    <p className={activeLink === 'blogs' ? 'active' : ''}>Blogs</p>
                </div>
            </NavLink>


            <NavLink to={'posts'} onClick={setActivePostsLinkHandler}>
                <div className={'posts'}>
                    <PostIcon fill={activeLink === 'posts' ? '#F8346B' : '#1A1718'}/>
                    <p className={activeLink === 'posts' ? 'active' : ''}>Posts</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Navigation;


