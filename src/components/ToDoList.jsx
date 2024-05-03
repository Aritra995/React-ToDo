
const ToDoList = ({ list, completedList, onEmptyButtonClick, onTaskClick }) => {
    
    const todos = list.map((todo) => {
        const isCompleted = completedList.includes(todo);
        const textStyle = isCompleted ? { textDecoration: 'line-through' } : {};

        return (
            <ol key={todo} onClick={() => onTaskClick(todo)} style={textStyle} className="list-group">
                <li className="list-group-item list-group-item-action">{todo}</li>
            </ol>
        );
    });

    return (
        <>
            <div className="list">
                {(list.length > 0) ? todos : <h4 className="textInItalic">Nothing to do buddy. Sleep! 😴</h4>}
            </div>
            {(list.length > 0) ?
                <button type="button" className="button btn btn-outline-primary btn-lg" 
                    onClick={onEmptyButtonClick}>Remove Completed</button> : ''}
        </>
    );
};

export default ToDoList;
