import React from 'react';
import vector from '../assets/rectangle-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import {postType} from "../redux/posts-reducer";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import BackTo from "../components/common/BackTo";



const PostPage = () => {
    const {postId} = useParams()
    const posts = useSelector<AppRootStateType, Array<postType>>(state => state.posts)
    const post = posts.find(p => p.id === postId)
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Posts</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={''}>{post?.shortDescription}</p>
                </div>
            </div>
            <div className="page-content__item-page">
                <BackTo href={'posts'} img={arrowLeft}/>
                <div className={'description-post'}>
                    <div className={'logo-small'}>
                    </div>
                    <p className={'description-post__p'}>
                        {post?.shortDescription}
                    </p>
                </div>
                <div className="options-post">
                    <div className="options-post__name">
                        <h2>{post?.title}</h2>
                        <p>(for public posts)</p>
                    </div>
                    <div className="options-post__date">
                        <p>{post?.createdAt}</p>
                    </div>

                </div>
                <div className={'banner_post-page'}>

                </div>
                <div className={'post-text'}>
                    {post?.content}
                </div>
            </div>

        </>
    );
};

export default PostPage;