import React, { ChangeEvent, ReactElement } from "react";
import { useState } from "react";
import CheckBoxItem from "../CheckBox/CheckBox";

interface Props{
    title : string
    items : ReactElement<any>[]
}

const CheckBoxList = ({title='', items} : Props) => {
    return <div className="checkBoxList">
        <h2>{title}</h2>
        {items}
    </div>
}

export default CheckBoxList;
