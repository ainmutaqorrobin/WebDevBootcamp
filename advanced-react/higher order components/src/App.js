import updateResource from "./components/update-resource";
import UserForm from "./components/user-form";

//Wrapper Component
const UserInfoForm = updateResource(UserForm, "/users/3", "user");

function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
