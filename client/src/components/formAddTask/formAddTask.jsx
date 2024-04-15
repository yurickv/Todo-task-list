import React from "react";
import { Formik, Form, Field } from "formik";
import "./addTask.css";

export const FormAddTask = ({ newBike }) => {
  const handleSubmit = ({ title, description, status }, { resetForm }) => {
    newBike({
      title: title,
      status: `${Planned}`,
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
        // status: "",
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
          {/* <Field
            className="input"
            type="text"
            name="type"
            minLength="5"
            maxLength="25"
            placeholder="Type"
            title="Type may contain only letters, apostrophe, dash and spaces."
            required
          /> */}
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
