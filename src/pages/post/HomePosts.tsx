import React, {useState} from 'react';
import PostItem from "../../components/post/PostItem";
import vector from '../../assets/vector-button.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {postType} from "../../redux/posts-reducer";
import AddPostModal from "../../components/modal/AddPostModal";

const HomePosts = () => {
    const [openAddPostModal,setOpenAddPostModal] = useState(false)
    const posts = useSelector<AppRootStateType, Array<postType>>(state => state.posts)
    const setAddPostModalHandler = () => {
        setOpenAddPostModal(!openAddPostModal)
    }
    return (
        <>
            <div className={'main-header'}>
                <h2>Posts</h2>
            </div>

            <div className={'wrap-button-add'}>
                <div className="page-content">
                    <button className={'button-home-add'} onClick={setAddPostModalHandler}>
                        Add post
                    </button>
                </div>
            </div>
            <div className='wrap-posts'>
                {
                    posts.map((p) => <PostItem
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        content={p.content}
                        blogId={p.blogId}
                        blogName={p.blogName}
                        createdAt={p.createdAt}
                        shortDescription={p.shortDescription}
                    />)
                }
            </div>

            <div className={'button-wrap'}>
                <button>Show more <img className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>
             <AddPostModal open={openAddPostModal} closeModal={setAddPostModalHandler} />

        </>
    );
};

export default HomePosts;