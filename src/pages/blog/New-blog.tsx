import React, {useState} from 'react';
import vector from '../../assets/rectangle-right.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import BackTo from "../../components/common/BackTo";
import {useDispatch} from "react-redux";
import {addBlogAC} from "../../redux/blogs-reducer";
import {useNavigate} from "react-router-dom";

const NewBlog = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [blogName,setBlogName] = useState('')
    const [blogWebsite,setBlogWebsite] = useState('')
    const [blogDescription,setBlogDescription] = useState('')
    const blog = {
        id: "25",
        name: "New blog",
        description: "что то там",
        websiteUrl: "https://www.youtube.com/"
    }
    const addBlog = () => {
        dispatch(addBlogAC(blog))
        navigate('/blogs')
    }
    const [] = useState('')
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
                    <input />
                    <p>Website</p>
                    <input />
                    <p>Blog Description</p>
                    <textarea />
                </div>
                <div className={'wrap-button_blog-page'}>
                    <button onClick={addBlog}>Add blog</button>
                </div>
            </div>
        </>
    );
};

export default NewBlog;