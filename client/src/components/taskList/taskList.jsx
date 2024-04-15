import "./taskList.css";
// import { IoCloseSharp } from "react-icons/io5";
import { getBgColor } from "../../helpers/changeColor";

export const TasksList = ({ tasks, deleteTasks, updateTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(({ title, description, status, id }) => (
        <li
          key={id}
          className="task-item"
          style={{ borderColor: getBgColor(status) }}
          disabled={status === "Unavailable"}
        >
          <div className="info-block">
            <div className="task-name">
              <h3 className="task-title">{title}</h3>{" "}
              <p className="task-type">&nbsp;- {description}&nbsp;</p>
            </div>
            <label className="task-status">
              STATUS:{" "}
              <select
                className="select-status"
                name="status"
                value={status}
                onChange={(e) =>
                  updateTask(id, {
                    title: title,
                    description: description,
                    status: e.target.value,
                  })
                }
              >
                <option value="Planned">Planned</option>
                <option value="InProgress">InProgress</option>
                <option value="Done">Done</option>
              </select>
            </label>
          </div>
          <div className="price-block">
            <button
              type="button"
              onClick={() => deleteTasks(id)}
              className="button-delete"
            >
              X{/* <IoCloseSharp /> */}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
