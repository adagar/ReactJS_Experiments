import React from "react";

const TodoList = ({ tasks, completeTask, uncompleteTask }) => {
  const flipTask = id => {
    //console.log(tasks);
    let taskToFlip = tasks.filter(task => task.id === id)[0];
    //console.log(taskToFlip.task);
    if (taskToFlip) {
      if (taskToFlip.complete) {
        taskToFlip.complete = false;
        uncompleteTask(id);
      } else {
        taskToFlip.complete = true;
        completeTask(id);
      }
    }
  };
  return (
    <div>
      <ul className="collection">
        {tasks &&
          tasks.map(task => {
            console.log(task);
            return (
              <li
                className={
                  "collection-item " +
                  (task.complete ? "completedTask" : "pendingTask")
                }
                key={task.id}
              >
                {task.task}
                <label className="task-check">
                  <input
                    checked={task.complete}
                    type="checkbox"
                    onClick={() => {
                      flipTask(task.id);
                    }}
                  />{" "}
                  <span>Done</span>
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
