import { UserInfo } from "./components/user-info";
import { useUser } from "./hooks/user-hook";

function App() {
  const user1 = useUser("1");
  const user2 = useUser("2");
  const user3 = useUser("3");
  return (
    <>
      <UserInfo user={user1} />
      <UserInfo user={user2} />
      <UserInfo user={user3} />
    </>
  );
}

export default App;
