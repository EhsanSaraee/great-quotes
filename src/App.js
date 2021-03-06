import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./routes/NewQuote";
import NotFound from "./routes/NotFound";
import QuoteDetail from "./routes/QuoteDetail";
import Quotes from "./routes/Quotes";

function App() {
   return (
      <Layout>
         <Switch>
            <Route path="/" exact render={() => <Redirect to="/quotes" />} />
            <Route path="/quotes" component={Quotes} exact />
            <Route path="/quotes/:quoteId" component={QuoteDetail} />
            <Route path="/new-quote" component={NewQuote} />
            <Route path="*" component={NotFound} />
         </Switch>
      </Layout>
   );
}

export default App;
