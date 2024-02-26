import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
        <img className={s.profileImg} src="http://surl.li/qxzyg" alt="Jackie Chan"/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
