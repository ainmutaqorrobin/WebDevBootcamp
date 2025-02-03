import axios from "axios";
import DataSource from "./components/data-source";
import UserInfo from "./components/user-info";

function App() {
  async function getUser(url) {
    const response = await axios.get(url);
    return response.data;
  }
  return (
    <>
      <DataSource getData={() => getUser("/users/2")} resourceName={"user"}>
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
