import React from 'react';
import CloseIcon from "../../assets/icons-tsx/close-icon";

type EditPostModalProps = {
    open: boolean
    closeModal: () => void
    title:string
    blogName:string
}
const EditPostModal = ({open, closeModal,title,blogName}: EditPostModalProps) => {
    const classWrap = open ? 'wrapper-basic-modal open' : 'wrapper-basic-modal'
    return (
        <div className={classWrap}>
            <div className={'wrap-add-post-modal'}>
                <div className={'header-add-post-modal'}>
                    <h3>Edit post</h3>
                    <CloseIcon closeFunction={closeModal}/>
                </div>
                <div className={'add-post-modal-content'}>
                    <div className="img-add-post-modal">

                    </div>
                    <div className={'add-post-modal-form'}>
                        <p>Post Name</p>
                        <input className={'input-post-name-modal'} value={title}/>
                        <p>Blog</p>
                        <input value={blogName} className={'input-post-blog-modal'}/>

                        <p>Description</p>
                        <textarea/>
                    </div>
                    <div className={'wrap-add-post-modal-button'}>
                        <button>Publish</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditPostModal;