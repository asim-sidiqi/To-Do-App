'use client';
import {React, useState} from 'react'

const Home = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setTask([...task, {title,desc}])
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (ind) => {
    let copy = [...task];
    copy.splice(ind,1);
    setTask(copy);
  }
  
  let render = <h2>No task pending. Go watch a movie!</h2>;

  if(task.length>0){
    render = task.map((t,ind)=> {
      return (
        <>
        <li key={ind}>
          <div className='flex items-center justify-between m-4'>
          <h5 className='m-1 text-2xl font-semibold'>{ind+1}. {t.title}</h5>
          <h6 className='m-1 text-lg'>{t.desc}</h6>
          <button onClick={()=>{
            deleteHandler(ind)
          }} className='bg-[#964734] text-white px-4 py-2 rounded-md font-bold transform hover:scale-105 duration-200 ease-in-out'>Delete Task</button>
          </div>
        </li> 
        </>
      )
      
    })
  }

  return (
    <>
    <h1 className="p-3 font-bold text-black bg-[#AFDDE5] text-center text-6xl border-2 border-black border-t-0"> To Do List</h1>

    <form onSubmit={sumbitHandler} className="flex">
      <input type="text" className="w-2/6 text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter Task..." value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} required/> 
      <input type="text" className="w-3/6 text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter Description..." value={desc} onChange={(e)=>{
        setDesc(e.target.value)
      }}/>
      {/* <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded-md">Add Task</button> */}
      <button type="submit" className="w-1/6 h-12 mt-8 m-2 p-2 text-white bg-[#003135] hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] font-medium rounded-lg text-2xl transfform hover:scale-105 ease-in-out duration-200 active:bg-[#964734]">Add Task</button>

    </form>
    <br></br>
    <div className={`${task.length==0? "p-4 bg-[#AFDDE5] border-2 border-black text-black font-bold text-2xl flex justify-center" : "p-4 bg-[#AFDDE5] border-2 border-black"}`}>
      <ul>
        {render}
      </ul>
    </div>
    </>
    
  )
}

export default Home;