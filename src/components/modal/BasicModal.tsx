import React, {useState} from "react";
import CloseIcon from "../../assets/icons-tsx/close-icon";


type ModalWindowPropsType = {
    header: string
    open:boolean
    closeModal: () => void
    onClickNo: () => void
    onClickYes: () => void
    item:string


}

export const BasicModal = ({header,closeModal,onClickNo,onClickYes,item,open}: ModalWindowPropsType) => {

const classWrap =open ? 'wrapper-basic-modal open' : 'wrapper-basic-modal'
    return (
        <div className={classWrap}>
            <div className={'wrap-modal'}>
                <div className={'header-basic-modal'}>
                    <h2>Delete a {header}</h2>
                    <CloseIcon closeFunction={closeModal}/>
                </div>
                <p>Are you sure you want delete this {item}?</p>
                <div className={'wrap-button-yes-no'}>
                    <button onClick={onClickNo} className={'button-no'}>No</button>
                    <button onClick={onClickYes} className={'button-yes'}>Yes</button>
                </div>
            </div>
        </div>
    )
}




