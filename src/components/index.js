import { useEffect, useState } from "react";
import { HeaderForToDoList } from "./header";
import { InputForm } from "./inputForm";
import { MainList } from "./Todo.js";

export function MainPageOfToDoList()
{
    const [text , setText] = useState();
    const [items , setItems ] = useState(getStorage());
    const [show, setShow] = useState(true);
    const [editText, setEditText] = useState(null);
    // const [table, setTable] = useState({display : 'none'})

    useEffect(()=>{
        sessionStorage.setItem('list', JSON.stringify(items))
    }, [items])

    
    function getStorage()
    {
        let list = sessionStorage.getItem('list');
        if (list)
        {
            return JSON.parse(sessionStorage.getItem('list'));
        }
        else{
            return [];
        }
    }
   

    return(
        <div className="container-fluid">
            < HeaderForToDoList />
            <br />
            <InputForm  text={text} setText={setText} items = {items} setItems= {setItems} show={show} setShow={setShow} editText ={editText} setEditText={setEditText}/>

            <br />
            <MainList  text={text} setText={setText} items = {items} setItems= {setItems} show={show} setShow={setShow} editText={editText} setEditText={setEditText}/>
        </div>
    )
}