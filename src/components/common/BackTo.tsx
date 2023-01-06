import React from 'react';
import {NavLink} from "react-router-dom";

type BackToPropsType = {
    href:string,
    img:string
}
const BackTo = ({href,img}:BackToPropsType) => {
    return (
        <div className={'navLink-back'}>
            <NavLink to={`/${href}`} >
                <div className={'link-back__item-page'}>
                    <img src={img}  className={'arrowLeft'}/>
                    <p>Back to posts</p>
                </div>
            </NavLink>
        </div>
    );
};

export default BackTo;