import api from "./api/axios"
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [editingTaskID, setEditingTaskID] = useState(null)
  const [editingValue, setEditingValue] = useState('')

  const getTasks = async () => {
    try {
      const response = await api.get('tasks/')
      setTasks(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      console.error("Error fetching tasks:", error)
      setTasks([])
    }
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await api.post('tasks/', {
      title: task
    })
    setTasks(prev => [...prev, response.data])
  }

  const handleDelete = async id => {
    await api.delete(`tasks/${id}/`)
    setTasks(prev => prev.filter(tsk => tsk.id !== id))
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    const currentEditingID = editingTaskID

    await api.patch(`tasks/${currentEditingID}/`, {
      title: editingValue
    })

    setEditingTaskID(null)
    setEditingValue('')
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input 
            type="text" 
            name="task" 
            value={task}
            onChange={handleChange}
            placeholder="..."
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
            Array.isArray(tasks) && tasks.map((el, id) => {
              return (
                <div key={el.id || id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 gap-2">
                  {
                    editingTaskID === el.id ? (
                      <form onSubmit={handleEditSubmit} className="flex gap-2 w-full">
                        <input 
                          type="text" 
                          name="editValue" 
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)} 
                          className="flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        <button 
                          type="submit"
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                        >
                          submit
                        </button>
                      </form>
                    ) : (
                      <>
                        <p className="text-gray-700 text-sm font-medium break-all">{el.title}</p>
                        <div className="flex gap-1 shrink-0">
                          <button 
                            type="button"
                            onClick={() => {
                              setEditingTaskID(el.id)
                              setEditingValue(el.title)
                            }}
                            className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-600 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                          >
                            edit
                          </button>
                          <button 
                            type="button"
                            onClick={() => handleDelete(el.id)}
                            className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                          >
                            delete
                          </button>
                        </div>
                      </>
                    )
                  }
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