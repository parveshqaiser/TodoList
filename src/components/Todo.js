import React from "react";
import './Todo.css' ; 

export function MainList({ text, setText , items, setItems ,show , setShow, editText , setEditText })
{
    // this one is internal CSS , value must be in string format 
    const table = {
        width: '500px',
        margin: 'auto',
        borderRadius: '15px' ,
        backgroundColor: 'rgb(233, 216, 233)' ,  
    };


    //  Delete Items 
    function deleteHandle(id)
    {
        console.log(id)
        const remove = items.filter((val)=>
        {
            return id !==val.id
        })
        setItems(remove);
    }
    
    //  Edit  Items 
    function editHandle(id)
    {
        // console.log(id);
        const edit= items.find((val)=>{
            return id === val.id;
        })
        setText(edit.name);
        setShow(false);
        setEditText(id); 
    }


    return(
       <div >
        <table className="table table-responsive table-hover" style={table}>
            <thead>
                <tr>
                    <th> S No </th>
                    <th> Your Task</th>
                    <th> Delete</th>
                    <th> Edit </th>                    
                </tr>
            </thead>
            <tbody>
                {
                    items.map((val, index)=>
                    {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.name}</td>
                                <td>
                                    <button onClick={()=>deleteHandle(val.id)} className="btn btn-danger bi bi-trash-fill mx-2 mb-2">  </button>
                                </td>
                                <td>
                                    <button onClick= {() => editHandle(val.id)} className="btn btn-outline-primary bi bi-pencil-square">  </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
            {/* {
                items.map((val, index)=>{
                    return(                           
                    <div>
                        <li key={index}>
                            {val.name}
                            <button onClick={()=>deleteHandle(val.id)} className="btn btn-danger bi bi-trash-fill mx-2 mb-2">  </button>
                            <button onClick= {() => editHandle(val.id)} className="btn btn-outline-primary bi bi-pencil-square">  </button>
                        </li> 
                    </div>                          
                    )
                })
            } */}
       </div>
    )
}