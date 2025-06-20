import React, { ReactElement, useState} from "react";
import InputBox from "../InputBox/InputBox";
import CheckBoxItem from "../CheckBox/CheckBox";
import CheckBoxList from "../CheckBoxList/CheckBoxList";
import Button from "../Button/Button";



const TodoList = (): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');
    const [listValue, setListValue] = useState<ReactElement[]>([]);
    const AddItem = (): void =>{
        listValue.push(<CheckBoxItem text={inputValue}></CheckBoxItem>);
        setListValue([...listValue]);
    }


    return <div className="TodoList">
        <CheckBoxList title="tasks: " items={listValue}></CheckBoxList>
        <InputBox title="insert a task to complete" inputValue={inputValue} setValue={setInputValue}></InputBox>
        <Button text="enter" OnClick={AddItem}></Button>
    </div>
}

export default TodoList