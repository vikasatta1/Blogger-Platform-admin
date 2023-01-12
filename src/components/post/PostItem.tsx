import React, {useState} from 'react';
import {postType} from "../../redux/posts-reducer";
import {NavLink} from "react-router-dom";
import Setting from "../common/Setting";
import {DeleteModal} from "../modal/DeleteModal";
import EditPostModal from "../modal/EditPostModal";


const PostItem = ({id, title, shortDescription, content, blogId, blogName, createdAt}: postType) => {
    const [openModalDelete,setOpenDelete] = useState(false)
    const [openModalEdit,setOpenModalEdit] = useState(false)
    const OpenDeleteModalHandler = () => {
        setOpenDelete(!openModalDelete)
    }
    const setEditModalHandler = () => {
        setOpenModalEdit(!openModalEdit)
    }

    const onClickYesHandler = () => {}



    return (
        <div className={'postItem'}>
            {openModalEdit && <EditPostModal open={openModalEdit} closeModal={setEditModalHandler} title={title} blogName={blogName}/>}
            <div className="postItem-imgBig">

            </div>
            <div className="postItem-description">
                <div className="description-logo">
                    <div className={'logo-small'}>

                    </div>
                </div>
                <div className="description-text">
                    <div className={'wrap-name-blog-post-item'}>
                        <NavLink to={`/post/${id}`}>
                            <h3>{title}</h3>
                        </NavLink>
                        <Setting marginTopRight={'1'} item={'post'} itemId={id} openDeleteModal={OpenDeleteModalHandler} setEditModalHandler={setEditModalHandler} />
                    </div>
                    <p>The best blog in your village</p>
                    <p className={'grey-text'}>12.12.2022</p>
                </div>
            </div>
            {openModalDelete &&
            <DeleteModal
                header={'post'}
                open={openModalDelete}
                closeModal={OpenDeleteModalHandler}
                onClickNo={OpenDeleteModalHandler}
                onClickYes={onClickYesHandler}
                item={'post'} />}

        </div>
    );
};

export default PostItem;