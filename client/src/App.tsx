import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./DiplayData";
import MovieSearch from "./MovieSearch";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="rowFlex">
          <DisplayData />
          <MovieSearch />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
