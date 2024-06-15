import React, { useState } from 'react'
import Todolist from './Todolist';
const App = () => {

    const [inputList, setInputList] = useState("apple");
    const [item, setItem] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listItem = () =>{
        setItem((olditem) => {
            return [...olditem, inputList];
        }) ;
        setInputList('');

    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent}/>
                    <button onClick={listItem}>+</button>

                    <ol>
                    {item.map((itemval) => {
                       return <Todolist 
                            text ={itemval}
                        />
                    })}
                    </ol>
                </div>
            </div>
        </>
    )

};

export default App;