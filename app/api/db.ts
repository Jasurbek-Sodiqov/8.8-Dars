export interface ITodo {
  text: string;
  completed: boolean;
}

const todosDB = new Map<number, ITodo>();

todosDB.set(1, { text: "My todo 1", completed: true });

let id = 1;

export function getTodos(id?: number) {
  if (id) {
    if (todosDB.has(id)) {
      return { id, ...todosDB.get(id) };
    } else return null;
  }

  return Array.from(todosDB, ([key, value]) => ({ ...value, id: key }));
}

export function createTodo(todo: string) {
  const new_todo = {
    text: todo,
    completed: true,
  };
  todosDB.set(++id, new_todo);
}

export function deleteTodo(id: number) {
  todosDB.delete(id);
}

export function updateTodo(id: number, body: ITodo) {
  if (todosDB.has(id)) {
    const prevTodo = todosDB.get(id)!;
    todosDB.set(id, { ...prevTodo, ...body });
  }
}
