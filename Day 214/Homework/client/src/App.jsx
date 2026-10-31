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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input 
            type="text" 
            name="task" 
            value={task}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>

        <div className="space-y-3">
          {
            tasks.map((el, id) => {
              return (
                <div key={id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-700 text-sm font-medium">{el.title}</p>
                  <button 
                    onClick={() => handleDelete(el.id)}
                    className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App