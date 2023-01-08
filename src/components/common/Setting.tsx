import React, {useState} from 'react';
import Trash from "../../assets/icons-tsx/trash";
import Pencil from "../../assets/icons-tsx/pencil";
import {BasicModal} from "../modal/BasicModal";
import {NavLink} from "react-router-dom";

type SettingPropsType = {
    marginTopRight: string,
    item: string
    itemId: any
    openDeleteModal: () => void

}
const Setting = ({marginTopRight, item, openDeleteModal,itemId}: SettingPropsType) => {
    const [open, setOpen] = useState(false)
    const setOpenHandler = () => {
        setOpen(!open)
    }

    return (
        <div className={`margin-top-right_${marginTopRight}`}>

            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                 onClick={setOpenHandler}>
                <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9
            10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9
             3.1 12 2 12Z"
                      fill="#1A1718"/>
            </svg>
            {open ? <div className={`setting-modal_${item}`}>
                <div className={'setting-modal_block'} onClick={openDeleteModal}>
                    <Trash/>
                    <p>Delete</p>
                </div>
                <div  >
                    <NavLink to={`/${item}/edit/${itemId}`} className={'setting-modal_block'}>
                        <Pencil/>
                        <p>Edit</p>
                    </NavLink>
                </div>

            </div> : ''}

        </div>
    );
};

export default Setting;