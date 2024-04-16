import React from "react";
import { Formik, Form, Field } from "formik";
import "./addTask.css";

export const FormAddTask = ({ newTask }) => {
  const handleSubmit = ({ title, description, status }, { resetForm }) => {
    newTask({
      title: title,
      status: status,
      description: description,
    });
    resetForm();
  };

  const handleClear = (formik) => {
    formik.resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: "",
        status: "Planned", // Default status
        description: "",
      }}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="form-container">
          <Field
            className="input"
            type="text"
            name="title"
            minLength="5"
            maxLength="100"
            placeholder="Title"
            title="Title may contain only letters, apostrophe, dash and spaces."
            required
          />
          <select
            className="input"
            name="status"
            title="Type may contain only letters, apostrophe, dash and spaces."
            required
            onChange={formik.handleChange}
            value={formik.values.status}
          >
            <option value="Planned">Planned</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done</option>
          </select>
          <Field
            as="textarea"
            className="input-descrition"
            type="text"
            name="description"
            minLength="5"
            maxLength="300"
            placeholder="Description"
            title="Description may contain only letters, apostrophe, dash and spaces."
            required
          />
          <button type="submit" className="button-form">
            SAVE
          </button>
          <button
            type="reset"
            className="button-form"
            onClick={() => handleClear(formik)}
          >
            CLEAR
          </button>
        </Form>
      )}
    </Formik>
  );
};
