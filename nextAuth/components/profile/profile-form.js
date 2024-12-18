import { useState } from "react";
import classes from "./profile-form.module.css";

function ProfileForm({ submitForm }) {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const resetForm = () => {
    setFormData({
      oldPassword: "",
      newPassword: "",
    });
  };

  const handleInput = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    submitForm(formData);
    resetForm();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="newPassword"
          onChange={handleInput}
          value={formData.newPassword}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input
          type="password"
          id="oldPassword"
          onChange={handleInput}
          value={formData.oldPassword}
          required
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
