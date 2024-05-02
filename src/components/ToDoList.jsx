const ToDoList = ({ list,onEmptyButtonClick }) => {

    const todos = list.map((todo) => {
        return (
            <ol key={todo}>
                {todo}
            </ol>
        );
    });
    return (
        <>
            <div className="list">
                {(list.length > 1) ? todos : <h4 className="textInItalic">Nothing to do buddy. Sleep!</h4>}
            </div>
            { (list.length > 1) ? 
                <button className="button" onClick={onEmptyButtonClick} >Empty</button> : ''  }
        </>
    );
}

export default ToDoList;