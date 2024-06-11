import React, { useState, useEffect } from "react";
import "../styles.css";
const SaleOrderForm = ({ order, readOnly, onSave }) => {
  const [formState, setFormState] = useState(order || {});

  useEffect(() => {
    setFormState(order || {});
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer:
        <input
          type="text"
          name="customer"
          value={formState.customer || ""}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formState.date || ""}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <button type="submit" disabled={readOnly}>
        Save
      </button>
    </form>
  );
};

export default SaleOrderForm;
