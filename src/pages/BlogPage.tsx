import React from 'react';
import vector from '../assets/vector-button.svg';
import arrowLeft from "../assets/arrow-left.svg";
import PostForBlogItemPage from "../components/blog/Post-for-blog-item-page";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {postType} from "../redux/posts-reducer";
import {blogType} from "../redux/blogs";



const BlogPage = () => {
    const {blogId} = useParams()
    const posts = useSelector<AppRootStateType, Array<postType>>(state => state.posts)
    const blogs = useSelector<AppRootStateType, Array<blogType>>(state => state.blogs)
    const blog = blogs.find(b => b.id === blogId)

    const postsMap = posts.map((p: postType) =>
        < PostForBlogItemPage
            id={p.id}
            key={p.id}
            title={p.title}
            blogId={p.blogId}
            content={p.content}
            blogName={p.blogName}
            createdAt={p.createdAt}
            shortDescription={p.shortDescription}
        />)
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Posts</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={''}>The best blog in our village</p>
                </div>
            </div>
            <div className={'link-back__blog-page'}>
                <img src={arrowLeft} alt={'arrowLeft'} className={'arrowLeft'}/>
                <p>Back to posts</p>
            </div>
            <div className="banner-blog">

            </div>
            <div className={'margin-right'}>
                <div className={'blogItem-wrap__blog-page'}>
                    <div className={'blog-wrap'}>
                        <div className="blogItem-logo-wrap">
                            <div className={'blogItem-logo__blog-page'}>
                            </div>
                        </div>

                        <div className="blogItem-content__blog-page">
                            <h2>{blog?.name}</h2>
                            <p className={'date'}>Blog creation date:<span> 12.12.2022</span></p>
                            <p className={'p-web'}>Website: <a>{blog?.websiteUrl}</a></p>
                            <p>{blog?.description}</p>
                        </div>
                    </div>


                    <div className={'button-wrap__blog-page'}>
                        <button>Show more <img className={'vector-button-blog-page'} src={vector} alt={'vector'}/>
                        </button>
                    </div>
                </div>


                <div className='wrap-blogs__blog-page'>
                    {postsMap}
                </div>
            </div>
            <div className={'button-wrap'}>
                <button>Show more <img className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>
        </>
    );
};

export default BlogPage;