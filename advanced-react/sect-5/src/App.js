import includeUser from "./components/include-user";
import UserInfo from "./components/user-info";

const UserInfoWithUser = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      <UserInfoWithUser />
    </>
  );
}

export default App;
