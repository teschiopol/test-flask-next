const URL = 'http://127.0.0.1:5000/api';

export const useBack = {
    listTodo: async () => {
        try {
            const response = await fetch(`${URL}/todo/`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    },
    createTodo: async (todo: any) => {
        try {
            await fetch(`${URL}/todo/`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(todo),
            });
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    },
    updateTodo: async (todo: any) => {
        try {
           await fetch(`${URL}/todo/${todo.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({'state': !todo.state}),
           });
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    },
    deleteTodo: async (id: number) => {
        try {
            await fetch(`${URL}/todo/${id}`, {
                method: "DELETE"
            });
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }
}
