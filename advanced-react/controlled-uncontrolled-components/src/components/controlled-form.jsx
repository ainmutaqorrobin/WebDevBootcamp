import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  function resetForm() {
    setFormData({ name: "", age: "" });
  }
  function handleInput(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.clear();
    console.log(formData);

    resetForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInput}
        value={formData.name}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleInput}
        value={formData.age}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ControlledForm;
