import React from 'react';
import {blogs} from "../redux/blogs";
import BlogItem from "../components/blog/BlogItem";
import vector from "../assets/vector-button.svg";

const HomeBlogs = () => {
    const blogMap = blogs.map((b) =>
        <BlogItem
            key={b.id}
            id={b.id}
            name={b.name}
            description={b.description}
            websiteUrl={b.websiteUrl}
        />)
    return (
        <>
            <div className={'main-header'}>
                <h2>Blogs</h2>
            </div>
            <div className={'page-content'}>
                <div className={'wrap-button-add'}>
                    <button className={'button-home-blogs'}>
                        Add blog
                    </button>
                </div>
                <div className={'blogs'}>
                    {blogMap}
                </div>
            </div>
            <div className={'button-wrap'}>
                <button>Show more <img className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>

        </>
    );
};

export default HomeBlogs;