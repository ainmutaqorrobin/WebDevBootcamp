import axios from "axios";
import UserInfo from "./components/user-info";
import DataSourceRender from "./components/data-source-render";
import DataSource from "./components/data-source";

function App() {
  async function getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  function getDataFromLocal(key) {
    return localStorage.getItem(key);
  }

  const Message = ({ msg }) => {
    return <h1>{msg}</h1>;
  };
  return (
    <>
      <DataSourceRender
        getData={() => getData("/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceRender>

      <DataSource getData={() => getDataFromLocal("test")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  );
}

export default App;
