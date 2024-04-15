import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

export const getAllTasks = async (controller) => {
  try {
    const { data } = await axios.get(`/`, {
      signal: controller.signal,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
  }
};

export const deleteTask = async (controller, id) => {
  try {
    const { data } = await axios.delete(`/${id}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при видаленні даних:", error);
  }
};

export const changeTask = async (controller, _id, updateTask) => {
  try {
    const { data } = await axios.put(`/${_id}`, updateTask, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при спробі зміні даних:", error);
  }
};
export const addTask = async (controller, newTask) => {
  try {
    const { data } = await axios.post(`/`, newTask, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при спробі додавання даних:", error);
  }
};
