import React from 'react';
import BlogItem from "../../components/blog/BlogItem";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {blogType} from "../../redux/blogs";

const HomeBlogs = () => {
    const blogs = useSelector<AppRootStateType,Array<blogType>>(state => state.blogs )
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('newBlog')

    }
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
                    <button className={'button-home-add'}
                            onClick={navigateHandler}>
                        Add blog
                    </button>
                </div>
                <div className={'blogs'}>
                    {blogMap}
                </div>
            </div>


        </>
    );
};

export default HomeBlogs;