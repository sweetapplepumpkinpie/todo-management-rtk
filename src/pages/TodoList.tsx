import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch } from "../app/hooks"
import { getTodos } from "../store/todo/todo.actions"
import { selectTodos } from "../store/todo/todo.selector"

export const TodoList = () => {
  const dispatch = useAppDispatch()
  const todos = useSelector(selectTodos)
  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center mt-10'>
        <table className='table w-full text-left text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='py-3 px-6'>Title</th>
              <th className='py-3 px-6'>Content</th>
              <th className='py-3 px-6'>...</th>
            </tr>
          </thead>
          {todos.length ? (
            todos.map((todo, index) => {
              return (
                <tr
                  key={`todo-${index}`}
                  className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
                >
                  <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {todo.title}
                  </td>
                  <td className='py-4 px-6'>{todo.content}</td>
                  <td width={300} className='py-4 px-6'>
                    <button className='rounded-xl py-2 mr-4 px-5 bg-orange-300 text-white'>
                      Delete
                    </button>
                    <button className='rounded-xl py-2 px-5 bg-blue-300 text-white'>
                      Edit
                    </button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr></tr>
          )}
        </table>
      </div>
    </div>
  )
}
