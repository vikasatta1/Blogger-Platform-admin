import React from 'react';
import CloseIcon from "../../assets/icons-tsx/close-icon";

type AddPostModalProps = {
    open: boolean
}
const AddPostModal = ({open}: AddPostModalProps) => {
    const classWrap = open ? 'wrapper-basic-modal open' : 'wrapper-basic-modal'
    return (
        <div className={'wrapper-basic-modal open'}>
            <div className={'wrap-add-post-modal'}>
                <div className={'header-add-post-modal'}>
                    <h3>Add post</h3>
                    <CloseIcon closeFunction={() => {
                    }}/>
                </div>
                <div className={'add-post-modal-content'}>
                    <div className="img-add-post-modal">

                    </div>
                  <div className={'add-post-modal-form'}>
                      <p>Post Name</p>
                      <input className={'input-post-name-modal'}/>
                      <p>Blog</p>
                      <select>
                          <option value="value1">Let's fly</option>
                          <option value="value2">Let's fly into</option>
                          <option value="value3">Let's fly into space</option>
                          <option value="value4">Let's fly into space on rocket</option>
                      </select>
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

export default AddPostModal;