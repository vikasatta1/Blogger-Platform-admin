import React from 'react';
import vector from '../../assets/rectangle-right.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import BackTo from "../../components/common/BackTo";

const NewBlog = () => {
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
                    <button>Add blog</button>
                </div>
            </div>
        </>
    );
};

export default NewBlog;