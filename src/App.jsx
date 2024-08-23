import { useEffect, useMemo, useReducer, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { reducer } from './Reducer/reducer'
import axios from 'axios'
import Todo from './Components/Todo'

function App() {
	const initialState = []
	const [state, dispatch] = useReducer(reducer, initialState)
    const [query, setQuery] = useState('')

	useEffect(() => {
		axios.get('http://localhost:7777/todos')
		.then(res => {
		  dispatch({type: "SET", payload: res.data})
		})
	  }, [])

	const removePost = (data) => {
		dispatch({type: "REMOVE", payload:data.id})
	  }

	const searchedPosts = useMemo(() => {
        return state?.arr?.filter(item => item.title.toLowerCase().includes(query.toLocaleLowerCase().trim()))
    },[query, state?.arr])


  return (
    <>
		<Header dispatch={dispatch} setQuery={setQuery} query={query}/>
		{
			searchedPosts?.length > 0 ? 
			<section className=' container m-auto flex flex-col gap-7'>
				{
					searchedPosts?.map((item, index) => <Todo key={item.id} index={index} remove={removePost} item={item} dispatch={dispatch}/>)
				}
			</section>
			:
			<section className=' container m-auto text-center'>
				<h1 className='text-bold text-3xl'>NOTHING FOUND</h1>
			</section>
		}
    </>
  )
}

export default App
