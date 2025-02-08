import updateUser from "./update-user";

export const UserInfoForm = updateUser(
  (user, onChangeUser, onSaveUser, onResetUser) => {
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
      </>
    ) : (
      <h3>Loading....</h3>
    );
  },
  "3"
);

function UserForm() {
  return <div>UserForm</div>;
}

export default UserForm;
