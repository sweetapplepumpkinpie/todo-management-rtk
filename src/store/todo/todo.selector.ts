import { TRootState } from "../index"

export const selectTodos = (state: TRootState) => state.todo.todos
