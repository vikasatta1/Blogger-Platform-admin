import React, {useState} from 'react';
import vector from '../../assets/rectangle-right.svg';
import arrowLeft from "../../assets/arrow-left.svg";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {blogType} from "../../redux/blogs";
import BackTo from "../../components/common/BackTo";


const BlogPage = () => {
    const {blogId} = useParams()
    const blog = useSelector<AppRootStateType, Array<blogType>>(state => state.blogs).find(b => b.id === blogId)


    const [name,setName] = useState(blog?.name)
    const [website,setWebsite] = useState(blog?.websiteUrl)
    const [description,setDescription] = useState(blog?.description)

    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Blogs</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p>{blog?.name}</p>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={'p-edit'}>Edit</p>
                </div>
            </div>
            <BackTo href={'blogs'} img={arrowLeft}/>
            <div className={'margin-right'}>
                <div className="banner-blog">
                </div>
                <div className={'blog-form'}>
                    <p>Blog Name</p>
                    <input value={name}/>
                    <p>Website</p>
                    <input value={website}/>
                    <p>Blog Description</p>
                    <textarea value={description}/>
                </div>

                <div className={'wrap-button_blog-page'}>
                    <button>Edit blog</button>
                </div>
            </div>
        </>
    );
};

export default BlogPage;