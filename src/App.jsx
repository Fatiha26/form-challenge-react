import React, { useState } from 'react'
import Todolist from './Todolist';
const App = () => {

    const [inputList, setInputList] = useState("");
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

    const deleteItem = (id) => {
        setItem((olditem)=> {
            return olditem.filter((arrelem,index)=>{
                return index !== id;
            });
        });

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
                    {item.map((itemval, index) => {
                       return <Todolist 
                            key={index}
                            id={index}
                            text ={itemval}
                            onSelect={deleteItem}
                        />;
                    })}
                    </ol>
                </div>
            </div>
        </>
    )

};

export default App;