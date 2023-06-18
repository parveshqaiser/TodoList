
import './Todo.css' ;

export function HeaderForToDoList()
{
    const dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday" ,"Thursday", "Friday", "Saturday"];
    const day = new Date().getDay();
    console.log("day ", day)
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();


    // console.log(date, month+1, year);
    
    return(       
        <div className="bg-dark text-white m-2 p-2" id='header'>
            <h2 className="text-center" > Check List for Today , {dayNames[`${day}`]} - { `${date} / ${month+1} / ${year}`}</h2>
            <h3>{}</h3>
        </div>
        
    )
}