import "./App.css";
import { useState, useEffect } from "react";
import { Loader } from "./components/loader/loader";
import { TasksList } from "./components/taskList/taskList";
import { FormAddTask } from "./components/formAddTask/formAddTask";
import {
  getAllTasks,
  deleteTask,
  changeTask,
  addTask,
} from "./service/taskServiceAPI";
import sortTasks from "./helpers/sortTasksList";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedTasks = await getAllTasks(controller);
        // console.log(fetchedTasks);
        setTasksList(sortTasks(fetchedTasks.data));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();
  }, []);

  const deleteTasks = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Task?"
    );

    if (!shouldDelete) {
      return;
    }
    const controller = new AbortController();
    try {
      const deletedTask = await deleteTask(controller, id);
      if (deletedTask) {
        setError(null);
        setIsLoading(true);

        const fetchedTasks = await getAllTasks(controller);
        setTasksList(sortTasks(fetchedTasks.data));
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      controller.abort();
    }
  };
  const updateTask = async (id, newStatusTask) => {
    const controller = new AbortController();
    try {
      const updatedTask = await changeTask(controller, id, newStatusTask);
      if (updatedTask) {
        // setTasksList((prev) =>
        //   prev.map((Task) =>
        //     Task._id === _id ? { ...Task, status: newStatusTask.status } : Task
        //   )
        // );
        setError(null);
        setIsLoading(true);

        const fetchedTasks = await getAllTasks(controller);
        setTasksList(sortTasks(fetchedTasks.data));
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      controller.abort();
    }
  };
  const newTask = async (newTask) => {
    const controller = new AbortController();
    try {
      const addedNewTask = await addTask(controller, newTask);
      if (addedNewTask) {
        // setTasksList((prevTasksList) => [...prevTasksList, addedNewTask]);
        setError(null);
        setIsLoading(true);
        const fetchedTasks = await getAllTasks(controller);
        setTasksList(sortTasks(fetchedTasks.data));
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      controller.abort();
    }
  };

  return (
    <>
      <header className="App-header">Todo task list service</header>
      <main>
        <section className="section-main">
          <div className="task-list-div">
            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}
            {tasksList.length && (
              <TasksList
                tasks={tasksList}
                deleteTasks={deleteTasks}
                updateTask={updateTask}
              />
            )}
          </div>
          <div className="task-service-div">
            <h3>Add new task</h3>
            <FormAddTask newTask={newTask} />
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Todo task list Service</p>
        <h3 className="author">
          Developer: <span className="author-name">Teslyuk Yuriy</span>
        </h3>
      </footer>
    </>
  );
}

export default App;
