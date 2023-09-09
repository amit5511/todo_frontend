import { useEffect, useState } from 'react';
import './App.css';
import  axios from 'axios'

function App() {
  const [todo, setTodo]=useState([]);
  const [task, setTask]=useState('');

  const addTask = () => {
    if (task.trim() !== "") {
      setTodo([...todo, task]);
      setTask("");
    }
  };
  it remote add origin https://github.com/amit5511/todo_frontend.git
  const getTodo=async()=>{
    try {
      let todo_data = await axios.get('https://todo-list-backend-uh64.onrender.com',{
        'Access-Control-Allow-Origin':'https://todo-list-backend-uh64.onrender.com/'
      });
      setTodo(todo_data)
      console.log(todo_data)
    } catch (error) {
      console.log('error in fetching todos from api',error);
    }
  }
  useEffect(()=>{
    getTodo();
   
  },[]);

  
  return (
    <div className="px-8 w-96 h-96 ml-auto mr-auto mt-40 border-slate-400 shadow-md">
      <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
      <h1 className="text-slate-900 group-hover:text-white text-lg font-semibold">Note App</h1>
      <div className=''>
        <input type='text' className='border-2 rounded-md shadow' onChange={(e)=>setTask(e.target.value)} value={task} id='todo-item' placeholder='Add New...'>
        </input>
        <button type='button' className="w-20 h-11 rounded-full ml-6 bg-blue-400" onClick={addTask} id='save'><span className='rounded-full mr-2 bg-white-300'>&#43;</span>Add</button>
        </div>
        <div>
          <h1 className='text-lg font-semibold mt-7'>Notes</h1>
          <div className='divide-y divide-blue-200' id='todo-list'>
            {/* {
              todo.map((item,index)=>{
                
              })
            } */}
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
            <div>iteam1</div>
           
            </div>
        </div>
    </div>
  );
}

export default App;
