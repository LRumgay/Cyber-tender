import Drink from "./components/Drink";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Iconbox from "./components/Iconbox";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import QuestionsOptions from "./pages/QuestionsOptions";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <main className="">
          <Navbar />
          <Hero />
          <Iconbox />
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/Questions">
              <QuestionsOptions />
            </Route>
            <Route exact path="/Drink">
              <Drink />
            </Route>
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
