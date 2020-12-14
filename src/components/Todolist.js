// import React from 'react';
// import { useState } from 'react';


// function Todolist() {
//     let [list, setList] = useState([
//         {
//             task: 'shopping',
//             id: 1
//         }
//     ]);

//     return (
//         <div>
//             <ul>
//                 {list.map( item => {
//                         <li key={item.id}>{item.task}</li>
//                     }
                    
//                 )}


//             </ul>
//         </div>
//     )
// }

// export default Todolist












import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import ButtonAdd from './ButtonAdd';
import Todos from './Todos';
function Todolist() {

    const [todos, settodos] = useState([
        {
            title:'buy milk', id: 1
        },
        {
            title:'prepare tea', id: 2
        }
    ])
    const [task, settask] = useState({title:'', id:''})
    const handleChange=(e)=>{
        settask({
            title:e.target.value,
            id:uuidv4()
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        settodos([...todos, task]);
        // console.log(e.target.firstChild, e.target.firstChild.childNodes[1].childNodes[0]);
        e.target.firstChild.childNodes[1].childNodes[0].value= '';

    }
    return (
        // <div>
        //     <form className='todoForm' onSubmit={handleSubmit} >
        //         <input type='text' onChange={handleChange}></input>
        //         <button type='submit'>Add</button>
        //         {/* <ButtonAdd /> */}
        //     </form>
        //     <Todos todolist = {todos}/>
        // </div>





        

        // now with submit button in a different component 
        <div>
        <form className='todoForm' onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="My task" variant="outlined" type='text' onChange={handleChange}/>
            <br />
            <ButtonAdd />
        </form>
        <Todos todolist = {todos}/>
    </div>
    )
}

export default Todolist
