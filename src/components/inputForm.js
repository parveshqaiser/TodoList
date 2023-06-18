import { logRoles } from "@testing-library/react";
import React, { useState } from "react";

export function InputForm({text, setText , items ,setItems , show, setShow ,editText ,  setEditText , table, setTable })
{
    const hide = {show};
    // console.log(hide);

    // Add Items 
    function addHandle()
    {
        if (!text)
        {
            alert(`Please Enter Something`)           
        }
        else if (text && !show)
        {
            const isDuplicate = items.some(item => item.name === text)
            // console.log(isDuplicate)
            if(isDuplicate)
            {
                alert("Task Exist in the list...")
            }
            else {
            const edit = items.map((val)=>
            {
                if (val.id === editText) // editText is id here
                {
                    return {...items , name : text}
                }
                return val;
            })
            setItems(edit)
            setText('');
            setShow(true)
        }
        }
        else if (text.charCodeAt(0)==32){
            alert(`Don't Give Space at the starting`);
            setText('');
        }       
        else {
            const isDuplicate = items.some(item => item.name === text)
            console.log(" isDuplicate " ,isDuplicate)
            if(isDuplicate)
            {
                alert("Task Exist in the list...")
            }
            else{
                const modify = {id : new Date().getTime().toString(), name : text};
                setItems([...items, modify])
                setText('')
            }            
        }    
    }

    //  input handle change 
    function inputHandle(e)
    {
        setText(e.target.value.charAt(0).toUpperCase() + e.target.value.split('').slice(1).join('') )
    }

    // remove all 
    function removeAll()
    {
        setItems([]);
        window.location.reload();
    }


    return(
            <dl>
                <div className="d-flex justify-content-center m-2 ">
                    <input type="text" className="form-control w-25" onChange={inputHandle} value={text} />
                    {
                        show ?  <button onClick={addHandle} className=" btn btn-primary bi bi-plus-square-fill mx-1" title="Add Items"> </button> : 
                        <button onClick={addHandle} className="btn btn-success bi bi-pen-fill mx-1" title=" Edit Items">Edit </button>
                    }
                    <button onClick={removeAll} className="bi bi-trash3-fill btn btn-outline-danger" title="Remove All"><span>Remove All</span> </button>
                </div>

            </dl>
    )
}