import React from 'react';
import vector from "../../assets/rectangle-right.svg";
import BackTo from "../../components/common/BackTo";
import arrowLeft from "../../assets/arrow-left.svg";
import {blogType} from "../../redux/blogs";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";




const EditBlogPage = () => {
    const {blogId} = useParams()
    const blog = useSelector<AppRootStateType, Array<blogType>>(state => state.blogs).find(b => b.id === blogId)
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Blogs</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={'p-edit'}>Add</p>
                </div>
            </div>
            <BackTo href={'blogs'} img={arrowLeft}/>
            <div className={'margin-right'}>
                <div className="banner-blog">
                </div>
                <div className={'blog-form'}>
                    <p>Blog Name</p>
                    <input value={blog?.name}/>
                    <p>Website</p>
                    <input value={blog?.websiteUrl}/>
                    <p>Blog Description</p>
                    <textarea  value={blog?.description}/>
                </div>
                <div className={'wrap-button_blog-page'}>
                    <button>Add blog</button>
                </div>
            </div>

        </>
    );
};

export default EditBlogPage;