import React, { ChangeEvent, ReactElement } from "react";
import { useState } from "react";
import './Checkbox.css';

interface Props{
    text : string
}

const CheckBoxItem = ({text} : Props): ReactElement => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const checkClick = (event:ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }; 


    return <div className="checkBoxItem">
    <input
          type="checkbox"
          checked={isChecked} 
          onChange={checkClick}
    />
    <h3>{text}</h3>
    </div>
}

export default CheckBoxItem