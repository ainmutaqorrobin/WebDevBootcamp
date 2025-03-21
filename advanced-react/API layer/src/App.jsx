import { QueryClient, QueryClientProvider } from "react-query";
import SearchMeal from "./components/search-meals";
import TopQuotes from "./components/top-quotes";
import Users from "./components/users";
import UpdateQuotes from "./components/update-quote";
import PaginatedQuotes from "./components/paginated-quotes";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UpdateQuotes />
        <PaginatedQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
