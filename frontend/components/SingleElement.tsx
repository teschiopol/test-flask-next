export default function SingleElement({todo} : any){
    function update(number: number) {
        return undefined;
    }

    function remove(number: number) {
        return undefined;
    }

    return (
        todo.forEach(function ({el} : any) {
            console.log(el)
            return (
                <div className={`flex space-x-2`}>
                    <p>{el.title} - Stato: {el.state}</p>
                    <button className={`border-2 border-cyan-950 p-1`} onClick={update(el.id)}>
                        Update
                    </button>
                    <button className={`border-2 bg-red-600 border-cyan-950 p-1`} onClick={remove(el.id)}>
                        Remove
                    </button>
                </div>
            )
        })
    )
}
