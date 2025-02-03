import axios from "axios";
import UserInfo from "./components/user-info";
import DataSourceRender from "./components/data-source-render";

function App() {
  async function getUser(url) {
    const response = await axios.get(url);
    return response.data;
  }
  return (
    <>
      <DataSourceRender
        getData={() => getUser("/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceRender>
    </>
  );
}

export default App;
