import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function FromAdd({dispatch, setVisible}) {

    const [newTask, setNewTask] = useState({
		title: '',
		date: '',
		id: Math.random(),
		completed: false,
	});


    const handleChangeTask = (event) => {
        setNewTask({...newTask, title:event.target.value});
    };

    const handleChangeDate = (event) => {
        setNewTask({...newTask, date:event.target.value});
        
    };


    const submitForm = (e) => {      
        e.preventDefault()
      
        let data = {
			title: '',
			date: '',
			id: Math.random(),
			completed: false,
		}
    
        let fm = new FormData(e.target)
    
        fm.forEach((value, key) => {
          data[key] = value
        })
		e.target.reset()
		
		setNewTask({...newTask, title:'', date: ''})

		dispatch({type:"ADD", payload:data})

		setVisible(false)
		
    }


  return (
    <form className='flex flex-col gap-5' onSubmit={(e) => submitForm(e)}>
        <h1 className=' text-2xl font-bold text-black'>New Task</h1>
        <TextField required value={newTask.title} name='title' id="task" label="Task" variant="outlined" onChange={(e) => handleChangeTask(e)}/>
        <TextField required value={newTask.date} name='date' type='date' id="date" variant="outlined" onChange={(e) => handleChangeDate(e)}/>
        <Button type='submit' variant="outlined" >SUBMIT</Button>
    </form>
  )
}

export default FromAdd