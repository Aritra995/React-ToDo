const ToDoList = ({list}) => {

    const todos = list.map( (todo) => {
        return (
            <ol key={todo}>
                {todo}
            </ol>
        );
    });
    return (
        <div className="list">
            {list ? todos : ""}
        </div>
    );
}

export default ToDoList;