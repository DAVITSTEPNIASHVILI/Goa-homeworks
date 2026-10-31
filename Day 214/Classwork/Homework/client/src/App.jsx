import api from "./api/axios"
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  const getTasks = async () => {
    const response = await api.get('tasks/')
    setTasks(response.data)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await api.post('tasks/', {
      title: task
    })
    setTasks(response.data)
  }

  const handleDelete = async id => {
    const response = await api.delete(`delete_task/${id}/`)
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
  }, [])

  console.log(tasks)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>

      {
        tasks.map((el, id) => {
          return (
            <div key={id}>
              <p>{el.title}</p>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App