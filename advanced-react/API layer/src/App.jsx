import { QueryClient, QueryClientProvider } from "react-query";
import SearchMeal from "./components/search-meals";
import TopQuotes from "./components/top-quotes";
import Users from "./components/users";
import UpdateQuotes from "./components/update-quote";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UpdateQuotes />
        <TopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
