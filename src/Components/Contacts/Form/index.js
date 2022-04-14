import React from "react";
import { useState, useEffect } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault(); // form otomatik submit etmesini engeller.

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          onChange={onChangeInput}
          value={form.fullName}
          placeholder="Full Name"
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          onChange={onChangeInput}
          value={form.phoneNumber}
          placeholder="Phone Number"
        ></input>
      </div>
      <div>
        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default Form;
