import { QueryClient, QueryClientProvider } from "react-query";
import SearchMeal from "./components/search-meals";
import TopQuotes from "./components/top-quotes";
import Users from "./components/users";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
