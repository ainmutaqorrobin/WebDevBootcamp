import updateResource from "./update-resource";
import updateUser from "./update-user";

export const UserInfoForm = updateResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age } = user || {};
    return user ? (
      <>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: +e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <h3>Loading....</h3>
    );
  },
  "/users/3",
  "user"
);
