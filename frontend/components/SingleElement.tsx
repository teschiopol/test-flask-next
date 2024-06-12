import {useBack} from "@/service";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function SingleElement({todo} : any){
    const router = useRouter();
    const [status, setStatus] = useState(todo.state)

    function update() {
        useBack.updateTodo(todo).then(() => setStatus(!status))
    }

    function remove() {
        useBack.deleteTodo(todo.id).then(() => router.refresh())
    }

    return (
        <div className={`flex items-center space-x-2 justify-end mb-2`}>
            <p>{todo.title} - Stato: {!status ? 'Da fare' : 'Completato'}</p>
            <button className={`border-2 bg-cyan-500 border-cyan-800 p-1`} onClick={update}>
                Update
            </button>
            <button className={`border-2 bg-red-500 border-red-800 p-1`} onClick={remove}>
                Remove
            </button>
        </div>
    )
}
