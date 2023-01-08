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
            <div className={'wrap-modal modal '}>

                <div className={'header-basic-modal'}>
                    <h2>Delete a {header}</h2>
                    <svg onClick={closeModal} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                            fill="#1A1718"/>
                    </svg>
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




