import { Button, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import MyModal from './MyModal/MyModal'
import FromEdit from './FormEdit'

const Todo = ({index, item, remove, dispatch}) => {
    const [visible, setVisible] = useState(false)
    

    const check = (data) => {
        dispatch({type:"EDIT", payload: {...data, completed: !data.completed}})
    }


  return (
    <div className=' w-full border-2 border-blue-600 rounded-lg p-3 flex flex-col gap-3'>
        <div className="top flex items-center">
            <Checkbox checked={item.completed} onClick={() => check(item)}/>
            <h1 className=' text-xl font-semibold'>{index + 1}. {item.title}</h1>
        </div>
        <span className='text-lg '> Due: {item.date}</span>
        <div className="btns flex gap-5">
            <Button variant="outlined" onClick={() => setVisible(true)}>Edit</Button>
            <Button variant="outlined" color='error' onClick={() => remove(item)} >Delete</Button>
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
            <FromEdit item={item} dispatch={dispatch} setVisible={setVisible}/>
        </MyModal>
    </div>
  )
}

export default Todo