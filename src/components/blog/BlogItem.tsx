import React, {useState} from 'react';
import {blogType} from "../../redux/blogs";
import {NavLink, useNavigate} from "react-router-dom";
import Setting from "../common/Setting";
import {BasicModal} from "../modal/BasicModal";


const BlogItem = ({id, name, description, websiteUrl}: blogType) => {
    const navigate = useNavigate()

    const [openModalDelete,setOpenDelete] = useState(false)
    const OpenDeleteModalHandler = () => {
        setOpenDelete(!openModalDelete)
    }
    const CloseModal = () => {
        setOpenDelete(false)
    }
    const onClickYesHandler = () => {}
    const onClickNoHandler = () => {}

    return (
        <div className={'blogItem-wrap'}>
            <div className="blogItem-logo-wrap">
                <div className={'blogItem-logo'}>

                </div>
            </div>
            <div className="blogItem-content">
                <div className={'wrap-name-blog-post-item'}>
                    <NavLink to={`/blog/${id}`}>
                        <h3>{name}</h3>
                    </NavLink>
                    < Setting marginTopRight={'1'} item={'blog'} itemId={id} openDeleteModal={OpenDeleteModalHandler}/>
                </div>

                <p className={'p-web'}>Website: <a>{websiteUrl}</a></p>
                <p>{description}</p>
            </div>
            {openModalDelete &&
            <BasicModal
                header={'blog'}
                open={openModalDelete}
                closeModal={CloseModal}
                onClickNo={onClickNoHandler}
                onClickYes={onClickYesHandler}
                item={'blog'} />}
        </div>
    );
};

export default BlogItem;